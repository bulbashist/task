import { createSlice } from "@reduxjs/toolkit";

/**
 * orientation: 'landscape' | 'portrait' | 'square'
 * size: 'large' | 'medium' | 'small'
 * color: #000000-#ffffff
 */

const slice = createSlice({
  name: "filters",
  initialState: {
    color: null,
    orientation: null,
    size: null,
  },
  reducers: {
    changeFilters: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { changeFilters } = slice.actions;
export const { reducer } = slice;
