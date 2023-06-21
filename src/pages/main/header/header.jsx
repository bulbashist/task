import { Link } from "react-router-dom";
import SearchBar from "../../../components/search-bar";
import {
  AuthorLink,
  Background,
  ContentWrapper,
  Headline,
  HintsWrapper,
  LinkToOthers,
  SearchHints,
  Wrapper,
} from "./styles";
import { useEffect, useState } from "react";
import hints from "../../../data/hints.json";
import { IconMore } from "../../../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { loadBackground } from "../../../store/header-background";

export const Header = () => {
  const img = useSelector((state) => state.headerBckg);
  const dispatch = useDispatch();

  const [currHints, setCurrHints] = useState([]);

  useEffect(() => {
    dispatch(loadBackground());
  }, [dispatch]);

  useEffect(() => {
    const temp = new Set();
    while (temp.size < 7) {
      temp.add(hints[Math.floor(Math.random() * hints.length)]);
    }
    setCurrHints([...temp]);
  }, []);

  return (
    <Wrapper>
      <Background src={img?.src} alt="" />
      <AuthorLink href={img?.link} target="_blank">
        <span className="text">Автор фото - </span>
        <span className="author">{img?.author}</span>
      </AuthorLink>
      <ContentWrapper>
        <Headline>
          Лучшие бесплатные стоковые фото, изображения без роялти и видео от
          талантливых авторов.
        </Headline>
        <SearchBar />
        <HintsWrapper>
          <span className="text">Тенденции:</span>
          <SearchHints>
            {currHints.map((hint, i) => (
              <li className="hint" key={i}>
                <Link to={`/category/${hint}`}>{hint}</Link>
                {currHints.length - 1 !== i ? <span>,</span> : null}
              </li>
            ))}
            <li className="hint">
              <LinkToOthers to="/category/popular">
                <IconMore />
              </LinkToOthers>
            </li>
          </SearchHints>
        </HintsWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};
