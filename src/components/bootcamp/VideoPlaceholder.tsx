import { Icon } from '@/components/primitives/Icon';
import { PhotoPlaceholder } from '@/components/bootcamp/PhotoPlaceholder';

interface VideoPlaceholderProps {
  microcopy: string;
}

/**
 * VideoPlaceholder — 16:9 slot for the event video. Intentional, not broken:
 * branded gradient, a large accent play button and discreet microcopy. Swap
 * for a real <video>/embed when footage exists.
 */
export function VideoPlaceholder({ microcopy }: VideoPlaceholderProps) {
  return (
    <PhotoPlaceholder ratio="video">
      <span className="flex h-20 w-20 items-center justify-center rounded-pill border border-bootcamp-yellow/60 bg-bootcamp-yellow/10 text-bootcamp-yellow transition-transform duration-200 md:h-24 md:w-24">
        <Icon name="play" size={36} />
      </span>
      <span className="rounded-pill border border-bootcamp-line bg-bootcamp-black/70 px-4 py-1.5 text-xs uppercase tracking-[0.16em] text-bootcamp-muted-dark backdrop-blur-sm">
        {microcopy}
      </span>
    </PhotoPlaceholder>
  );
}
