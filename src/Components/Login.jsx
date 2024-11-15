import React, { useState } from 'react'
import Header from './Header'

import axios from 'axios';
import { API_END_POINT } from '../utils/constant.js'

import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setIsLoading } from '../redux/userSlice.js';



function Login() {

    const [isLogin, setIsLogin] = useState(false);
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoading = useSelector((store) => store.app.isLoading)

    const handleForm = async (e) => {


        e.preventDefault();

        if (isLogin) {
            dispatch(setIsLoading(true))
            const userInfo = {
                email,
                password
            }
            try {
                const response = await axios.post(`${API_END_POINT}/login`, userInfo, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true
                }
                );
                // console.log(response.data)
                if (response.data.success) {
                    toast.success(response.data.message)
                }
                navigate('/browse')
                localStorage.setItem("netflix", JSON.stringify(response.data.user))
                dispatch(setUser(response.data.user))

            } catch (error) {
                console.log(error)
                toast.error(error.response.data.message)

            } finally {

                dispatch(setIsLoading(false))
            }

        }
        else {
            const userInfo = {
                fullname,
                email,
                password
            }
            dispatch(setIsLoading(true))

            try {
                const response = await axios.post(`${API_END_POINT}/register`, userInfo, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true
                });
                console.log(response.data)
                if (response.data.success) {
                    toast.success(response.data.message)
                }
                // dispatch(setUser(response.data.user))
                localStorage.setItem("netflix", JSON.stringify(response.data.user));
                setIsLogin(true)

            } catch (error) {
                console.log(error)
                toast.error(error.response.data.message)
            } finally {
                dispatch(setIsLoading(false))
            }

        }
        setFullName("")
        setEmail("")
        setPassword("")


    }

    const handleAuth = () => {
        setIsLogin(!isLogin)
    }
    return (
        <div >



            <Header></Header>

            <div className='absolute ' >
                <img className='w-[100vw] h-[100vh]  ' src='https://i.pinimg.com/736x/19/8b/2f/198b2f01e73b905772279616eccc7c65.jpg'></img>
            </div>
            <form
                onSubmit={handleForm}

                className='p-6 absolute my-40 flex justify-center items-center w-3/12 
            left-0 right-0 mx-auto bg-black flex-col opacity-90 rounded-md
            '>
                <h1 className='text-white mb-6 font-extrabold text-3xl'>{isLogin ? "Login" : "Signup"}</h1>
                <div className='text-white flex justify-center items-center flex-col '>

                    {
                        !isLogin && <input value={fullname} onChange={(e) => {
                            setFullName(e.target.value)
                        }} type='text' placeholder='Full Name' className='outline-none p-4 m-3 bg-gray-800'></input>
                    }

                    <input value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} type='email' placeholder='Email' className='outline-none p-4 m-3 bg-gray-800'></input>

                    <input value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }} type='password' placeholder='Password' className='outline-none p-4 m-3 bg-gray-800'></input>


                </div>
                <div className='m-2 '>
                    <button className='text-white bg-red-600 p-2 rounded-lg font-medium'>

                        {`${isLoading ? "Loading..." : isLogin ? "Login" : "SignUp"}`}

                    </button>
                </div>
                <div>

                    <p className='text-white'>{isLogin ? "New To Netflix ?" : "Already Have an account?"} <span className='text-blue-500 underline font-medium cursor-pointer' onClick={handleAuth}>{isLogin ? "Signup" : "Login"}</span></p>


                </div>
            </form >

        </div >
    )
}

export default Login
