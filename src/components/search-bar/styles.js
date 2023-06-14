import styled from "styled-components";

export const InputWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  border-radius: 1.5em;
  padding: 0px;
  height: 50px;
  box-sizing: border-box;
  align-self: stretch;
`;

export const Input = styled.input`
  flex-grow: 1;
  box-sizing: border-box;
  height: 100%;
  border: 0;
  padding: 15px 4px 15px 20px;
  border-radius: 8px 0 0 8px;
  font-size: 18px;
  line-height: 1.15;
  font-weight: 600;
  outline: none;
`;

export const SearchBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
`;
