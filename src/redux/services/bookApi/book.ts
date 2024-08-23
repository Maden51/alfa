import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import  WorkProps from "./types";

export const bookApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://wizard-world-api.herokuapp.com/'}),
  endpoints: (builder) => ({
    getSpells: builder.query<WorkProps[], ''>({
      query: () => 'Spells'
    }),
    getSpell: builder.query<WorkProps, string | undefined>({
      query: (id) => `Spells/${id}`
    })
  })
})

export const { useGetSpellsQuery, useGetSpellQuery } = bookApi;