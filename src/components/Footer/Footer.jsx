import React from 'react'
import { ImFacebook2 } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
import { FaApplePay } from "react-icons/fa6";
import { FaPaypal } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div>

            {/* Upper Footer */}
            <div className='bg-primary text-white'>
                <div className='container '>
                    <div className='grid grid-cols-2 lg:grid-cols-4 p-3 lg:p-8  gap-x-16 lg:gap-x-4'>

                        {/* About */}
                        <div className='flex flex-col p-3'>
                            <h1 className='text-md md:text-xl font-bold tracking-wider pb-5'>ABOUT</h1>
                            <div className=' text-[10px] md:text-xs space-y-3 text-gray-300'>
                                <p className='cursor-pointer hover:text-white'><Link to={'/'}>Studio Ghibli</Link></p>
                                <p className='cursor-pointer hover:text-white'>GKIDS</p>
                                <p className='cursor-pointer hover:text-white'>FAQs</p>
                                < p className='cursor-pointer hover:text-white'> <Link to={'/contact'}>Contact Us  </Link></p>
                            </div>
                        </div>

                        {/* Information */}
                        <div className='flex flex-col p-3'>
                            <h1 className='text-md md:text-xl font-bold tracking-wider pb-5'>INFORMATION</h1>
                            <div className='text-[10px] md:text-xs space-y-3 text-gray-300'>
                                <p className='cursor-pointer hover:text-white'><Link to={'/filmography'}>Filmography</Link></p>
                                <p className='cursor-pointer hover:text-white'><Link to={'/shop'}> Shop </Link></p>
                            </div>
                        </div>

                        {/* Sing Up Letter */}
                        <div className='flex flex-col p-3 lg:mr-24'>
                            <h1 className='text-md md:text-xl font-bold tracking-wider pb-5'>NEWSLETTER SIGN UP</h1>
                            <div className='space-y-2 text-gray-300'>
                                <p className='text-[10px] md:text-xs'>Sign up for exclusive updates, new arrivals & discounts</p>
                                <div className='flex'>
                                    <input className=' p-1 w-[300px] text-black text-xs placeholder:pl-1 placeholder:text-gray-300 
                                    focus:outline-none' type="text" placeholder='enter you email address' />
                                    <button className='p-2 bg-slate-800 text-white text-xs md:text-md'>SUBMIT</button>
                                </div>
                            </div>
                        </div>

                        {/* Presented By */}
                        <div className='flex flex-col p-3'>
                            <h1 className='text-md md:text-xl font-bold tracking-wider pb-5'>PRESENTED BY</h1>
                            <div >
                                <button className='border-4 rounded-full text-white p-4 text-xs md:text-md'>GKIDS</button>
                            </div>
                            <div className='flex gap-7 mt-8 cursor-pointer'>
                                <ImFacebook2 className='scale-125 md:scale-150 hover:text-slate-400' />
                                <IoLogoYoutube className='scale-125 md:scale-150 hover:text-slate-400' />
                                <FaInstagramSquare className='scale-125 md:scale-150 hover:text-slate-400' />
                                <FaSquareXTwitter className='scale-125 md:scale-150 hover:text-slate-400' />
                            </div>

                        </div>

                    </div>
                </div>
            </div >

            {/* Lower Footer */}
            <div className=' bg-secondary text-white'>
                <div className=' container'>
                    <div className='p-5'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                            <p className='text-xs text-gray-300'>© 2023 The Studio Ghibli Collection. All Rights Reserved.</p>
                            <div className='flex gap-x-12'>
                                <FaCcMastercard className='cursor-pointer scale-125 md:scale-150' />
                                <FaCcVisa className='cursor-pointer scale-125 md:scale-150' />
                                <FaCreditCard className='cursor-pointer scale-125 md:scale-150' />
                                <FaApplePay className='cursor-pointer scale-125 md:scale-150' />
                                <FaPaypal className='cursor-pointer scale-125 md:scale-150' />
                                <FaMeta className='cursor-pointer scale-125 md:scale-150' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
