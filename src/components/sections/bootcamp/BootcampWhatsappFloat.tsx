import { Icon } from '@/components/primitives/Icon';
import { whatsappQuestionUrl } from '@/lib/bootcamp';

/**
 * BootcampWhatsappFloat — floating "dudas" button. WhatsApp is for questions
 * only (buying happens on PassTix), so the label and pre-filled message are a
 * query. Sits above the sticky enrollment bar so the two never overlap.
 */
export function BootcampWhatsappFloat() {
  return (
    <a
      href={whatsappQuestionUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp si tienes una pregunta"
      className="fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-pill bg-bootcamp-yellow text-bootcamp-black shadow-card transition-transform duration-200 hover:scale-105 active:scale-95 md:bottom-24 md:right-8"
    >
      <Icon name="whatsapp" size={26} />
    </a>
  );
}
