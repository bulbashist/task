import { useRef } from "react";
import PhotoCard from "../photo-card";
import { PhotoGrid } from "./styles";

export const MediaGridList = ({ photos = [] }) => {
  const colNum = useRef(window.innerWidth > 768 ? [0, 1, 2] : [0, 1]);

  return (
    <PhotoGrid>
      {photos.length !== 0 ? (
        colNum.current.map((num) => (
          <li key={num} className="column">
            <ul className="column__list">
              {photos
                .filter((_, i) => i % colNum.current.length === num)
                .map((photo) => (
                  <li key={photo.id}>
                    <PhotoCard photo={photo} />
                  </li>
                ))}
            </ul>
          </li>
        ))
      ) : (
        <p>Ничего не найдено</p>
      )}
    </PhotoGrid>
  );
};
