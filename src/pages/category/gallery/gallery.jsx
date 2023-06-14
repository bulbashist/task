import { useState } from "react";
import MediaGridList from "../../../components/media-list";
import { useContinousLoad, usePhotos } from "../../../hooks";
import { FilterBlock } from "./styles";
import { FilterPanel } from "./filter-panel/filter-panel";
import { Link, useParams } from "react-router-dom";

export const Gallery = () => {
  const { search } = useParams();
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const photos = usePhotos(search);

  useContinousLoad(search);

  return (
    <div>
      <FilterBlock>
        <h3 className="headline">Изображения цветов</h3>
        <div className="fp-1">
          <ul className="btn-panel">
            <li className="btn-panel__item active">
              <Link href="/" className="link">
                <span className="text">Фото</span>
                <span className="colored-text">140,4 тысяч</span>
              </Link>
            </li>
            <li className="btn-panel__item">
              <Link href="/" className="link">
                <span className="text">Видео</span>
                <span className="colored-text">18,5 тысяч</span>
              </Link>
            </li>
            <li className="btn-panel__item">
              <Link href="/" className="link">
                <span className="text">Пользователи</span>
                <span className="colored-text">379</span>
              </Link>
            </li>
          </ul>
          <button
            className="btn-filter-opener"
            onClick={() => setShowFilterPanel((state) => !state)}
          >
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                id="filter_list-f2ecbc88f73bd1adcf5a04f89af6f1b9_Icon"
                d="M10.778,18.955h4.444V16.732H10.778ZM3,7V9.222H23V7Zm3.333,7.088H19.667V11.866H6.333Z"
                transform="translate(-1 -1)"
              ></path>
            </svg>
            <span>Фильтры</span>
          </button>
        </div>
        {showFilterPanel ? <FilterPanel /> : null}
      </FilterBlock>
      <MediaGridList photos={photos} />
    </div>
  );
};
