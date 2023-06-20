import { List, Suggestion } from "./styles";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import hints from "../../../data/hints.json";

export const SuggestionsPanel = () => {
  const [startNum, setStartNum] = useState(1);

  useEffect(() => {
    setStartNum(Math.floor(Math.random() * 10));
  }, []);

  return (
    <List>
      {hints.slice(startNum, startNum + 8).map((hint, index) => (
        <Suggestion key={index}>
          <Link to={`/category/${hint}`} className="link">
            {hint}
          </Link>
        </Suggestion>
      ))}
    </List>
  );
};
