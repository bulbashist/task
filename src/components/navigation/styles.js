import styled from "styled-components";

// 360 768 1440

export const Wrapper = styled.header`
  ${(props) =>
    props.fixed
      ? `
    position: fixed;
    background-color: black;
  `
      : `
    position: absolute;
  `}

  @media screen and (max-width: 360px) {
    gap: 30px;

    .link {
      .logo {
        width: 80px;
      }
    }
  }

  @media screen and (min-width: 361px) and (max-width: 768px) {
    gap: 50px;

    .link {
      .logo {
        width: 100px;
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1440px) {
    gap: 100px;

    .link {
      .logo {
        width: 100px;
      }
    }
  }

  @media screen and (min-width: 1441px) {
    gap: 100px;

    .link {
      .logo {
        width: 130px;
      }
    }
  }

  display: flex;
  flex-direction: row;
  align-items: stretch;
  box-sizing: border-box;
  z-index: 10;
  width: 100%;
  height: 80px;
  padding: 15px 31.6px;

  .link {
    display: flex;
    align-items: center;
  }
`;

export const Background = styled.img`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
