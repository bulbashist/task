import { Link } from "react-router-dom";
import defaultBckg from "../../../assets/header-background.webp";
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

export const Header = () => {
  const [img, setImg] = useState(null);

  const [currHints, setCurrHints] = useState([]);

  useEffect(() => {
    const number = 10000000 + Math.floor(Math.random() * 1000000);
    fetch(`https://api.pexels.com/v1/photos/${number}`, {
      headers: {
        Authorization: "",
        // "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf",
      },
    })
      .then((res) => res.json())
      .then((res) =>
        setImg({
          src: res.src.original,
          author: res.photographer,
          link: res.photographer_url,
        })
      )
      .catch(() =>
        setImg({
          src: defaultBckg,
          author: "Irina Iriser",
          link: "https://www.pexels.com/@emine-sevval-587670081",
        })
      );
  }, []);

  useEffect(() => {
    const temp = new Set();
    while (temp.size < 5) {
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
