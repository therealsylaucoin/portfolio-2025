import { useTranslation } from "react-i18next";

interface DynamicLinkProps {
  t: string;
  href: string;
  ariaLabel: string;
}

export const DynamicLink = ({ t, href, ariaLabel }: DynamicLinkProps) => {
  const { t: translate } = useTranslation();

  return <a href={href} aria-label={ariaLabel}>
    <p>{translate(t)}</p>
  </a>;
};

export default DynamicLink;