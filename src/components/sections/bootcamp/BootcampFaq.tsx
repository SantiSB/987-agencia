import { useState } from 'react';
import { Reveal } from '@/components/primitives/Reveal';
import { Icon } from '@/components/primitives/Icon';
import { site } from '@/config/site';
import type { BootcampFaqItem } from '@/config/site';
import { cn } from '@/lib/utils';

function FaqRow({ item, index, open, onToggle }: { item: BootcampFaqItem; index: number; open: boolean; onToggle: () => void }) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-trigger-${index}`;

  return (
    <div className="border-t border-bootcamp-line">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 py-5 text-left font-sans text-base font-medium text-bootcamp-white transition-colors hover:text-bootcamp-yellow focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bootcamp-yellow md:text-lg"
        >
          {item.q}
          <Icon
            name="chevronDown"
            size={18}
            className={cn('shrink-0 transition-transform duration-200', open && 'rotate-180')}
          />
        </button>
      </h3>
      <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!open} className="pb-5">
        <p className="text-sm leading-relaxed text-bootcamp-white/70">{item.a}</p>
      </div>
    </div>
  );
}

/** BootcampFaq — objeciones típicas per brief §10 ("¿qué necesito llevar?, ¿hay certificado?, ¿métodos de pago?"). */
export function BootcampFaq() {
  const { faq } = site.bootcamp;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-bootcamp-black py-section-sm text-bootcamp-white">
      <div className="mx-auto w-full max-w-2xl px-6 md:px-10">
        <Reveal className="text-center">
          <h2 className="font-display uppercase leading-[0.95] tracking-tight text-[clamp(1.75rem,5vw,3rem)]">
            {faq.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          {faq.items.map((item, i) => (
            <FaqRow
              key={item.q}
              item={item}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex((current) => (current === i ? null : i))}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
