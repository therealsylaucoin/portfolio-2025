import styled from "styled-components";
import { theme } from "../../styles/theme";

const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.purple};
  background: ${theme.colors.mauve};
`;

const Loading = () => {
  return (
    <Wrapper>
      <p>Loading...</p>
    </Wrapper>
  );
};

export default Loading;