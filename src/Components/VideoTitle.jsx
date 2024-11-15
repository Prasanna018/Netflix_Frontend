import React from 'react'
import { FaRegPlayCircle } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
function VideoTitle({ title, overview }) {
    return (
        <div className='absolute w-[vw] aspect-video px-10 text-white pt-[20%] '>
            <h1 className='text-3xl font-bold p-2'>{title}</h1>
            <p className='w-1/3 p-2'>{overview}</p>
            <div className='flex  items-center mt-4'>

                <div className='flex items-center  bg-white justify-center hover:bg-opacity-80 duration-200 rounded-md mx-2 p-3'>
                    <div>
                        <FaRegPlayCircle className='text-black text-2xl'></FaRegPlayCircle>
                    </div>

                    <div> <button className='  text-black font-semibold '>Play</button></div>

                </div>

                <div className='rounded-md  bg-white hover:bg-opacity-80 duration-200 flex items-center justify-center mx-2 p-3 '>
                    <div>
                        <FaInfo className='text-2xl text-black'></FaInfo>
                    </div>
                    <div>
                        <button className=' text-black  font-semibold '>Watch More</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default VideoTitle
