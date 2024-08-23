import { configureStore } from "@reduxjs/toolkit";
import { bookApi } from "./services/bookApi/book";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [bookApi.reducerPath]: bookApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(bookApi.middleware)
})


setupListeners(store.dispatch);