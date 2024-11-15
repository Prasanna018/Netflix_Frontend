import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movie",
    initialState: {
        Now_Playing_Movies: null,
        Popular_Movies: null,
        Top_Rated_Movies: null,
        Upcoming_Movies: null,
        toggle: false,
        movieTrailer: null,
        open: null,
        id: ""

    },
    reducers: {
        getNow_Playing_Movies: (state, action) => {
            state.Now_Playing_Movies = action.payload


        },
        getPopular_Movies: (state, action) => {
            state.Popular_Movies = action.payload
        }
        ,
        getTop_Rated_Movies: (state, action) => {
            state.Top_Rated_Movies = action.payload
        },
        getUpcoming_Movies: (state, action) => {
            state.Upcoming_Movies = action.payload
        },
        setToggle: (state) => {
            state.toggle = !state.toggle
        },
        getMovieTrailer: (state, action) => {
            state.movieTrailer = action.payload
        },
        setOpen: (state, action) => {
            state.open = action.payload
        },
        setID: (state, action) => {
            state.id = action.payload
        }
    }

})

export const { getNow_Playing_Movies, getPopular_Movies, getTop_Rated_Movies, getUpcoming_Movies, setToggle, getMovieTrailer, setOpen, setID } = moviesSlice.actions;
export default moviesSlice.reducer
