import styled from "styled-components";

export const Block = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  height: 50px;
  list-style-type: none;

  li {
    flex: 1 0 30%;

    select {
      width: 100%;
      height: 100%;
      outline: none;
      border: 1px solid #bababa;
      border-radius: 6px;
    }

    .color-block {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
      height: 100%;
      border: 1px solid #bababa;
      border-radius: 6px;
      padding: 5px 10px;
      box-sizing: border-box;

      &__input {
        flex-grow: 1;
        height: 100%;

        &:hover {
          cursor: pointer;
        }
      }

      &__submit {
        box-sizing: border-box;
        /* width: 50px; */
        padding: 0 20px;
        height: 35px;
        border-radius: 6px;
        box-shadow: 1px 1px 3px;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;
