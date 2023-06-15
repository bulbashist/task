import styled from "styled-components";

export const InputWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  border-radius: 1.5em;
  padding: 0px;
  height: 50px;
  box-sizing: border-box;
  align-self: stretch;

  .input {
    @media screen and (max-width: 360px) {
      font-size: 12px;
    }

    @media screen and (min-width: 361px) and (max-width: 768px) {
      font-size: 14px;
    }

    @media screen and (min-width: 769px) and (max-width: 1440px) {
      font-size: 16px;
    }

    @media screen and (min-width: 1441px) {
      font-size: 18px;
    }

    flex-grow: 1;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: 0;
    padding: 15px 4px 15px 20px;
    border-radius: 8px 0 0 8px;
    line-height: 1.15;
    font-weight: 600;
    outline: none;
  }
`;

export const SearchBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
`;
