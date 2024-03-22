import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
    reducerPath: 'pokemon',
    baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),
    // baseQuery: fetchBaseQuery({baseUrl: 'http://172.21.3.218:3000/'}),

    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: (name) => `pokemon/${name}`,
        }),
        signup: builder.mutation({
            query: (data) => ({
                url: 'user',
                method: 'POST',
                body: data
            })
        })
    }),
  
})
export const { useLazyGetPokemonByNameQuery, useSignupMutation } = pokemonApi;