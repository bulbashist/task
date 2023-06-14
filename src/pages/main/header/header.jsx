import { Link } from "react-router-dom";
import defaultBckg from "../../../assets/header-background.webp";
import SearchBar from "../../../components/search-bar";
import {
  Background,
  ContentWrapper,
  Headline,
  LinkToOthers,
  SearchHints,
  Wrapper,
} from "./styles";
import { useEffect, useState } from "react";
import hints from "../../../tests/hints.json";

export const Header = () => {
  const [bckg, setBckg] = useState(null);

  const [currHints, setCurrHints] = useState([]);

  useEffect(() => {
    const number = 10000000 + Math.floor(Math.random() * 1000000);

    fetch(`https://api.pexels.com/v1/photos/${number}`, {
      headers: {
        Authorization:
          "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf",
      },
    })
      .then((res) => res.json())
      .then((res) => setBckg(res.src.original))
      .catch(() => setBckg(defaultBckg));
  }, []);

  useEffect(() => {
    const temp = new Set();
    while (temp.size < 5) {
      console.log(1);
      temp.add(hints[Math.floor(Math.random() * hints.length)]);
    }
    setCurrHints([...temp]);
  }, []);

  return (
    <Wrapper>
      <Background src={bckg} alt="" />
      <ContentWrapper>
        <Headline>
          Лучшие бесплатные стоковые фото, изображения без роялти и видео от
          талантливых авторов.
        </Headline>
        {/* <div style={{ height: 50 }}>1</div> */}
        <SearchBar />
        <div style={{ width: "100%", height: 27.91, display: "flex" }}>
          <span
            style={{
              marginRight: "8px",
              color: "hsla(0,0%,100%,.7)",
              fontSize: "16px",
              lineHeight: "26px",
              fontWeight: "600",
            }}
          >
            Тенденции:
          </span>
          <SearchHints>
            {currHints.map((hint, i) => (
              <li key={i}>
                <Link to={`/category/${hint}`}>{hint}</Link>
                {currHints.length - 1 !== i ? <span>,</span> : null}
              </li>
            ))}
            <li>
              <LinkToOthers
                to="/category/океан"
                style={{ background: "hsla(0,0%,100%,.3)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="more_horiz-2eade203b098366b612487ee18fcc928"
                  fill="#fff"
                >
                  <path d="M0 0h24v24H0V0z" fill="none"></path>
                  <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                </svg>
              </LinkToOthers>
            </li>
          </SearchHints>
        </div>
        {/* <p>
          <a href="/a">Автор фото — Irina Iriser</a>
        </p> */}
      </ContentWrapper>
    </Wrapper>
  );
};
