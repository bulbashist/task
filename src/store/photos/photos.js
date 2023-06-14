import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const cb = async (searchQuery = " ", { getState }) => {
  const { orientation, avg_color } = getState().filters;

  let r = "";
  if (orientation) {
    r = `&orientation=${orientation}`;
  }

  let k = "";
  if (avg_color) {
    k = `&color=${avg_color}`;
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

  if (!link) return Promise.reject("no more photos");

  if (lib) {
    link = lib.category === " " ? link : link + r + k;
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

const loadMorePhotos = createAsyncThunk("load", cb);

const setPhotos = createAsyncThunk("set", cb);

const slice = createSlice({
  name: "photos",
  initialState: [
    {
      next_page: "https://api.pexels.com/v1/curated?page=$1&per_page=10",
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
            return {
              ...lib,
              next_page: action.payload.next_page,
              photos: [...lib.photos, ...action.payload.photos],
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
      }),
});

export { loadMorePhotos, setPhotos };
export const { likePhoto } = slice.actions;
export default slice.reducer;
