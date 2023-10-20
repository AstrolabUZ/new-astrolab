import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Vacancies = createApi({
  reducerPath: `Vacancies`,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://swagger.astrolab.uz/v1",
  }),
  endpoints: (build) => ({
    getAllVacancies: build.query({
      query: () => ({
        url: `/get-all-vacancy`,
        method: `GET`,
      }),
    }),
  }),
});

export const { useGetAllVacanciesQuery } = Vacancies;
