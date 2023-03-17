import React from 'react';
import text_bg from './bg.jpg';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className=' flex flex-col justify-center items-center dark:text-white '>
            <h1 className='xl:text-[250px] md:text-[160px] sm:text-[60px] text-[70px] font-bold text-transparent'
                style={{
                    backgroundImage: `url(${text_bg})`,
                    backgroundSize: "cover",
                    WebkitBackgroundClip: "text",

                }}
            >Oops!</h1>
            <h2 className='font-bold my-1 xl:text-4xl'>404 - PAGE NOT FOUND</h2>
            <p className='xl:w-1/3 w-[80%] font-normal my-1 text-sm xl:text-base'>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
            {/* created a button to redirect you to home page (Create flashcard page) */}
            <Link to='/'
                className='my-3 text-lg text-white bg-gradient-to-br from-purple-600 to-blue-500 
                hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300
                dark:focus:ring-blue-800 font-medium rounded-full px-7 py-2.5 text-center mr-2 mb-10'>
                Go To Home
            </Link>

        </div>
    )
}

export default Error404
