import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./charactersSlice";
import quotesReducer from "./quotesSlice";

export default configureStore({
  reducer: {
    characters: charactersReducer,
    quotes: quotesReducer,
  },
});
