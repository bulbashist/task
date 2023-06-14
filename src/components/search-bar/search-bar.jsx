import { useState } from "react";
import { Input, InputWrapper, SearchBtn } from "./styles";
import { useNavigate } from "react-router";

export const SearchBar = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  return (
    <InputWrapper>
      <Input
        value={text}
        placeholder="Поиск бесплатных изображений"
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            navigate(`/category/${e.target.value}`);
          }
        }}
      />
      <SearchBtn style={{ width: 55 }} onClick={() => navigate("/category")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="search-bd8e50c200501dff8322340f6275033b"
          width={25}
          height={25}
        >
          {/* <path d="M0 0h24v24H0V0z" fill="none"></path> */}
          <path
            d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            fill="#7f7f7f"
          ></path>
        </svg>
      </SearchBtn>
    </InputWrapper>
  );
};
