import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'
function MovieContainer() {
    const movies = useSelector((store) => store.movie)
    // console.log(movies.Now_Playing_Movies)
    return (
        <div className=' px-8 w-screen bg-black '>
            < div className='relative -mt-52 z-10' >
                <MoviesList title={"Now Playing Movie"} movies={movies.Now_Playing_Movies}></MoviesList>
                <MoviesList title={"Popular Movies"} movies={movies.Popular_Movies}></MoviesList>
                <MoviesList title={"Top Rated Movie"} movies={movies.Top_Rated_Movies}></MoviesList>
                <MoviesList title={"Upcoming Movies"} movies={movies.Upcoming_Movies}></MoviesList>

            </div >
        </div >
    )
}

export default MovieContainer
