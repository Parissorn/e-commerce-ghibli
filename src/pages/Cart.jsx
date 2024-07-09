import React, { useContext, useState } from 'react'
import { GhibliContext } from '../context/GhibliContext'
import { TiTimes } from "react-icons/ti";
import { Link } from 'react-router-dom';

export const Cart = () => {

    const { cartItem, allFilmsData, getTotalPerItem, getTotal, deleteItemCart } = useContext(GhibliContext)

    return (
        <div className='mt-10 mb-24'>
            <div className='container'>
                {/* Header Section */}
                <div >
                    <div className='font-semibold text-sm lg:text-base hidden md:grid md:grid-cols-custom-6 mb-3'>
                        <h1 >Film</h1>
                        <h1 >Title</h1>
                        <h1 >Unit Price</h1>
                        <h1 >Quantity</h1>
                        <h1 >Total Price</h1>
                        <h1 >Remove</h1>
                    </div>
                    <hr className='border-[1px]' />
                </div>
                {/* Product Section */}
                <div>
                    {
                        allFilmsData.map((film) => (
                            (cartItem[film.id] > 0 &&
                                <div>
                                    <div key={film.id} className='text-sm grid grid-cols-3 md:grid-cols-custom-6 mb-3 items-center mt-4'>
                                        <img className='w-[40px] lg:w-[60px]' src={film.img} alt="" />
                                        <p className='text-xs md:text-sm hover:text-primary underline hover:underline-offset-2'><Link to={`/film/${film.id}`}>{film.title}</Link></p>
                                        <p className='text-xs md:text-sm'>
                                            <span className='text-red-500 line-through'>{`$${film.old_price}`}</span> | <span className='text-black'>{`$${film.new_price}`}
                                            </span>
                                        </p>
                                        <p className='justify-self-start md:ml-6  border-2 p-1'>{cartItem[film.id]}</p>
                                        <p className='justify-self-start md:ml-6'>${getTotalPerItem(film.id)}</p>
                                        <button className='justify-self-start border-2 rounded-sm px-1 py-[0.5px] ml-4 
                                        active:bg-primary active:text-white' onClick={() => { deleteItemCart(film.id) }}><TiTimes /></button>
                                    </div>
                                    <hr className='border-[1px]' />
                                </div>

                            )
                        ))
                    }
                </div>
                {/* Total Section */}
                <div className='mt-12'>
                    <div className='grid md:grid-cols-2 gap-8'>
                        {/* Left */}
                        <div className='w-full md:w-auto'>
                            <h2 className='font-bold text-lg underline underline-offset-8 mb-4'>CART TOTALS</h2>
                            <div className='space-y-2'>
                                <div className='text-sm flex justify-between'>
                                    <h3>Subtotal</h3>
                                    <h3>${getTotal()}</h3>
                                </div>
                                <hr className='border-[1px]' />

                                <div className='text-sm flex justify-between'>
                                    <h3>Shipping Fee</h3>
                                    <h3 className='text-gray-500'>Free</h3>
                                </div>
                                <hr className='border-[1px]' />

                                <div className='text-sm font-semibold flex justify-between'>
                                    <h3>Total</h3>
                                    <h3>${getTotal()}</h3>
                                </div>
                            </div>
                        </div>
                        {/* Right */}
                        <div>
                            <p className='text-sm text-gray-400'>If you have a promo code, enter it here</p>
                            <div className='flex flex-col md:flex-row items-center'>

                                <input className='p-2 w-full md:w-auto md:flex-grow text-black text-xs placeholder:text-gray-400 
                                    focus:outline-none border border-gray-300 rounded-l-md md:rounded-r-none' type="text" placeholder='Enter your promo code' />
                                <button className='p-2 w-full md:w-auto bg-slate-800 text-white text-xs md:text-sm rounded-r-md md:rounded-l-none mt-2 md:mt-0 md:ml-2'>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}