import styled from "styled-components";
import { theme } from "../../styles/theme";

const { purple } = theme.colors;

const DotsFlashing = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color:${purple};
  color: ${purple};
  animation: dot-flashing 1s infinite linear alternate;
  animation-delay: 0.5s;

  &:before, 
  &:after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
  }

  &:before {
    left: -15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color:${purple};
    color: ${purple};
    animation: dot-flashing 1s infinite alternate;
    animation-delay: 0s;
  }

  &:after {
    left: 15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${purple};
    color: ${purple};
    animation: dot-flashing 1s infinite alternate;
    animation-delay: 1s;
  }

  @keyframes dot-flashing {
  0% {
    background-color:${purple};
  }
  50%, 100% {
    background-color: rgba(152, 128, 255, 0.2);
  }
`;

const LoadingAnimation = () => {
  return (
    <DotsFlashing/>
  );
};

export default LoadingAnimation;