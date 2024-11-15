import axios from "axios"
import { useDispatch } from "react-redux"
import { options, Upcoming_Movies } from "../utils/constant"
import { getUpcoming_Movies } from "../redux/moviesSlice.js"

const useUpcomingMovies = async () => {
    const dispatch = useDispatch()
    try {
        const response = await axios.get(Upcoming_Movies, options);
        dispatch(getUpcoming_Movies(response.data.results))
    } catch (error) {
        console.log(error)

    }

}

export default useUpcomingMovies
