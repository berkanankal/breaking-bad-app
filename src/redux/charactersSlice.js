import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let limit = 12;

export const fetchCharacters = createAsyncThunk(
  "characters/getAllCharacters",
  async (page) => {
    return axios
      .get(
        `${
          process.env.REACT_APP_API_BASE_ENDPOINT
        }/characters?limit=${limit}&offset=${limit * page}`
      )
      .then((res) => res.data);
  }
);

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    page: 0,
    hasNextPage: true,
  },
  reducers: {},
  extraReducers: {
    [fetchCharacters.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCharacters.fulfilled]: (state, action) => {
      state.items = [...state.items, ...action.payload];
      state.isLoading = false;
      state.page += 1;

      if (action.payload.length < 12) {
        state.hasNextPage = false;
      }
    },
    [fetchCharacters.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default charactersSlice.reducer;
