import styled from "styled-components";

export const FilterBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 50px 0 30px 0;

  .headline {
    font-weight: 600;
    font-size: 49px;
    line-height: 65px;
    letter-spacing: -0.02em;
  }

  .fp-1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 50px;

    .btn-panel {
      display: flex;
      flex-direction: row;
      list-style-type: none;

      &__item {
        font-size: 16px;
        display: flex;
        align-items: center;
        height: 48px;
        padding: 0 10px;
        border-radius: 30px;

        .link {
          .text {
            font-weight: 600;
            color: #4a4a4a;
          }

          .colored-text {
            font-size: 14px;
            margin-left: 8px;
            color: #bfbfbf;
          }
        }
      }

      .active {
        padding: 0 20px;
        margin-right: 10px;
        color: #fff;
        border: 1px solid transparent;
        background: #000;

        .link {
          .text {
            color: white;
          }
        }
      }
    }

    .btn-filter-opener {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 100%;
      border: 1px solid #dfdfe0;
      border-radius: 6px;
      padding: 0 20px;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
