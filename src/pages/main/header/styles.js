import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 80px 15px;
  height: 500px;
  width: 100%;
  box-sizing: border-box;
  z-index: 9;

  background-color: #bababa;
`;

export const ContentWrapper = styled.div`
  @media screen and (min-width: 1080px) {
    width: 630px;
  }

  @media screen and (max-width: 1079px) {
    width: 80%;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  margin: 0 auto;
  padding-top: 50px;
`;

export const Background = styled.img`
  position: absolute;
  z-index: -2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Headline = styled.h2`
  @media screen and (min-width: 1080px) {
    font-size: 33px;
    line-height: 40px;
  }

  @media screen and (min-width: 768px) and (max-width: 1079px) {
    font-size: 26px;
    line-height: 32px;
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 22px;
  }

  font-weight: 600;

  letter-spacing: -0.02em;

  text-align: left;
  color: #ffffff;
`;

export const HintsWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 27.91px;

  .text {
    margin-right: 8px;
    font-size: 16px;
    font-weight: 600;
    line-height: 26px;
    color: hsla(0, 0%, 100%, 0.7);
  }
`;

export const SearchHints = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  flex-wrap: wrap;

  .hint {
    height: 100%;
  }

  li a,
  span {
    @media screen and (min-width: 1080px) {
      font-size: 16px;
      line-height: 26px;
    }

    @media screen and (min-width: 768px) and (max-width: 1079px) {
      font-size: 14px;
      line-height: 26px;
    }

    @media screen and (max-width: 767px) {
      font-size: 10px;
      line-height: 18px;
    }

    font-weight: 600;
    color: white;
  }

  li span {
    margin-right: 2.5px;
  }
`;

export const LinkToOthers = styled(Link)`
  display: block;
  width: 24px;
  height: 24px;
  margin: 2px 0 0 7px;
  border-radius: 50%;
  background-color: hsla(0, 0%, 100%, 0.3);
`;

export const AuthorLink = styled.a`
  position: absolute;
  right: 20px;
  bottom: 20px;
  opacity: 0.7;
  transition: opacity 0.2s ease;
  font-size: 14px;
  line-height: 22px;
  font-weight: 600;

  &:hover {
    opacity: 1;
  }

  .text {
    color: white;
    opacity: 0.6;
  }

  .author {
    color: white;
  }
`;
