import styled from "styled-components";

export const List = styled.ul`
  @media screen and (min-width: 1441px) {
    max-width: 1360px;
  }

  @media screen and (min-width: 1081px) and (max-width: 1440px) {
    max-width: 1000px;
  }

  @media screen and (min-width: 769px) and (max-width: 1080px) {
    max-width: 688px;
  }

  @media screen and (max-width: 768px) {
    max-width: 240px;
  }

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 8px 0;
  min-height: 66px;
  list-style-type: none;
  max-width: 1360px;
  margin: 16.6px auto 0;
  box-sizing: border-box;
  gap: 8px;
  overflow-x: hidden;
`;

export const Suggestion = styled.li`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-radius: 6px;

  &:hover {
    cursor: pointer;
    background-color: #ffc864;
    border-color: #ffc864;
  }

  .link {
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    height: 100%;
    padding: 10px 30px;
    text-align: center;
  }
`;
