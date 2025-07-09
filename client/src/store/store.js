import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import productReducer from "./post-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    allPosts: productReducer,
  },
});

export default store;
