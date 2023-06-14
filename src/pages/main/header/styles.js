import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  /* z-index: -1; */
  padding: 80px 15px;
  height: 500px;
  width: 100%;
  box-sizing: border-box;

  /* &:after { */
  /* background: black; */
  /* opacity: 0.5; */
  /* } */
`;

export const ContentWrapper = styled.div`
  /* align-self: flex-end; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 630px;
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
  font-size: 33px;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: -0.02em;

  text-align: left;
  color: #ffffff;
`;

export const SearchHints = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;

  li {
    height: 100%;
  }

  li a,
  span {
    font-size: 16px;
    line-height: 26px;
    font-weight: 600;
    color: white;
  }

  li span {
    margin-right: 2.5px;
  }
`;

export const LinkToOthers = styled(Link)`
  /* display: inline-block; */
  display: block;
  width: 24px;
  height: 24px;
  margin-left: 7px;
  margin-top: 2px;
  border-radius: 50%;
  background: hsla(0, 0%, 100%, 0.3);
`;
