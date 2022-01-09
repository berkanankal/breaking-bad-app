import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchQuotes = createAsyncThunk("quotes/getAllQuotes", async () => {
  return axios
    .get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/quotes`)
    .then((res) => res.data);
});

export const quotesSlice = createSlice({
  name: "quotes",
  initialState: {
    quotes: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchQuotes.pending]: (state) => {
      state.status = "loading";
    },
    [fetchQuotes.fulfilled]: (state, action) => {
      state.quotes = action.payload;
      state.status = "succeeded";
    },
    [fetchQuotes.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default quotesSlice.reducer;
