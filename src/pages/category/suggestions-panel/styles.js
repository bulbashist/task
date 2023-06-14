import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  padding: 8px 0;
  height: 66px;
  list-style-type: none;
  max-width: 1360px;
  margin: 16.6px auto 0;
  box-sizing: border-box;
  gap: 8px;
  overflow-x: hidden;
`;

export const Suggestion = styled.li`
  padding: 0 30px;
  border: 1px solid;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: #ffc864;
    border-color: #ffc864;
  }
`;
