import styled from "styled-components";

export const Icon = styled.svg`
  @media screen and (max-width: 360px) {
    width: 80px;
  }

  @media screen and (min-width: 361px) and (max-width: 1440px) {
    width: 100px;
  }

  @media screen and (min-width: 1441px) {
    width: 130px;
  }
`;
