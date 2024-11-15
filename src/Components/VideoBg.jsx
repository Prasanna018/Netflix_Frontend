import React from 'react'
import useGetMovieId from '../hooks/useGetMovieId'
import { useSelector } from 'react-redux';



function VideoBg({ movieId, bool }) {

    useGetMovieId(movieId);
    const movieTrailer = useSelector((store) => store.movie.movieTrailer);
    console.log(movieTrailer);

    return (
        <div className='w-[vw] overflow-hidden'>
            {
                movieTrailer && movieTrailer.key && (
                    <iframe className={`${bool ? "w-[100%]" : "w-screen aspect-video"} `}
                        src={`https://www.youtube.com/embed/${movieTrailer.key}?si=N5Ujxa73WloEdHtw&autoplay=1&mute=1`}

                        title="YouTube video player"
                        frameBorder="0"


                        allowFullScreen>

                    </iframe>
                )
            }


        </div >
    )
}

export default VideoBg
