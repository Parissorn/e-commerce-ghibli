import React, { useContext, useState } from 'react'
import { GhibliContext } from '../context/GhibliContext'
import { useParams } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb/Breadcrumb';
import { RelatedFilms } from '../components/RelatedFilms/RelatedFilms';

export const Film = () => {

    const { allFilmsData, increaseQauntity, decreaseQauntity, itemCategory, category, toCart, num } = useContext(GhibliContext);
    const { filmId } = useParams();
    const whichFilm = allFilmsData.find((movie) => (movie.id === parseInt(filmId)));


    return (
        <div className='my-8'>
            <div className='container'>
                <div className='mt-8'>
                    <div className='flex items-center text-gray-500 gap-x-2 mb-8'>
                        <Link to={'/'} className='hover:text-gray-800' > Home </Link><span className='inline-block scale-90'><IoIosArrowForward /></span> {whichFilm.title}
                    </div>
                    <div className='flex flex-wrap justify-center md:space-x-12'>

                        <img className='h-[400px] mx-6 mb-6' src={whichFilm.img} alt="" />

                        <div className='flex flex-col space-y-6'>

                            <Breadcrumb film={whichFilm} />

                            <div className='flex justify-start space-x-12'>

                                <button className={`text-sm font-semibold border-2 border-dashed px-3 py-2 rounded-md
                                ${itemCategory[whichFilm.id] === 'dvd' ? 'border-none text-white bg-primary/90' : null}`}
                                    onClick={() => { category(whichFilm.id, 'dvd') }} >  DVD
                                </button>

                                <button className={`text-sm font-semibold border-2 border-dashed px-3 py-2 rounded-md
                                ${itemCategory[whichFilm.id] === 'ptb' ? 'border-none text-white bg-primary/90' : null}`}
                                    onClick={() => { category(whichFilm.id, 'ptb') }} >  Photo Book
                                </button>

                            </div>

                            <div className='flex justify-between '>
                                <div className='flex items-center'>
                                    <button className='px-2 bg-gray-200 active:bg-gray-100'
                                        onClick={() => { decreaseQauntity() }}>-</button>
                                    <span className=' text-sm px-2  border-2'>{num}</span>
                                    <button className='px-2 bg-gray-200 active:bg-gray-100'
                                        onClick={() => { increaseQauntity() }}>+</button>
                                </div>

                            </div>

                            <div>
                                <p className='text-gray-500 text-xl tracking-wide'> <span className='text-red-500 line-through'>${whichFilm.old_price}</span>  |  <span className='text-black'>${whichFilm.new_price}</span>
                                </p>
                            </div>

                            <button className='text-primary  border-2 border-primary/90 px-3 py-1 
                            hover:bg-slate-200 active:text-white active:bg-primary/90 '
                                onClick={() => { toCart(whichFilm.id, num) }}>Add to cart</button>

                        </div>

                    </div>
                </div>
                <RelatedFilms />
            </div>
        </div>
    )
}