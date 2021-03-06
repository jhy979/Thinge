import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/counter/userSlice";
import questionReducer from "../features/counter/questionSlice";

// configureStore : API를 활용하여 쉽게 만든 store
export const store = configureStore({
  reducer: {
    user: userReducer,
    question: questionReducer,
  },
});
