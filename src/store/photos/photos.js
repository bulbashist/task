import { createSlice } from "@reduxjs/toolkit";

import { download, loadMorePhotos, setPhotos } from "./thunks";

const slice = createSlice({
  name: "photos",
  initialState: [
    {
      next_page: "https://api.pexels.com/v1/curated?page=1&per_page=10",
      category: " ",
      photos: [],
    },
  ],
  reducers: {
    likePhoto: (state, action) => {
      return state.map((lib) => {
        if (lib.photos.find((photo) => photo.id === action.payload)) {
          return {
            ...lib,
            photos: lib.photos.map((photo) => {
              if (photo.id === action.payload)
                return { ...photo, liked: !photo.liked };
              else return photo;
            }),
          };
        } else return lib;
      });
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(loadMorePhotos.fulfilled, (state, action) => {
        const index = state.findIndex(
          (obj) => obj.category === action.payload.category
        );

        if (index === -1) return [...state, action.payload];

        return state.map((lib) => {
          if (lib.category === action.payload.category) {
            const photos = action.payload.photos.filter(
              (photo) => !lib.photos.some((ph) => ph.id === photo.id)
            );

            return {
              ...lib,
              next_page: action.payload.next_page,
              photos: [...lib.photos, ...photos],
            };
          } else return lib;
        });
      })
      .addCase(setPhotos.fulfilled, (state, action) => {
        const index = state.findIndex(
          (obj) => obj.category === action.payload.category
        );

        if (index === -1) return [...state, action.payload];

        return state.map((lib) => {
          if (lib.category === action.payload.category) {
            return action.payload;
          } else return lib;
        });
      })
      .addCase(download.fulfilled, (_, action) => {
        const url = URL.createObjectURL(action.payload);
        const a = document.createElement("a");
        a.href = url;
        a.download = "image";
        a.click();
      }),
});

export const { likePhoto } = slice.actions;
export const { reducer } = slice;
