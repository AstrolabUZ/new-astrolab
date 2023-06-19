import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Portfolio = createApi({
  reducerPath: `Portfolio`,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://astrolab.uz/v1/",
  }),
  endpoints: (build) => ({
    getAllPortfolio: build.query({
      query: () => ({
        url: `/portfolios`,
        method: `GET`,
      }),
    }),
  }),
});

export const { useGetAllPortfolioQuery } = Portfolio;
