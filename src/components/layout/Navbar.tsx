import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { site, WHATSAPP_URL } from '@/config/site';
import { Button } from '@/components/primitives/Button';
import { cn } from '@/lib/utils';

/**
 * Navbar — fixed, translucent header that gains a blurred background once the
 * page is scrolled. Includes an accessible mobile menu (focus-trappable list,
 * Escape to close, aria-expanded). Logo + nav links + magenta WhatsApp CTA.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on Escape and lock body scroll while open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-bone-300/60 bg-bone/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav
        aria-label="Principal"
        className="mx-auto flex h-16 max-w-[80rem] items-center justify-between px-6 md:h-20 md:px-10"
      >
        {/* Logo lockup */}
        <a
          href="#inicio"
          className="group flex items-baseline gap-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          aria-label={`${site.brand.name} — inicio`}
        >
          <span className="font-display text-2xl leading-none tracking-tight text-ink md:text-3xl">
            978
          </span>
          <span className="font-sans text-[0.65rem] uppercase tracking-[0.2em] text-muted transition-colors group-hover:text-accent">
            Agencia
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative font-sans text-sm font-medium text-ink transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-200 hover:text-accent hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href={WHATSAPP_URL} size="sm" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-sm text-ink md:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6">
            <span
              className={cn(
                'absolute left-0 h-[2px] w-6 bg-ink transition-all duration-300',
                open ? 'top-1/2 rotate-45' : 'top-0',
              )}
            />
            <span
              className={cn(
                'absolute left-0 top-1/2 h-[2px] w-6 -translate-y-1/2 bg-ink transition-opacity duration-200',
                open && 'opacity-0',
              )}
            />
            <span
              className={cn(
                'absolute left-0 h-[2px] w-6 bg-ink transition-all duration-300',
                open ? 'top-1/2 -rotate-45' : 'bottom-0',
              )}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="md:hidden"
            initial={prefersReducedMotion ? undefined : { opacity: 0, height: 0 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, height: 'auto' }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="flex flex-col gap-1 border-t border-bone-300/60 bg-bone/95 px-6 py-4 backdrop-blur-md">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-display text-2xl uppercase text-ink transition-colors hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <Button
                  href={WHATSAPP_URL}
                  size="md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Escríbenos por WhatsApp
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
