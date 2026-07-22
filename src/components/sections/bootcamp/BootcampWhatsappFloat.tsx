import { Icon } from '@/components/primitives/Icon';
import { WHATSAPP_URL } from '@/config/site';

/**
 * BootcampWhatsappFloat — floating "dudas" button (brief §11 "botón de
 * WhatsApp flotante para dudas"), distinct from the sticky enrollment bar.
 * Sits above it so the two never overlap.
 */
export function BootcampWhatsappFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp para resolver tus dudas"
      className="fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-pill bg-bootcamp-yellow text-bootcamp-black shadow-card transition-transform duration-200 hover:scale-105 active:scale-95 md:bottom-24 md:right-8"
    >
      <Icon name="whatsapp" size={26} />
    </a>
  );
}
