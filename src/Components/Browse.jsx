import React, { useEffect } from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import MainContainer from './MainContainer'
import MovieContainer from './MovieContainer'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import SearchMovies from './SearchMovies'


export default function Browse() {


    const user = useSelector(store => store.app.user)
    const navigate = useNavigate()

    // hooks
    useNowPlayingMovies();
    usePopularMovies()
    useTopRatedMovies();
    useUpcomingMovies();

    const toggle = useSelector((store) => store.movie.toggle);


    useEffect(() => {
        if (!user) {
            navigate('/')

        }


    }, [])
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div className='relative'>
                {
                    toggle ? (<SearchMovies></SearchMovies>) : (<>
                        <MainContainer></MainContainer>
                        <MovieContainer></MovieContainer>
                    </>)
                }

            </div>

        </div>
    )
}
