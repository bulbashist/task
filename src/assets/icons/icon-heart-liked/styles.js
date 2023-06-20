import styled, { keyframes } from "styled-components";

export const LikePhotoAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const Icon = styled.svg`
  animation: ${LikePhotoAnimation} 0.5s cubic-bezier(0.1, -0.6, 0.2, 0);
`;
