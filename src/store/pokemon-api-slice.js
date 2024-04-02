import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
    reducerPath: 'pokemon',
    // baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),
    baseQuery: fetchBaseQuery({baseUrl: 'https://reqres.in/api/'}),

    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: (name) => `pokemon/${name}`,
        }),
        signup: builder.mutation({
            query: (data) => ({
                url: 'users',
                method: 'POST',
                body: data
            })
        })
    }),
  
})
export const { useLazyGetPokemonByNameQuery, useSignupMutation } = pokemonApi;