import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { AiOutlineClose } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ShareModel = ({ visible, onClose }) => {
    //  it's a function to copy url
    const Url = (window.location.href);
    const CopyToClipboard = () => {
        // Copy the text inside the Clipboard
        navigator.clipboard.writeText(Url);
        toast.success(' Url Copied!', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    // it's a function to close model
    const HandleonClose = (event) => {

        if (event.target.id === "modal")

            onClose();
    }
    if (!visible) return null;
    return (
        <div>
            {/* importing tost to show notification when url copied */}
            <ToastContainer />
            <div onClick={HandleonClose} id="modal" className="fixed flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm  p-4  inset-0  w-full h-full">
                <div className=" relative items-center w-full max-w-md md:h-auto">
                    <div className="relative top-1/3 bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* button to close model */}
                        <button onClick={onClose} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" >
                            <AiOutlineClose className="w-5 font-bold h-5" />
                        </button>
                        <div className="p-6 text-center">
                            <div className='text-white my-5  h-10 rounded-full pl-4 overflow-hidden flex  items-center bg-black' >
                                <div className=" justify-start bg-black">
                                    <h3 className='text italic' >{Url}</h3>
                                </div>
                                {/* button to copy url */}
                                <button onClick={CopyToClipboard} className='bg-gray-600 hover:bg-gray-800 hover:scale-110 rounded-full absolute right-[23px] px-4 h-10'>Copy</button>
                            </div>
                            <div className="flex space-evenly text-3xl mb-3 text-green-500">
                                <BsWhatsapp className='m-2  hover:scale-125' />
                                <FaFacebookSquare className='m-2 hover:scale-125' />
                                <FaTwitter className='m-2 hover:scale-125' />
                                <BsInstagram className='m-2 hover:scale-125' />
                                <BsLinkedin className='m-2 hover:scale-125' />
                                <FaTelegramPlane className='m-2 hover:scale-125' />
                                <SiGmail className='m-2 hover:scale-125' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShareModel
