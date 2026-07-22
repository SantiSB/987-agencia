import { icons, type IconName } from '@/lib/icons';

interface IconProps {
  name: IconName;
  /** Pixel size (width = height). */
  size?: number;
  className?: string;
  /** Accessible label; when omitted the icon is decorative (aria-hidden). */
  title?: string;
  strokeWidth?: number;
}

/**
 * Icon — renders a path set from lib/icons.ts.
 * Stroke icons inherit `currentColor` as stroke; fill icons as fill.
 * Works both as a React island and server-rendered inside .astro files.
 */
export function Icon({ name, size = 24, className, title, strokeWidth = 1.6 }: IconProps) {
  const def = icons[name];
  const isStroke = def.kind === 'stroke';
  const decorative = !title;

  return (
    <svg
      viewBox={def.viewBox}
      width={size}
      height={size}
      className={className}
      fill={isStroke ? 'none' : 'currentColor'}
      stroke={isStroke ? 'currentColor' : 'none'}
      strokeWidth={isStroke ? strokeWidth : undefined}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={decorative ? undefined : 'img'}
      aria-hidden={decorative ? true : undefined}
      aria-label={title}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {def.paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}
