import { createAsyncThunk } from "@reduxjs/toolkit";

export const download = createAsyncThunk("download", async (url) => {
  const resp = await fetch(url);
  const data = await resp.blob();
  return data;
});
