import React, { useContext, useState } from 'react'
import { GhibliContext } from '../context/GhibliContext'
import { Link } from 'react-router-dom'
import { Breadcrumb } from '../components/Breadcrumb/Breadcrumb'

export const Filmography = () => {

    const { allFilmsData, readMode, read } = useContext(GhibliContext)

    return (
        <div className='mb-24'>
            <div className='bg-[#d0e1e7] w-full text-3xl tracking-wider text-center py-5'>
                <h1 className='py-3 tracking-wider'>FILMOGRAPHY</h1>
            </div>
            <div className='mt-8'>
                <div className='container'>
                    <div className='flex justify-center'>
                        <div className='flex flex-col'>
                            {
                                allFilmsData.map((film) => (

                                    <div key={film.id} className='grid grid-cols-1 lg:grid-cols-2 gap-x-10'>
                                        <div className='flex  flex-col text-white space-y-6 lg:w-[500px] justify-self-end '>
                                            <img className='object-cover' src={film.img2} alt="" />
                                            <button className='text-xs bg-blue-900 py-2 font-semibold'>View Trailer</button>
                                            <Link to={`/film/${film.id}`} className='text-xs text-center bg-green-600/90 py-2 font-semibold'>
                                                <button >Buy Now</button>
                                            </Link>
                                        </div>
                                        <div className='flex flex-col  space-y-6 mb-12 mt-8 lg:mt-0'>
                                            <Breadcrumb film={film} />
                                            <div className='flex justify-start gap-x-8 p-3 text-gray-500 transition-all duration-300'>
                                                <button className={`py-2 px-3 rounded-full ${read[film.id] == 'about' ? 'bg-black text-white' :
                                                    null}`} onClick={() => { readMode(film.id, 'about') }}>About</button>

                                                <button className={`py-2 px-3 rounded-full  ${read[film.id] == 'bonus' ? 'bg-black text-white' :
                                                    null}`} onClick={() => { readMode(film.id, 'bonus') }}>Bonus Features</button>

                                                <button className={`py-2 px-3 rounded-full ${read[film.id] == 'review' ? 'bg-black text-white' :
                                                    null}`} onClick={() => { readMode(film.id, 'review') }}>Reviews</button>
                                            </div>
                                            <p className='text-gray-500'>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                            </p>
                                            <p className='text-gray-500'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dignissimos repellat et
                                                quisquam, perspiciatis cumque harum tenetur quibusdam non fugit quam est, illo
                                                consequuntur architecto deserunt. Excepturi delectus beatae illo.
                                            </p>
                                            <hr />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}