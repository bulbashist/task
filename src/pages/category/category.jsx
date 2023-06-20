import { Navigation } from "../../components/navigation/navigation";
import SuggestionsPanel from "./suggestions-panel";
import { HeaderMock, MainContent } from "./styles";
import FilterPanel from "./filter-panel";
import { useContinousLoad, usePhotos } from "../../hooks";
import { useParams } from "react-router";
import MediaGridList from "../../components/media-list";

export const CategoryPage = () => {
  const { search } = useParams();
  const photos = usePhotos(search);

  useContinousLoad(search);

  return (
    <>
      <Navigation />
      <HeaderMock />
      <MainContent>
        <FilterPanel />
        <SuggestionsPanel />
        <MediaGridList photos={photos} />
      </MainContent>
    </>
  );
};
