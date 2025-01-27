import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { DynamicTextProps } from './types';

interface StyledTextProps {
  size?: string;
  color?: string;
  fontWeight?: string | number;
}

const StyledText = styled.p<StyledTextProps>`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
`;

export const DynamicText = ({ type = "p", t, size, color, fontWeight }: DynamicTextProps & StyledTextProps) => {
  const { t: translate } = useTranslation();
  const Element = type;

  return (
    <StyledText as={Element} size={size} color={color} fontWeight={fontWeight}>
      {translate(t)}
    </StyledText>
  );
};

export default DynamicText;
