import React from 'react'
import { TMDB_IMG_URL } from '../utils/constant'
import { useDispatch } from 'react-redux';
import { setID, setOpen } from '../redux/moviesSlice';

function MovieCard({ posterPath, movieId }) {
    const dispatch = useDispatch();

    if (posterPath === null) return null;


    const handleOpen = () => {
        dispatch(setOpen(true))
        dispatch(setID(movieId))
        // console.log(data)


    }

    return (
        <div onDoubleClick={handleOpen} className='w-52 pr-2 flex items-center justify-center'>
            <img className='w-48' src={`${TMDB_IMG_URL}/${posterPath}`} alt='movie card'></img>

        </div>
    )
}

export default MovieCard;

