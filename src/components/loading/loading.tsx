import React from "react";
import styled from "styled-components";
import LoadingAnimation from "./loadingAnimation";
import { theme } from "../../styles/theme";

const { purple, mauve } = theme.colors;

const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${purple};
  background: ${mauve};
`;

const Loading = React.memo(() => {
  return (
    <Wrapper data-testid="loading">
      <LoadingAnimation />
    </Wrapper>
  );
});

export default Loading;