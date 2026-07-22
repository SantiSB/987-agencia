import { site } from '@/config/site';

/**
 * PaymentBadges — typographic pills for the accepted payment methods plus the
 * PassTix/Bold processing note. Pills (not logos) keep it asset-free and on
 * brand while still signalling payment trust.
 */
export function PaymentBadges() {
  const { pagos, pagosNota } = site.bootcamp;

  return (
    <div className="flex flex-col items-center gap-3">
      <ul className="flex flex-wrap items-center justify-center gap-2">
        {pagos.map((method) => (
          <li
            key={method}
            className="rounded-sm border border-bootcamp-line bg-bootcamp-black px-3 py-1.5 text-xs font-medium uppercase tracking-[0.1em] text-bootcamp-white/80"
          >
            {method}
          </li>
        ))}
      </ul>
      <p className="text-xs text-bootcamp-muted-dark">{pagosNota}</p>
    </div>
  );
}
