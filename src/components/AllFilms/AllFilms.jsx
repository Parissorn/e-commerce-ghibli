import React from 'react'
import allFilmsData from '../../assets/allfilms.js'
import { Link } from 'react-router-dom'

export const AllFilms = () => {
    return (
        <div className='container mb-24' >

            {/* Head Section */}
            <h1 className='text-2xl text-black font-bold tracking-wide leading-10 mb-7 underline underline-offset-8 '>ALL FILMS</h1>

            {/* Films List */}
            <div className='flex justify-center'>
                <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-x-48 '>
                    {
                        allFilmsData.map((film) => (
                            <Link key={film.id} to={`/film/${film.id}`}>
                                <div className='w-[250px] text-center '>
                                    <img className='w-[250px] h-[350px] object-cover hover:cursor-pointer' src={film.img} alt="" />
                                    <div className='bg-primary text-white p-2'>
                                        <h3 className='font-semibol '>{film.title}</h3>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}
