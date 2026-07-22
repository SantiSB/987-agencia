import { useState, type SubmitEventHandler } from 'react';
import { Reveal } from '@/components/primitives/Reveal';
import { SectionHeading } from '@/components/primitives/SectionHeading';
import { Button } from '@/components/primitives/Button';
import { Icon } from '@/components/primitives/Icon';
import { site, WHATSAPP_URL } from '@/config/site';
import type { IconName } from '@/lib/icons';
import { cn } from '@/lib/utils';

type FormStatus = 'idle' | 'submitting' | 'success';

const DETAILS: { icon: IconName; label: string; value: string; href?: string }[] = [
  { icon: 'whatsapp', label: 'WhatsApp', value: site.contact.whatsapp, href: WHATSAPP_URL },
  { icon: 'clock', label: 'Horario', value: site.contact.hours },
  {
    icon: 'instagram',
    label: 'Instagram',
    value: site.contact.instagram,
    href: 'https://instagram.com/978_agencia',
  },
  { icon: 'mapPin', label: 'Ubicación', value: site.contact.location },
];

/** Shared input styling — reused by every field so they never drift. */
const fieldClasses = cn(
  'w-full rounded-md border border-ink-600 bg-ink-800 px-4 py-3 text-bone-50',
  'placeholder:text-muted transition-colors duration-200',
  'focus:border-accent focus:outline-none focus-visible:outline-none',
);

/**
 * Contact (#contacto) — ink finale. A strong WhatsApp CTA with the brand's real
 * details plus a SIMULATED form (UI only, no backend): submitting shows a loading
 * state then a success confirmation. Never posts anywhere.
 */
export function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');
    // Simulated network round-trip — no data leaves the browser.
    window.setTimeout(() => setStatus('success'), 900);
  };

  return (
    <section
      id="contacto"
      className="border-t border-ink-600 bg-ink py-section text-bone-100"
    >
      <div className="mx-auto grid w-full max-w-[80rem] gap-14 px-6 md:px-10 lg:grid-cols-2 lg:gap-20">
        {/* Left: CTA + details */}
        <div>
          <Reveal>
            <SectionHeading
              kicker="Contacto"
              onDark
              title={
                <>
                  ¿Listos para{' '}
                  <span className="font-accent lowercase italic text-accent">
                    construir resultados
                  </span>
                  ?
                </>
              }
            />
          </Reveal>

          <Reveal delay={0.1} className="mt-8">
            <Button
              href={WHATSAPP_URL}
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-glow-accent"
            >
              <Icon name="whatsapp" size={20} />
              Escríbenos por WhatsApp
            </Button>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-10 space-y-5">
              {DETAILS.map((d) => {
                const content = (
                  <span className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-ink-600 text-accent-300">
                      <Icon name={d.icon} size={20} />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.16em] text-muted">
                        {d.label}
                      </span>
                      <span className="block text-base text-bone-50">{d.value}</span>
                    </span>
                  </span>
                );
                return (
                  <li key={d.label}>
                    {d.href ? (
                      <a
                        href={d.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-md transition-colors hover:text-accent"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>

        {/* Right: simulated form */}
        <Reveal delay={0.1} variant="scaleIn">
          <div className="rounded-md border border-ink-600 bg-ink-800/60 p-6 md:p-8">
            {status === 'success' ? (
              <div
                className="flex flex-col items-center justify-center py-12 text-center"
                role="status"
                aria-live="polite"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-pill bg-accent text-bone-50">
                  <Icon name="check" size={32} strokeWidth={2.5} />
                </span>
                <h3 className="mt-6 font-display text-2xl uppercase text-bone-50">¡Enviado!</h3>
                <p className="mt-2 max-w-xs text-sm text-bone-300">
                  Gracias por escribirnos. Este es un demo, así que te invitamos a contactarnos por
                  WhatsApp para una respuesta real.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm font-semibold text-accent-300 underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-bone-100">
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Tu nombre"
                    className={fieldClasses}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-bone-100">
                    Correo
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="tucorreo@ejemplo.com"
                    className={fieldClasses}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-bone-100">
                    ¿Qué quieres lograr?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Cuéntanos sobre tu marca y tus objetivos…"
                    className={cn(fieldClasses, 'resize-none')}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  aria-disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Enviando…' : 'Quiero resultados'}
                </Button>
                <p className="text-center text-xs text-muted">
                  Demo · el formulario no envía datos a ningún servidor.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
