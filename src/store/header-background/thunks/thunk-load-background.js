import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadBackground = createAsyncThunk("load-bckg", async () => {
  const number = 10000000 + Math.floor(Math.random() * 1000000);
  const resp = await fetch(`https://api.pexels.com/v1/photos/${number}`, {
    headers: {
      Authorization: "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf",
    },
  });

  const data = await resp.json();
  return {
    src: data.src.original,
    author: data.photographer,
    link: data.photographer_url,
  };
});
