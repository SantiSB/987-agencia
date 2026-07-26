import { site } from '@/config/site';
import { formatCOP, totalValorStack, getPlanPricing } from '@/lib/bootcamp';

/**
 * ValueStack — itemized "what you get" list with each item's individual value,
 * a total, and the dramatic anchor vs. preventa-price close. The total is the
 * honest sum of the parts (computed), and the preventa price comes from the
 * General plan so the two numbers can be contrasted typographically.
 */
export function ValueStack() {
  const { valorStack, planes } = site.bootcamp;
  const total = totalValorStack();
  const general = planes.find((p) => p.id === 'general') ?? planes[0];
  const inversion = getPlanPricing(general).current;

  return (
    <div className="mx-auto max-w-2xl rounded-md border border-bootcamp-line bg-bootcamp-surface p-6 md:p-8">
      <h2 className="font-display text-2xl uppercase text-bootcamp-white md:text-3xl">
        {valorStack.titulo}
      </h2>

      <ul className="mt-6 divide-y divide-bootcamp-line">
        {valorStack.items.map((row) => (
          <li key={row.item} className="flex items-baseline justify-between gap-4 py-3">
            <span className="text-sm text-bootcamp-white/85 md:text-base">{row.item}</span>
            <span className="shrink-0 font-sans text-sm text-bootcamp-muted-dark line-through md:text-base">
              {formatCOP(row.valor)}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t border-bootcamp-line pt-6 text-center">
        <p className="flex items-center justify-center gap-3">
          <span className="text-xs uppercase tracking-[0.16em] text-bootcamp-muted-dark">
            {valorStack.valorRealLabel}
          </span>
          <span className="font-display text-2xl text-bootcamp-muted-dark line-through md:text-3xl">
            {formatCOP(total)}
          </span>
        </p>
        <p className="mt-4">
          <span className="block text-xs uppercase tracking-[0.16em] text-bootcamp-yellow">
            {valorStack.inversionLabel}
          </span>
          <span className="mt-1 block font-display text-5xl leading-none text-bootcamp-yellow md:text-7xl">
            {formatCOP(inversion)}
          </span>
        </p>
      </div>
    </div>
  );
}
