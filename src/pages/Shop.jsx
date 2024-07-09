import React from 'react';
import allFilmsData from '../assets/allfilms.js';
import { Link } from 'react-router-dom';

export const Shop = () => {
    return (
        <div className='my-8'>
            <div className='container'>
                <h1 className='text-xl font-bold tracking-wide my-3'>SHOP ALL</h1>
                <hr />
                <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 mb-48 gap-5 gap-y-28'>
                    {
                        allFilmsData.map((film) => (
                            <Link className='justify-self-center' key={film.id} to={`/film/${film.id}`}>
                                <div className='w-[200px] flex flex-col text-center space-y-3 cursor-pointer relative group hover:shadow-md hover:rounded-xl'>

                                    <img className='h-[250px] w-[200px] rounded-xl hover:rounded-b-none shadow-md duration-500' src={film.img} alt="" />

                                    <h2 className='text-sm tracking-wider'>{film.title}</h2>
                                    <p className='text-gray-400 pb-4'>
                                        <span className='text-red-500 line-through'>{`$${film.old_price}`}</span> | From <span className='text-black'>{`$${film.new_price}`}
                                        </span>
                                    </p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
