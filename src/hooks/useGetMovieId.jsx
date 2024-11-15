import { useDispatch } from "react-redux"

import axios from "axios";
import { getMovieTrailer } from "../redux/moviesSlice.js";
import { options } from "../utils/constant";
import { useEffect } from "react";

const useGetMovieId = async (movieId) => {
    console.log(movieId)
    const dispatch = useDispatch();
    useEffect(() => {
        const getMovieId = async () => {

            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId && movieId}/videos`, options);
                // console.log(response.data.results)
                const trailer = response?.data?.results?.filter((item) => {
                    return item.type === "Trailer"

                })
                dispatch(getMovieTrailer(trailer.length > 0 ? trailer[0] : response.data.results[0]));


            } catch (error) {
                console.log(error)

            }
        }
        getMovieId();

    }, [])

}


export default useGetMovieId;