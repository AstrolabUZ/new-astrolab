import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Services = createApi({
  reducerPath: `Services`,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://swagger.astrolab.uz/v1",
  }),
  endpoints: (build) => ({
    getAllServices: build.query({
      query: () => ({
        url: `/get-all-service`,
        method: `GET`,
      }),
    }),
  }),
});

export const { useGetAllServicesQuery } = Services;
