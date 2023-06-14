import { useDispatch, useSelector } from "react-redux";
import { setPhotos } from "../store/photos/photos";

export const usePhotos = (searchQuery = " ") => {
  const lib = useSelector((state) =>
    state.photos.find((lib) => lib.category === searchQuery)
  );
  const { orientation, avg_color } = useSelector((state) => state.filters);

  const dispatch = useDispatch();
  if (!lib) {
    dispatch(setPhotos(searchQuery));
    return [];
  }

  if (lib.category === " ") return lib.photos;

  return lib.photos
    .filter((photo) => (orientation ? photo.orientation === orientation : true))
    .filter((photo) => {
      if (avg_color) {
        const R = Math.abs(
          parseInt(avg_color.slice(1, 3), 16) -
            parseInt(photo.avg_color.slice(1, 3), 16)
        );
        const G = Math.abs(
          parseInt(avg_color.slice(3, 5), 16) -
            parseInt(photo.avg_color.slice(3, 5), 16)
        );
        const B = Math.abs(
          parseInt(avg_color.slice(5, 7), 16) -
            parseInt(photo.avg_color.slice(5, 7), 16)
        );

        const D =
          (Math.sqrt(R ** 2 + G ** 2) +
            Math.sqrt(G ** 2 + B ** 2) +
            Math.sqrt(B ** 2 + R ** 2)) /
          3;

        return D < 150 ? true : false;
      }

      return true;
    });
};
