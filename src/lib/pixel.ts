/**
 * pixel.ts — the single point of contact with the Meta Pixel (`fbq`).
 *
 * Everything here is defensive by design: the base snippet lives in
 * BaseLayout.astro and may never load (ad blocker, `PUBLIC_META_PIXEL_ID`
 * unset, no network). No call in this module is allowed to throw or to change
 * page behaviour when that happens — tracking is strictly additive.
 *
 * Purchase is deliberately absent: the sale happens on PassTix, outside this
 * repo. The deepest event we can honestly claim is InitiateCheckout ("left
 * towards the checkout").
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    /** Set by the base snippet in BaseLayout.astro; declared so it type-checks. */
    _fbq?: unknown;
  }
}

/** Standard Meta events this site is allowed to send — no loose strings. */
export type PixelEvent = 'PageView' | 'ViewContent' | 'InitiateCheckout' | 'Contact';

/** True only when the pixel script actually loaded and is callable. */
function pixelReady(): boolean {
  return typeof window !== 'undefined' && typeof window.fbq === 'function';
}

/**
 * Sends a standard event. Silent no-op if the pixel isn't there — never throws,
 * so a blocked script can't break a click handler or an effect.
 */
export function trackEvent(name: PixelEvent, params?: Record<string, unknown>): void {
  if (!pixelReady()) return;
  try {
    window.fbq?.('track', name, params);
  } catch {
    // Swallow: analytics must never surface as a runtime error to the user.
  }
}

/** In-memory fallback for `trackOnce` when sessionStorage is unavailable. */
const firedKeys = new Set<string>();

/**
 * Fires an event at most once per browser session.
 *
 * Needed because PricingBlock is mounted twice on /bootcamp (#precios and
 * #precios-final) as two independent React islands: without this, a user who
 * scrolls the whole page would double-count ViewContent. sessionStorage is the
 * primary lock (works across island instances and survives a reload within the
 * tab); the module-level Set covers private mode / blocked storage.
 */
export function trackOnce(key: string, name: PixelEvent, params?: Record<string, unknown>): void {
  if (typeof window === 'undefined') return;
  // Check the pixel BEFORE claiming the lock: burning it while `fbq` is absent
  // would silently drop the event for the rest of the session.
  if (!pixelReady()) return;

  const storageKey = `978:pixel:${key}`;

  if (firedKeys.has(storageKey)) return;
  try {
    if (window.sessionStorage.getItem(storageKey)) return;
    window.sessionStorage.setItem(storageKey, '1');
  } catch {
    // Storage blocked — the in-memory Set below is the only lock we get.
  }
  firedKeys.add(storageKey);

  trackEvent(name, params);
}

function getCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

/** Attribution values Meta uses to tie a click back to an ad. */
export interface AttributionParams {
  fbclid?: string;
  _fbp?: string;
  _fbc?: string;
}

/**
 * Reads the attribution trio: `fbclid` from the landing URL, `_fbp`/`_fbc` from
 * the cookies the pixel itself writes. Keys with no value are omitted entirely
 * so the outbound URL never carries `?fbclid=undefined`.
 */
export function getAttributionParams(): AttributionParams {
  if (typeof window === 'undefined') return {};
  const params: AttributionParams = {};

  const fbclid = new URLSearchParams(window.location.search).get('fbclid');
  if (fbclid) params.fbclid = fbclid;

  const fbp = getCookie('_fbp');
  if (fbp) params._fbp = fbp;

  const fbc = getCookie('_fbc');
  if (fbc) params._fbc = fbc;

  return params;
}
