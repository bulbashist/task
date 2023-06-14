import { Navigation } from "../../components/navigation/navigation";
import SuggestionsPanel from "./suggestions-panel";
import { Gallery } from "./gallery/gallery";

export const CategoryPage = () => {
  return (
    <>
      <Navigation />
      <div style={{ height: "80px" }}></div>
      <div style={{ padding: "0 80px" }}>
        <SuggestionsPanel />
        <Gallery />
      </div>
    </>
  );
};
