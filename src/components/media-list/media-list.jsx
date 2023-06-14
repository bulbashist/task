import PhotoCard from "../photo-card";
import { PhotoGrid } from "./styles";

export const MediaGridList = ({ photos = [] }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "30px",
        justifyContent: "center",
      }}
    >
      {photos.length !== 0 ? (
        [0, 1, 2].map((num) => (
          <PhotoGrid key={num}>
            {photos
              .filter((photo, i) => i % 3 === num)
              .map((photo) => (
                <PhotoCard key={photo.id} photo={photo} />
              ))}
          </PhotoGrid>
        ))
      ) : (
        <p>Ничего не надйено</p>
      )}
    </div>
  );
};
