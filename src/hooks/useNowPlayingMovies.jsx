
// import React from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { options, Now_Playing_Movies } from '../utils/constant';
import { getNow_Playing_Movies } from '../redux/moviesSlice.js'
const useNowPlayingMovies = async () => {
    const dispatch = useDispatch();
    try {
        const response = await axios.get(`${Now_Playing_Movies}`, options);
        dispatch(getNow_Playing_Movies(response.data.results))


    } catch (error) {
        console.log(error)

    }


}

export default useNowPlayingMovies
