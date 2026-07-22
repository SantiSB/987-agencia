import { Reveal } from '@/components/primitives/Reveal';
import { Icon } from '@/components/primitives/Icon';
import { CountdownTimer } from '@/components/bootcamp/CountdownTimer';
import { ScarcityBar } from '@/components/bootcamp/ScarcityBar';
import { PaymentBadges } from '@/components/bootcamp/PaymentBadges';
import { site } from '@/config/site';
import type { BootcampPlan } from '@/config/site';
import { checkoutUrl, formatCOP, getPlanPricing } from '@/lib/bootcamp';
import { cn } from '@/lib/utils';

function PlanCard({ plan }: { plan: BootcampPlan }) {
  const pricing = getPlanPricing(plan);
  const { urgencia } = site.bootcamp;
  const featured = plan.destacado;

  return (
    <article
      className={cn(
        'relative flex h-full flex-col rounded-md border p-6 transition-all duration-200 hover:-translate-y-1 md:p-8',
        featured
          ? 'border-bootcamp-yellow bg-bootcamp-surface shadow-glow-yellow md:scale-[1.03]'
          : 'border-bootcamp-line bg-bootcamp-black hover:border-bootcamp-white/40',
      )}
    >
      {featured && 'badge' in plan && plan.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-pill bg-bootcamp-yellow px-4 py-1 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-bootcamp-black">
          {plan.badge}
        </span>
      )}

      <div className="flex items-center justify-between">
        <h3 className="font-display text-2xl uppercase text-bootcamp-white">{plan.nombre}</h3>
        {pricing.preventaActive && (
          <span className="rounded-sm bg-bootcamp-yellow/15 px-2.5 py-1 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-bootcamp-yellow">
            {plan.etiqueta}
          </span>
        )}
      </div>

      <div className="mt-5">
        {pricing.preventaActive && (
          <div className="flex items-center gap-2">
            <span className="font-sans text-base text-bootcamp-muted-dark line-through">
              {formatCOP(pricing.anchor)}
            </span>
            <span className="rounded-sm bg-bootcamp-yellow px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-bootcamp-black">
              -{pricing.savingsPct}%
            </span>
          </div>
        )}
        <span className="mt-1 block font-display text-5xl leading-none text-bootcamp-white">
          {formatCOP(pricing.current)}
        </span>
        {pricing.preventaActive && pricing.savingsAbs > 0 && (
          <span className="mt-2 block text-sm text-bootcamp-yellow">
            Ahorras {formatCOP(pricing.savingsAbs)}
          </span>
        )}
      </div>

      {'fraseIdentidad' in plan && plan.fraseIdentidad && (
        <p className="mt-4 font-accent text-lg italic text-bootcamp-yellow">{plan.fraseIdentidad}</p>
      )}

      <ul className="mt-6 flex-1 space-y-3">
        {plan.beneficios.map((benefit) => (
          <li key={benefit} className="flex items-start gap-3 text-sm text-bootcamp-white/85">
            <Icon
              name="check"
              size={16}
              strokeWidth={2.5}
              className="mt-0.5 shrink-0 text-bootcamp-yellow"
            />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      <a
        href={checkoutUrl(plan.id)}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'mt-8 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-pill px-8 font-sans text-base font-semibold uppercase tracking-wide transition-all duration-200 ease-out active:scale-[0.98]',
          featured
            ? 'bg-bootcamp-yellow text-bootcamp-black hover:bg-bootcamp-yellow-600'
            : 'border border-bootcamp-white/40 text-bootcamp-white hover:bg-bootcamp-white hover:text-bootcamp-black',
        )}
      >
        Comprar entrada {plan.nombre}
      </a>
      <p className="mt-3 text-center text-xs text-bootcamp-muted-dark">
        {urgencia.avisoSubidaPrecio}
      </p>
    </article>
  );
}

interface PricingBlockProps {
  /** Section anchor id — differs between the two placements. */
  id: string;
  heading: string;
}

/**
 * PricingBlock — full pricing unit (countdown + scarcity + two plans + quote +
 * payment badges). Rendered twice on the page (after the syllabus and near the
 * close) with only the anchor id and heading differing. All purchase CTAs go
 * to PassTix; WhatsApp is intentionally absent here (buying only).
 */
export function PricingBlock({ id, heading }: PricingBlockProps) {
  const { pricing, planes, urgencia } = site.bootcamp;

  return (
    <section id={id} className="scroll-mt-20 bg-bootcamp-black py-section-sm text-bootcamp-white">
      <div className="mx-auto w-full max-w-[64rem] px-6 md:px-10">
        <Reveal className="text-center">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-bootcamp-yellow">
            Precios · Preventa
          </span>
          <h2 className="mt-4 font-display uppercase leading-[0.95] tracking-tight text-[clamp(1.75rem,5vw,3rem)]">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-bootcamp-muted-dark">{pricing.lead}</p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-col items-center gap-6 rounded-md border border-bootcamp-line bg-bootcamp-surface px-6 py-8">
            <CountdownTimer
              targetDate={urgencia.fechaCierrePreventa}
              variant="grande"
              label="La preventa cierra en"
            />
            <ScarcityBar label={urgencia.etiquetaEscasez} />
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch">
          {planes.map((plan, i) => (
            <Reveal key={plan.id} delay={0.1 + i * 0.1} variant="scaleIn" className="h-full">
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-xl text-center font-accent text-xl italic text-bootcamp-white/90 md:text-2xl">
            {pricing.citaPrecios}
          </p>
          <div className="mt-8">
            <PaymentBadges />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
