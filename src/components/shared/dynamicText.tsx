import { useTranslation } from "react-i18next";
import { DynamicTextProps } from "./types";

export const DynamicText = ({ type = "p", t }: DynamicTextProps) => {
  const { t: translate } = useTranslation();
  const Element = type;

  return <Element>{translate(t)}</Element>;
};

export default DynamicText;