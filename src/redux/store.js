import { configureStore } from "@reduxjs/toolkit"
import userReducer from './userSlice.js'
import moviesReducer from './moviesSlice.js'
import searchReducer from './searchSlice.js'
const store = configureStore({
    reducer: {
        app: userReducer,
        movie: moviesReducer,
        searchMovie: searchReducer

    }
})
export default store;