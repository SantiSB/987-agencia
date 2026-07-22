import type { BootcampBono } from '@/config/site';
import { formatCOP } from '@/lib/bootcamp';

interface BonusCardProps {
  bono: BootcampBono;
}

/**
 * BonusCard — reads as a gift, not a feature: dashed accent frame, a "BONUS 0X"
 * tag and the item's value. The value is hidden when 0 (undefined bonus).
 */
export function BonusCard({ bono }: BonusCardProps) {
  return (
    <article className="flex h-full flex-col rounded-md border border-dashed border-bootcamp-yellow/60 bg-bootcamp-yellow/[0.04] p-6">
      <span className="inline-flex w-fit items-center rounded-sm bg-bootcamp-yellow px-2.5 py-1 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-bootcamp-black">
        {bono.etiqueta}
      </span>
      <h3 className="mt-4 font-display text-xl uppercase leading-tight text-bootcamp-white">
        {bono.titulo}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-bootcamp-muted-dark">{bono.desc}</p>
      {bono.valor > 0 && (
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-bootcamp-yellow">
          Valor {formatCOP(bono.valor)} · incluido
        </p>
      )}
    </article>
  );
}
