export interface DynamicLinkProps {
  t: string;
  href: string;
  ariaLabel: string;
}

export interface DynamicTextProps {
  t: string;
  type?: keyof JSX.IntrinsicElements; 
  href?: string;
  ariaLabel?: string;
}