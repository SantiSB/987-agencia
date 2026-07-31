import { useEffect, useRef, type AnchorHTMLAttributes, type ReactNode } from 'react';
import { checkoutUrl, checkoutUrlWithAttribution } from '@/lib/bootcamp';
import { trackEvent } from '@/lib/pixel';

interface CheckoutLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  /** Plan being bought — 'general' | 'vip'. Sent as the event's `plan` param. */
  planId: string;
  children: ReactNode;
}

/**
 * CheckoutLink — the single place a purchase leaves this site.
 *
 * Deliberately not built on the `Button` primitive: the two purchase CTAs carry
 * bespoke styling (58px vs 52px, font-bold, yellow glow) that `Button`'s lg
 * variant would silently alter. Callers keep passing their own className, so the
 * rendered markup is identical to the hand-written <a> tags this replaces — the
 * component only owns the outbound URL, the rel/target pair, and the
 * InitiateCheckout event.
 */
export function CheckoutLink({ planId, children, onClick, ...rest }: CheckoutLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  // Upgrade the href after hydration so middle-click and "copy link address"
  // also carry attribution. Done imperatively rather than through state to keep
  // the server-rendered markup byte-identical (no hydration mismatch).
  useEffect(() => {
    const element = ref.current;
    if (element) element.href = checkoutUrlWithAttribution(planId);
  }, [planId]);

  return (
    <a
      ref={ref}
      href={checkoutUrl(planId)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => {
        // fbevents.js may have written the _fbp cookie after mount, so rebuild
        // the URL here — synchronously, before the browser navigates.
        event.currentTarget.href = checkoutUrlWithAttribution(planId);
        trackEvent('InitiateCheckout', { plan: planId });
        onClick?.(event);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
