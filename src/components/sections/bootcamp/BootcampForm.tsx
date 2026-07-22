import { useState, type SubmitEventHandler } from 'react';
import { Reveal } from '@/components/primitives/Reveal';
import { Icon } from '@/components/primitives/Icon';
import { site, WHATSAPP_URL } from '@/config/site';
import { cn } from '@/lib/utils';

type FormStatus = 'idle' | 'submitting' | 'success';

const fieldClasses = cn(
  'w-full rounded-md border border-bootcamp-line bg-bootcamp-black px-4 py-3 text-bootcamp-white',
  'placeholder:text-bootcamp-white/40 transition-colors duration-200',
  'focus:border-bootcamp-yellow focus:outline-none focus-visible:outline-none',
);

/**
 * BootcampForm (#inscripcion) — the short nombre/WhatsApp/email capture the
 * brief requires (§10 "elementos de conversión obligatorios"). No CRM/payment
 * integration is wired yet (brief §12), so this mirrors Contact.tsx's honest
 * pattern: a UI-only simulated submit that hands off to a real WhatsApp chat
 * for the actual confirmation, instead of a form that quietly goes nowhere.
 */
export function BootcampForm() {
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');
    window.setTimeout(() => setStatus('success'), 900);
  };

  return (
    <section
      id="inscripcion"
      className="border-t border-bootcamp-line bg-bootcamp-surface py-section text-bootcamp-white"
    >
      <div className="mx-auto w-full max-w-xl px-6 md:px-10">
        <Reveal className="text-center">
          <h2 className="font-display uppercase leading-[0.95] tracking-tight text-[clamp(1.75rem,5vw,3rem)]">
            {site.bootcamp.finalCta.heading}
          </h2>
          <p className="mt-4 text-base text-bootcamp-white/70">{site.bootcamp.finalCta.lead}</p>
        </Reveal>

        <Reveal delay={0.1} variant="scaleIn" className="mt-10">
          <div className="rounded-md border border-bootcamp-line bg-bootcamp-black p-6 md:p-8">
            {status === 'success' ? (
              <div
                className="flex flex-col items-center justify-center py-8 text-center"
                role="status"
                aria-live="polite"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-pill bg-bootcamp-yellow text-bootcamp-black">
                  <Icon name="check" size={32} strokeWidth={2.5} />
                </span>
                <h3 className="mt-6 font-display text-2xl uppercase text-bootcamp-white">
                  ¡Recibido!
                </h3>
                <p className="mt-2 max-w-xs text-sm text-bootcamp-white/70">
                  Este formulario es un demo. Para confirmar tu cupo y el método de pago,
                  escríbenos por WhatsApp.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-pill bg-bootcamp-yellow px-6 font-sans text-sm font-semibold uppercase tracking-wide text-bootcamp-black transition-opacity hover:opacity-90"
                >
                  <Icon name="whatsapp" size={18} />
                  Confirmar por WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="bootcamp-name" className="mb-2 block text-sm font-medium text-bootcamp-white">
                    Nombre
                  </label>
                  <input
                    id="bootcamp-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Tu nombre"
                    className={fieldClasses}
                  />
                </div>
                <div>
                  <label htmlFor="bootcamp-whatsapp" className="mb-2 block text-sm font-medium text-bootcamp-white">
                    WhatsApp
                  </label>
                  <input
                    id="bootcamp-whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="300 000 0000"
                    className={fieldClasses}
                  />
                </div>
                <div>
                  <label htmlFor="bootcamp-email" className="mb-2 block text-sm font-medium text-bootcamp-white">
                    Correo
                  </label>
                  <input
                    id="bootcamp-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="tucorreo@ejemplo.com"
                    className={fieldClasses}
                  />
                </div>
                <button
                  type="submit"
                  aria-disabled={status === 'submitting'}
                  className="inline-flex w-full min-h-[52px] items-center justify-center gap-2 rounded-pill bg-bootcamp-yellow px-8 font-sans text-base font-semibold uppercase tracking-wide text-bootcamp-black transition-all duration-200 ease-out hover:opacity-90 active:scale-[0.98] aria-disabled:pointer-events-none aria-disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Enviando…' : 'Reservar mi cupo'}
                </button>
                <p className="text-center text-xs text-bootcamp-white/50">
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
