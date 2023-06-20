import { createAsyncThunk } from "@reduxjs/toolkit";

const loadMoreCallback = async (searchQuery = " ", { getState }) => {
  // return Promise.reject();
  const { color, orientation, size } = getState().filters;

  let orientationParam = "";
  if (orientation) {
    orientationParam = `&orientation=${orientation}`;
  }

  let sizeParam = "";
  if (size) {
    sizeParam = `&size=${size}`;
  }

  let colorParam = "";
  if (color) {
    colorParam = `&color=${color.slice(1)}`;
  }

  let link = "";
  const lib = getState().photos.find((lib) => lib.category === searchQuery);

  if (lib && lib.next_page) {
    link = lib.next_page;
  } else if (lib && !lib.next_page) {
    link = null;
  } else {
    link = `https://api.pexels.com/v1/search?query=${searchQuery}&page=1&per_page=10`;
  }

  if (!link) return Promise.reject("No more photos");

  if (lib) {
    link =
      lib.category === " "
        ? link
        : link + orientationParam + sizeParam + colorParam;
  }

  const res = await fetch(link, {
    headers: {
      Authorization: "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf",
    },
  });
  const data = await res.json();

  return {
    category: searchQuery,
    photos: data.photos.map((photo) => ({
      ...photo,
      orientation:
        photo.width > photo.height
          ? "landscape"
          : photo.width === photo.height
          ? "square"
          : "portrait",
    })),
    next_page: data.next_page,
  };
};

export const loadMorePhotos = createAsyncThunk("load", loadMoreCallback);
