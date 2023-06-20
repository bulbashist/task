import { useEffect, useState } from "react";
import { InputWrapper } from "./styles";
import { useNavigate, useParams } from "react-router";
import { IconSearch } from "../../assets/icons";

export const SearchBar = () => {
  const { search } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState(search ?? "");

  useEffect(() => {
    setText(search ?? "");
  }, [search]);

  return (
    <InputWrapper>
      <input
        value={text}
        placeholder="Поиск бесплатных изображений"
        className="input"
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            navigate(`/category/${e.target.value}`);
          }
        }}
      />
      <button
        className="submit-btn"
        onClick={() => navigate(`/category/${text}`)}
      >
        <IconSearch />
      </button>
    </InputWrapper>
  );
};
