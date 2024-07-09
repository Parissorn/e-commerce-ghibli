import React from 'react'
import { Link } from 'react-router-dom';

export const SignUp = () => {
    return (
        <div className='w-full p-12 bg-[#d0e1e7]'>
            <div className="max-w-lg mx-auto p-6 bg-white rounded-lg ">

                <h2 className="text-2xl font-bold mb-6">Sign Up</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
                        Firstname *
                    </label>
                    <input
                        id="firstname"
                        type="text"
                        placeholder="Firstname"
                        className="shadow  border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
                        Lastname *
                    </label>
                    <input
                        id="lastname"
                        type="text"
                        placeholder="Lastname"
                        className="shadow  border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email *
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="shadow  border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password *
                    </label>
                    <input
                        id="password"
                        type="text"
                        placeholder="Password"
                        className="shadow  border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className='flex items-center text-sm tracking-wide  text-gray-500 mb-4'>
                    <p>Subscribe To Email Marketing</p>
                    <input className='ml-3 mt-1' type="Checkbox" name="" id="" />
                </div>
                <div className="flex justify-center mb-2 ">
                    < button className='bg-primary text-white text-xs md:text-base  tracking-wider w-full h-10 active:bg-secondary '>
                        CREATE AN ACCOUNT
                    </button>
                </div>
                <div className='text-sm'>
                    <p>Already have an account?
                        <span className='text-red-700 hover:text-red-400 cursor-pointer pl-1'>
                            <Link to={'/login'}>
                                Login
                            </Link>
                        </span>
                    </p>
                </div>

            </div>
        </div>
    )
}
