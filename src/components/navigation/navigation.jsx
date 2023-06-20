import { IconPexelsLogo } from "../../assets/icons";
import SearchBar from "../search-bar";
import { Wrapper } from "./styles";
import { Link } from "react-router-dom";

const Navigation = ({ isFixed = true }) => {
  return (
    <Wrapper fixed={isFixed}>
      <Link to="/" className="link">
        <IconPexelsLogo />
      </Link>
      {isFixed ? <SearchBar /> : null}
    </Wrapper>
  );
};

export { Navigation };
