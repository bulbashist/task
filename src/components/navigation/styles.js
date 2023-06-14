import styled from "styled-components";

export const Wrapper = styled.header`
  ${(props) =>
    props.fixed
      ? `
    position: fixed;
    background-color: black;
  `
      : `
    position: absolute;
  `}

  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 100px;
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  z-index: 10;
  padding: 15px 31.6px;
`;

export const Background = styled.img`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
