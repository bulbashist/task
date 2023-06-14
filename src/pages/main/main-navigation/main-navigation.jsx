import { Link } from "react-router-dom";
import { List, ListElement } from "./styles";

export const MainNavigation = () => {
  return (
    <List>
      <ListElement active>
        <Link to="/">Главная</Link>
      </ListElement>
      <ListElement>
        <Link to="/">Видео</Link>
      </ListElement>
      <ListElement>
        <Link to="/">Таблица лидеров</Link>
      </ListElement>
      <ListElement>
        <Link to="/">Челенджи</Link>
      </ListElement>
    </List>
  );
};
