import { configureStore } from "@reduxjs/toolkit";
import { Portfolio } from "./endpoints/portfoilo";
import { Services } from "./endpoints/services";
import { Vacancies } from "./endpoints/vacancies";

export const store = configureStore({
  reducer: {
    [Portfolio.reducerPath]: Portfolio.reducer,
    [Services.reducerPath]: Services.reducer,
    [Vacancies.reducerPath]: Vacancies.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(Portfolio.middleware)
      .concat(Services.middleware)
      .concat(Vacancies.middleware),
});
