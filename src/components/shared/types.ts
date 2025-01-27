export interface DynamicLinkProps {
  t: string;
  href: string;
  ariaLabel: string;
}

export interface StyledTextProps {
  size?: string;
  colour?: string;
  style?: React.CSSProperties;
}

export interface DynamicTextProps {
  t: string;
  type?: keyof JSX.IntrinsicElements; 
  href?: string;
  ariaLabel?: string;
}