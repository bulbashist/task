import { useRef } from "react";
import PhotoCard from "../photo-card";
import { PhotoGrid } from "./styles";

export const MediaGridList = ({ photos = [] }) => {
  const colNum = useRef(window.innerWidth > 768 ? [0, 1, 2] : [0, 1]);

  return (
    <PhotoGrid>
      {photos.length !== 0 ? (
        colNum.current.map((num) => (
          <ul className="column" key={num}>
            {photos
              .filter((_, i) => i % 3 === num)
              .map((photo) => (
                <PhotoCard key={photo.id} photo={photo} />
              ))}
          </ul>
        ))
      ) : (
        <p>Ничего не найдено</p>
      )}
    </PhotoGrid>
  );
};
