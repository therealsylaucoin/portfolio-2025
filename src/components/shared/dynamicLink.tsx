import { useTranslation } from "react-i18next";
import { DynamicLinkProps } from "./types";

export const DynamicLink = ({ t, href, ariaLabel }: DynamicLinkProps) => {
  const { t: translate } = useTranslation();

  return <a href={href} aria-label={ariaLabel}>
    <p>{translate(t)}</p>
  </a>;
};

export default DynamicLink;