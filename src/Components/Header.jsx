import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { API_END_POINT } from '../utils/constant';
import { setUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { setToggle } from '../redux/moviesSlice';
function Header() {
    const user = useSelector((store) => store.app.user);
    const navigate = useNavigate()
    // console.log(user)
    const dispatch = useDispatch();
    const toggle = useSelector((store) => store.movie.toggle)

    const logOutHandler = async () => {

        try {
            const response = await axios.get(`${API_END_POINT}/logout`);
            if (response.data.success) {

                toast.success(response.data.message)
            }
            dispatch(setUser(null));
            navigate('/')



        } catch (error) {
            console.log(error)

        }

    }
    const handleToggle = () => {
        dispatch(setToggle())

    }

    return (
        <div className=' absolute top-0 z-10 w-full bg-transparent  flex justify-between items-center px-6'>

            {/* < img className='w-56 p-2' src={'../assests/movie-loom-high-resolution-logo-transparent (1).png'} ></img > */}
            <span className='text-5xl font-extrabold italic font-serif space-x-3 p-2 text-red-600'>Movie-Loom</span>


            {
                user && (<div className='flex items-center '>
                    <IoIosArrowDropdown className='text-black size-8'></IoIosArrowDropdown>
                    <h1 className={`pr-2 font-semibold ${toggle ? "text-black" : "text-white"}`} >{user.fullname}

                    </h1>
                    <div className='flex items-center'>
                        <button onClick={logOutHandler} className='text-black rounded-md  bg-red-500 px-2 py-2'>
                            logout

                        </button>
                        <button onClick={handleToggle} className={`text-black rounded-md bg-red-500 px-2 py-2  ml-2  `}>
                            {
                                toggle ? "Back To Home" : "Search Movies"
                            }
                        </button>

                    </div>
                </div>)
            }

        </div >
    )
}

export default Header
