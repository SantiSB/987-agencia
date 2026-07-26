import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * buttonClasses — the single source of button styling.
 * Exported so any surface (React or Astro-rendered) reuses the exact same look.
 * All interaction states are CSS-driven → works server-rendered with zero JS.
 */
export function buttonClasses(
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  className?: string,
): string {
  return cn(
    // base
    'inline-flex items-center justify-center gap-2 font-sans font-semibold uppercase tracking-wide',
    'rounded-pill select-none whitespace-nowrap',
    'transition-all duration-200 ease-out',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
    'disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50',
    // sizes (min 44px touch target on md/lg)
    size === 'sm' && 'text-xs px-4 py-2',
    size === 'md' && 'text-sm px-6 py-3 min-h-[44px]',
    size === 'lg' && 'text-base px-8 py-4 min-h-[52px]',
    // variants
    variant === 'primary' &&
      'bg-accent text-bone-50 hover:bg-accent-600 hover:shadow-glow-accent active:scale-[0.98]',
    variant === 'outline' &&
      'border border-current bg-transparent text-ink hover:bg-ink hover:text-bone-50 active:scale-[0.98]',
    variant === 'ghost' && 'bg-transparent text-current hover:text-accent active:scale-[0.98]',
    className,
  );
}

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Button — renders an <a> when `href` is provided, otherwise a <button>.
 * Reusable primitive: never re-style a button inline, pass a variant instead.
 */
export function Button({ variant = 'primary', size = 'md', className, children, ...rest }: ButtonProps) {
  const classes = buttonClasses(variant, size, className);

  if ('href' in rest && rest.href !== undefined) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
