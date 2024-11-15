import axios from 'axios';
import React, { useState } from 'react'
import { options, SEARCH_MOVIES } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetails } from '../redux/searchSlice.js';
import { setIsLoading } from '../redux/userSlice.js';
import MoviesList from './MoviesList.jsx';
function SearchMovies() {
    const [searchMovie, setSearchMovie] = useState("")
    const dispatch = useDispatch();
    const isLoading = useSelector((store) => store.app.isLoading)
    const { moviename, searchedMovies } = useSelector((store) => store.searchMovie);
    console.log(moviename);
    console.log(searchedMovies);


    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(setIsLoading(true))
        try {
            const response = await axios.get(`${SEARCH_MOVIES}${searchMovie}&include_adult=false&language=en-US&page=1`, options)
            console.log(response.data.results)
            const movies = response?.data?.results;
            dispatch(getMovieDetails({ searchMovie, movies }))
            console.log(searchMovie);
            console.log(movies);

        } catch (error) {
            console.log(error)
        } finally {
            dispatch(setIsLoading(false))
        }

        setSearchMovie("")
    }

    return (
        <>
            <div className='flex justify-center mt-[10%] w-[100%]'>
                <form onSubmit={handleSubmit} className='w-[50%]'>
                    <div className=' text-black flex justify-center border-2 border-gray-200 shadow-md w-[100%] rounded-md p-3'>
                        <input value={searchMovie} onChange={(e) => {
                            setSearchMovie(e.target.value)
                        }} className='w-full outline-none p-2 rounded-md text-lg' type='text' placeholder='Search Movie'></input>

                        <button className='bg-red-900 text-white px-3 rounded-md py-2'>{isLoading ? "Loading.." : "Search"}</button>
                    </div>
                </form>
            </div>


            {
                searchedMovies?.length > 0 ? (
                    <MoviesList title={moviename} changeBg={true} movies={searchedMovies}></MoviesList>
                ) : <h1 className='text-red-400 text-2xl text-center p-2 m-2'>Search For Movies</h1>
            }

        </>
    )
}

export default SearchMovies
