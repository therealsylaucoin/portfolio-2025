import { createGlobalStyle } from 'styled-components';
import { device } from './theme';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.white};
    font-family: "Host Grotesk", serif;
    font-weight: lighter;
    font-size: 1rem;
    margin: 0 auto;
    max-width: 1440px;
  }
  h1 {
    margin: 0;
    font-weight: lighter;
  }
  h2,  
  h3 {
    font-weight: normal;
  }
  ul {
    padding: 0;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.green};
    padding: 16px 16px 16px 0;
  }
  a:visited {
    color: ${({ theme }) => theme.colors.mauve};
  }
  header,
  section,
  footer {
    padding: 20px;
    
    @media ${device.tablet} {
      padding: 50px;
    }
  }
`;