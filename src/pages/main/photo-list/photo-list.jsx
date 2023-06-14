import { Headline, HeadlineWrapper } from "./styles";
import MediaGridList from "../../../components/media-list";
import { useContinousLoad, usePhotos } from "../../../hooks";

export const PhotoList = () => {
  const photos = usePhotos();

  useContinousLoad();

  return (
    <main
      style={{
        margin: "0 auto",
        maxWidth: 1300,
        padding: "0 30px",
      }}
    >
      <HeadlineWrapper>
        <Headline>Бесплатные стоковые фото</Headline>
        <button>1</button>
      </HeadlineWrapper>
      <MediaGridList photos={photos} />
    </main>
  );
};
