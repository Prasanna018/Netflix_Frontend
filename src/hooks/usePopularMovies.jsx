
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { options, Popular_Movies } from '../utils/constant';
import { getPopular_Movies } from '../redux/moviesSlice.js';
const usePopularMovies = async () => {
    const dispatch = useDispatch();
    try {
        const response = await axios.get(Popular_Movies, options);
        dispatch(getPopular_Movies(response.data.results))

    } catch (error) {
        console.log(error)

    }
}

export default usePopularMovies
