import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Services = createApi({
  reducerPath: `Services`,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://95.130.227.6:2023/v1",
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
