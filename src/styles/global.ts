import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.mauve};
    color: ${({ theme }) => theme.colors.black};
    font-family: "Jost", serif;
  }
  ul {
    padding: 0;
  }
  li {
    list-style: none;
  }
`;