import { createAsyncThunk } from "@reduxjs/toolkit";

const setCallback = async (searchQuery = " ", { getState }) => {
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

  let link =
    searchQuery === " "
      ? "https://api.pexels.com/v1/curated?page=1&per_page=10"
      : `https://api.pexels.com/v1/search?query=${searchQuery}&page=1&per_page=10`;
  link = link + orientationParam + sizeParam + colorParam;

  const lib = getState().photos.find((lib) => lib.category === searchQuery);

  if (lib && lib.photos.length === 0 && !lib.next_page)
    return Promise.reject("No photos");

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

export const setPhotos = createAsyncThunk("set", setCallback);
