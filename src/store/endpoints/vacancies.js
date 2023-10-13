import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Vacancies = createApi({
  reducerPath: `Vacancies`,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://95.130.227.6:2023/v1",
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
