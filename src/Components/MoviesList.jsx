import React from 'react'
import MovieCard from './MovieCard'

function MoviesList({ title, movies, changeBg = false }) {

    return (
        <div>
            <p className={changeBg ? "text-black text-3xl p-2 text-center " : `text-3xl text-white py-3`}>{title}</p>


            <div className='overflow-x-auto flex no-scrollbar  cursor-pointer'>
                <div className='flex items-center  '>
                    {
                        movies?.map((movie) => {
                            return (
                                <MovieCard key={movie.id} movieId={movie.id} posterPath={movie.poster_path}></MovieCard>
                            )
                        })


                    }



                </div>

            </div>

        </div >
    )
}

export default MoviesList
