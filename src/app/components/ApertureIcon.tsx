interface ApertureIconProps {
  size?: number;
  className?: string;
  animate?: boolean;
}

export function ApertureIcon({ size = 40, className = '', animate = false }: ApertureIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`${className} ${animate ? 'animate-spin-slow' : ''}`}
      style={{ animationDuration: animate ? '20s' : undefined }}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <circle cx="50" cy="50" r="35" />
      <line x1="50" y1="15" x2="50" y2="25" />
      <line x1="73.0" y1="27.0" x2="66.5" y2="33.5" />
      <line x1="85" y1="50" x2="75" y2="50" />
      <line x1="73.0" y1="73.0" x2="66.5" y2="66.5" />
      <line x1="50" y1="85" x2="50" y2="75" />
      <line x1="27.0" y1="73.0" x2="33.5" y2="66.5" />
      <line x1="15" y1="50" x2="25" y2="50" />
      <line x1="27.0" y1="27.0" x2="33.5" y2="33.5" />
      <path d="M 50 35 L 60 45 L 60 55 L 50 65 L 40 55 L 40 45 Z" />
    </svg>
  );
}
