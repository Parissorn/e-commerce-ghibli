import React from 'react'
import HeroSlide from '../../assets/hero'
import Slider from "react-slick";
import { Link } from 'react-router-dom';

export const Hero = () => {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'linear',
        pauseOnHover: true,
        pauseOnFocus: false,
    };

    return (
        <div>
            <Slider {...settings}>

                {
                    HeroSlide.map((film) => (

                        < div key={film.id} className='w-full relative m-0' >
                            <img className='object-cover w-full h-[350px] md:h-[450px] lg:h-[610px]' src={film.img} alt="" />
                            <Link to={`/film/${film.id}`}>
                                <div className=' text-slate-300 hover:text-white bg-secondary/90 m-0 md:absolute  
                            md:bottom-0 text-center md:text-pretty flex flex-col justify-center items-center md:flex md:items-center md:flex-row'>
                                    <h1 className='text-3xl md:text-xl lg:text-3xl flex-2 font-bold tracking-wider mt-4 md:m-10 cursor-pointer'>
                                        {film.title.toUpperCase()}
                                    </h1>
                                    <p className='text-sm p-6 md:text-xs lg:text-sm  flex-1'>{film.description}</p>
                                </div>
                            </Link>
                        </div >

                    ))
                }

            </Slider>
        </div>

    )
}
