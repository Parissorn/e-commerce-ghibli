import React from 'react'
import chihiro042 from '../assets/chihiro042.jpg'
import { Link } from 'react-router-dom';


export const About = () => {
    return (
        <div className='mt-8 mb-24'>
            <div className='container'>
                <div className='grid grid-cols-1 lg:grid-cols-2 space-y-5 lg:space-y-0 lg:space-x-8'>
                    <div className='overflow-hidden'>
                        <img className='h-[250px] md:h-[350px] hover:scale-110 transition-all duration-1000' src={chihiro042} alt="" />
                    </div>
                    <div >
                        <h1 className='text-xl md:text-2xl font-semibold text-black mb-5'>ABOUT STUDIO GHIBLI</h1>
                        <p className='text-sm md:text-base mb-8'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ducimus dicta voluptatem cupiditate quis. Perferendis, esse incidunt! Quo, a accusamus quis tenetur deleniti perspiciatis corporis sit sapiente sed, rerum facere!
                            Rem assumenda nam suscipit, ea harum fugiat perferendis sit non, quam est corrupti minus? Tenetur voluptate incidunt, non iste labore repellendus adipisci illum alias! Molestias enim aperiam debitis? Facere, asperiores.
                            Necessitatibus temporibus maiores molestiae et ipsa id sequi, qui obcaecati nostrum! Itaque dolores natus quisquam voluptatum laudantium voluptas velit, facere, quam, rem illum deserunt odit iusto! Harum ab sapiente quo.
                        </p>
                        <Link to={'/filmography'}>
                            < button className='bg-primary text-white py-3 px-6  text-xs md:text-sm font-semibold tracking-wider 
                        hover:bg-white hover:text-black transition-all duration-500 border-[1px] border-primary hover:border-black '>
                                EXPLORE FILMOGRAPHY
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}
