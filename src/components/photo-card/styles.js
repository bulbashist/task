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

export const UpperPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 8px;
`;

export const LowerPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    gap: 8px;

    span {
      font-size: 16px;
      line-height: 26px;
      font-weight: 700;
      color: white;
    }
  }
`;

export const ActionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;

  .liked-svg {
    animation: ${LikePhotoAnimation} 0.5s cubic-bezier(0.1, -0.6, 0.2, 0)
      infinite;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const ControlFrame = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  padding: 15px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.25),
    transparent 35%,
    transparent 65%,
    rgba(0, 0, 0, 0.25)
  );

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;
