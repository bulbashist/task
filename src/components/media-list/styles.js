import styled from "styled-components";

export const PhotoGrid = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  list-style-type: none;

  .column {
    display: flex;
    flex-direction: column;
    gap: 30px;
    flex: 1 0 30%;
    list-style-type: none;
  }
`;
