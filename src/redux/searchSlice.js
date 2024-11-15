import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: "search",
    initialState: {
        moviename: null,
        searchedMovies: null,
    },

    reducers: {
        getMovieDetails: (state, action) => {
            const { searchMovie, movies } = action.payload
            state.moviename = searchMovie
            state.searchedMovies = movies
        }
    }


})
export const { getMovieDetails } = searchSlice.actions;
export default searchSlice.reducer;