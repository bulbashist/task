import styled from "styled-components";

export const PhotoGrid = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  list-style-type: none;

  .column {
    flex: 1 0 30%;

    .column__list {
      display: flex;
      flex-direction: column;
      gap: 30px;
      list-style-type: none;
    }
  }
`;
