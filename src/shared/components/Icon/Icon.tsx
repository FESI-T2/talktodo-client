interface IconProps {
  name: string;
  className?: string;
  ariaLabel?: string;
}

const Icon = ({ name, className, ariaLabel = name }: IconProps) => (
  <svg className={className} aria-label={ariaLabel}>
    <use href={`/sprite.svg#${name}`} />
  </svg>
);

export default Icon;
