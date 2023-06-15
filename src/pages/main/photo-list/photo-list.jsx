import { MainContent } from "./styles";
import MediaGridList from "../../../components/media-list";
import { useContinousLoad, usePhotos } from "../../../hooks";

export const PhotoList = () => {
  const photos = usePhotos();

  useContinousLoad();

  return (
    <MainContent>
      <div className="pre-gallery">
        <h3 className="headline">Бесплатные стоковые фото</h3>
      </div>
      <MediaGridList photos={photos} />
    </MainContent>
  );
};
