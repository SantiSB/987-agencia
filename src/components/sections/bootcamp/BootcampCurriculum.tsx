import { useState } from 'react';
import { Reveal } from '@/components/primitives/Reveal';
import { Icon } from '@/components/primitives/Icon';
import { site } from '@/config/site';
import type { BootcampModule } from '@/config/site';
import { cn } from '@/lib/utils';

function ModuleRow({
  module,
  open,
  onToggle,
}: {
  module: BootcampModule;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = `modulo-panel-${module.n}`;
  const buttonId = `modulo-trigger-${module.n}`;

  return (
    <div className="border-t border-bootcamp-line">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center gap-4 py-6 text-left transition-colors hover:text-bootcamp-yellow focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bootcamp-yellow md:gap-6"
        >
          <span className="font-display text-2xl text-bootcamp-yellow md:text-3xl">
            {module.n}
          </span>
          <span className="min-w-0 flex-1 font-display text-lg uppercase leading-tight text-bootcamp-white md:text-2xl">
            {module.title}
          </span>
          <Icon
            name="chevronDown"
            size={20}
            className={cn('shrink-0 transition-transform duration-200', open && 'rotate-180')}
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        className="pb-6 pl-[3.25rem] md:pl-[4.5rem]"
      >
        <p className="text-sm uppercase tracking-[0.16em] text-bootcamp-white/60">
          Con {module.speaker}
        </p>
      </div>
    </div>
  );
}

/**
 * BootcampCurriculum (#temario) — the 8-module syllabus as an accordion
 * (brief §7 recommends this over flat scroll for 8 items). Single-open by
 * default keeps the list scannable; each module names its speaker.
 */
export function BootcampCurriculum() {
  const { curriculum } = site.bootcamp;
  const [openModule, setOpenModule] = useState<string | null>(curriculum.modules[0]?.n ?? null);

  return (
    <section id="temario" className="bg-bootcamp-surface py-section-sm text-bootcamp-white">
      <div className="mx-auto w-full max-w-3xl px-6 md:px-10">
        <Reveal className="text-center">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-bootcamp-yellow">
            Temario
          </span>
          <h2 className="mt-4 font-display uppercase leading-[0.95] tracking-tight text-[clamp(1.75rem,5vw,3rem)]">
            {curriculum.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-bootcamp-white/70">
            {curriculum.lead}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          {curriculum.modules.map((module) => (
            <ModuleRow
              key={module.n}
              module={module}
              open={openModule === module.n}
              onToggle={() => setOpenModule((current) => (current === module.n ? null : module.n))}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
