import styled from "styled-components";

export const Block = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 14px;

  @media screen and (max-width: 1080px) {
    font-size: 10px;
  }
`;

export const ButtonPanel = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  list-style-type: none;

  .elem {
    line-height: 0.9;
    font-weight: 600;
    letter-spacing: 0.25px;
    display: flex;
    align-items: center;
    background: #fff;
    padding: 0.6rem 1.1rem 0.6rem 0.9rem;
    border: 2px solid #e8e8e8;
    border-left: 0px;

    &__category {
      margin-right: 3px;
      color: #5e5e5e;
      fill: #5e5e5e;
    }

    &__total {
      color: #9e9e9e;
    }

    &:hover {
      cursor: pointer;
    }

    &:hover:not(.active) {
      background-color: #e8e8e8;
    }
  }

  .active {
    border-left: 2px solid;
    border-color: #0064f9;
    border-radius: 4px;

    .elem__category {
      color: #0064f9;
    }
  }
`;

export const FilterList = styled.ul`
  @media screen and (max-width: 1024px) {
    display: none;
  }

  display: flex;
  flex-direction: row;
  gap: 20px;
  list-style-type: none;

  .list-element {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    position: relative;
    box-sizing: border-box;
    height: 50px;
    border: 2px solid #e8e8e8;
    border-radius: 20px;
    padding: 5px 15px;

    .hidden-panel {
      align-self: flex-start;
      position: absolute;
      right: 0;
      display: none;
      width: 250px;
      margin-top: 44px;
      border-radius: 20px;
      background-color: #ffffff;
      box-shadow: 0 4px 24px 0 rgba(37, 38, 94, 0.1);
      z-index: 10;
      list-style-type: none;

      &__option {
        display: flex;
        justify-content: space-between;
        cursor: pointer;
      }

      .color-input {
        width: 100%;
        border: 1px solid grey;
        border-radius: 6px;
        padding: 0 10px;
        outline: none;
      }
    }
  }

  .list-element:hover {
    border-color: #0064f9;

    .hidden-panel {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 12px 16px;

      .selected {
        color: blue;
      }

      .selected::after {
        margin-left: 10px;
        content: "✓";
      }
    }
  }
`;

export const ColorList = styled.ul`
  display: grid;
  grid: 1fr 1fr / 1fr 1fr 1fr 1fr 1fr;
  gap: 5px;
  list-style-type: none;
`;

export const ColorElement = styled.button`
  background-color: ${(props) => props.color};
  width: 100%;
  height: 20px;
  cursor: pointer;
`;
