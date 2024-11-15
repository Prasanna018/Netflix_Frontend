import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBg from './VideoBg'
import { useSelector } from 'react-redux'

function MainContainer() {
    const movie = useSelector((store) => store.movie.Now_Playing_Movies);
    console.log(movie);
    if (!movie) return;

    const { id, title, overview } = movie[Math.floor(Math.random() * movie?.length)];


    return (
        <div >
            <VideoTitle title={title} overview={overview}></VideoTitle>
            <VideoBg movieId={id}></VideoBg>


        </div>
    )
}

export default MainContainer

