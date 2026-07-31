import { Icon } from '@/components/primitives/Icon';
import { WhatsappLink } from '@/components/primitives/WhatsappLink';
import { useAtFooter } from '@/lib/useAtFooter';
import { cn } from '@/lib/utils';

interface BootcampWhatsappFloatProps {
  /** 'yellow' (default) matches the /bootcamp sub-brand. 'pink' reuses the
   * main site's accent token (same one as the "Quiero resultados" button)
   * for contexts outside the bootcamp black/yellow palette, e.g. the homepage. */
  tone?: 'yellow' | 'pink';
}

/**
 * BootcampWhatsappFloat — floating "dudas" button. WhatsApp is for questions
 * only (buying happens on PassTix), so the label and pre-filled message are a
 * query. Sits above the sticky bar and retracts at the footer so it never
 * overlaps footer content.
 */
export function BootcampWhatsappFloat({ tone = 'yellow' }: BootcampWhatsappFloatProps) {
  const atFooter = useAtFooter();

  return (
    <WhatsappLink
      question
      aria-label="Escríbenos por WhatsApp si tienes una pregunta"
      className={cn(
        'fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-pill shadow-card transition-all duration-300 ease-out hover:scale-105 active:scale-95 md:bottom-24 md:right-8',
        tone === 'yellow' && 'bg-bootcamp-yellow text-bootcamp-black',
        tone === 'pink' && 'bg-accent text-bone-50 hover:shadow-glow-accent',
        atFooter && 'pointer-events-none translate-y-8 opacity-0',
      )}
    >
      <Icon name="whatsapp" size={26} />
    </WhatsappLink>
  );
}
