import { List, Suggestion } from "./styles";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const SuggestionsPanel = () => {
  useEffect(() => {}, []);

  const hints = [
    "пейзаж",
    "лес",
    "цветы",
    "пляж",
    "гора",
    "обои с видами природы",
    "небо",
    "фон",
    "видео природы",
    "видео природы",
  ];

  return (
    <List>
      {hints.map((hint, index) => (
        <Suggestion key={index}>
          <Link to={`/category/${hint}`} className="link">
            {hint}
          </Link>
        </Suggestion>
      ))}
    </List>
  );
};
