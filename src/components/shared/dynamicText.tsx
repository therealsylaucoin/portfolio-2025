// import React from "react";
// import styled from "styled-components";
import { useTranslation } from "react-i18next";

interface DynamicTextProps {
  t: string;
  type?: keyof JSX.IntrinsicElements; 
  href?: string;
  ariaLabel?: string;
}

export const DynamicText = ({ type = "p", t }: DynamicTextProps) => {
  const { t: translate } = useTranslation();
  const Element = type;

  return <Element>{translate(t)}</Element>;
};

export default DynamicText;