import styled from "styled-components";

export const HeadlineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Headline = styled.h3`
  margin-top: 15px;
  line-height: 1;
  font-weight: 600;
  font-size: 23px;
  letter-spacing: -0.015em;
`;

export const PhotoGrid = styled.ul`
  flex-grow: 1;
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  list-style-type: none;
`;
