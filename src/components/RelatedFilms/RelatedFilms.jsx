import React from 'react'
import RelatedFilmsData from '../../assets/related'
import { Link } from 'react-router-dom'

export const RelatedFilms = () => {
    return (
        <div className='my-8'>
            <div className='container p-0'>
                <h1 className='text-xl font-bold tracking-wide my-3'>Related Films</h1>
                <hr />
                <div className=' grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-8 mb-48 '>
                    {
                        RelatedFilmsData.map((film) => (
                            <Link className='justify-self-center' key={film.id} to={`/film/${film.id}`}>
                                <div className='w-[200px] flex flex-col  text-center space-y-3 cursor-pointer relative group hover:shadow-md hover:rounded-xl '>

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
