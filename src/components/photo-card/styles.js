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

  .photo-mark {
    @media screen and (max-width: 480px) {
      display: none;
    }
  }
`;

export const LowerPanel = styled.div`
  @media screen and (max-width: 480px) {
    display: none;
  }

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .link {
    display: flex;
    align-items: center;
    gap: 8px;

    .avatar {
      @media screen and (max-width: 768px) {
        display: none;
      }

      box-sizing: border-box;
      width: 40px;
      height: 40px;
      border: 1px solid white;
      border-radius: 50%;
      padding: 2px;
      color: white;
    }

    .name {
      @media screen and (min-width: 361px) and (max-width: 768px) {
        font-size: 12px;
        line-height: 20px;
      }

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
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const LoadingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  0% {
    transform: rotate(360deg);
  }
`;

export const ImageLoading = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
  border-radius: 50%;
  border: 5px dotted pink;

  animation: ${LoadingAnimation} 2s linear infinite;
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const ControlFrame = styled.div`
  @media screen and (max-width: 480px) {
    padding: 5px;
  }

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
