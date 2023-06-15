/* eslint-disable no-undef */
import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 48px;
  margin: 31.6px 30px 30px 30px;
  list-style-type: none;
`;

export const ListElement = styled.li`
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 30px;
  font-size: 16px;
  ${(props) =>
    props.active
      ? `
    background: #000;
    color: #fff;
    margin-right: 10px;
    padding: 0 20px;
    border: 1px solid transparent;
    `
      : `
    padding: 0 10px;
    color: #4a4a4a;
  `};

  a {
    color: inherit;
    font-weight: 600;
  }
`;
