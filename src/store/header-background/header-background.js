import { createSlice } from "@reduxjs/toolkit";
import { loadBackground } from "./thunks";

import defaultBckg from "../../assets/header-background.webp";

const slice = createSlice({
  name: "header-bckg",
  initialState: null,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(loadBackground.fulfilled, (_, action) => action.payload)
      .addCase(loadBackground.rejected, () => {
        return {
          src: defaultBckg,
          author: "Irina Iriser",
          link: "https://www.pexels.com/@emine-sevval-587670081",
        };
      }),
});

export const { reducer } = slice;
