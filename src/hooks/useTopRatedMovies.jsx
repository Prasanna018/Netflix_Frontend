import { useDispatch } from "react-redux"
import axios from "axios";
import { options, Top_Rated_Movies } from "../utils/constant";
import { getTop_Rated_Movies } from "../redux/moviesSlice.js";
const useTopRatedMovies = async () => {

    const dispatch = useDispatch();
    try {
        const response = await axios.get(Top_Rated_Movies, options);
        dispatch(getTop_Rated_Movies(response.data.results))
    } catch (error) {
        console.log(error)

    }
}


export default useTopRatedMovies
