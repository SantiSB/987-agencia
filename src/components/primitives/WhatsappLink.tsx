import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { WHATSAPP_URL } from '@/config/site';
import { whatsappQuestionUrl } from '@/lib/bootcamp';
import { trackEvent } from '@/lib/pixel';

interface WhatsappLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  /** Pre-fill the bootcamp question message instead of opening a blank chat. */
  question?: boolean;
  /** Topic appended to the pre-filled question. Implies `question`. */
  topic?: string;
  children: ReactNode;
}

/**
 * WhatsappLink — WhatsApp deep-link plus its Contact event, in one place, so a
 * future WhatsApp button is instrumented by construction.
 *
 * Renders a plain <a> and forwards className, which is how the two Navbar call
 * sites keep their exact `Button` look via the exported `buttonClasses()`.
 *
 * The `data-wa-tracked` marker tells the delegated listener in BaseLayout
 * (which covers the Astro-rendered links in Hero.astro and Footer.astro) to
 * skip this anchor, so a click is never counted twice.
 */
export function WhatsappLink({
  question,
  topic,
  children,
  onClick,
  ...rest
}: WhatsappLinkProps) {
  const href = question || topic ? whatsappQuestionUrl(topic) : WHATSAPP_URL;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-wa-tracked=""
      onClick={(event) => {
        trackEvent('Contact', { source: 'component' });
        onClick?.(event);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
