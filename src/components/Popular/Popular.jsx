import React from 'react'
import totoro036 from '../../assets/totoro036.jpg'
import chihiro045 from '../../assets/chihiro045.jpg'
import kimitachi024 from '../../assets/kimitachi024.jpg'
import { Link } from 'react-router-dom'

export const Popular = () => {
    return (
        <div className="container my-16 mx-auto space-y-4">

            {/* Head Section */}
            <h1 className='text-2xl text-black font-bold tracking-wide leading-10 mb-6 underline underline-offset-8 '>POPULAR FILMS</h1>

            {/* Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

                {/* Upper Card */}
                <div className=' md:col-span-2 flex flex-col lg:flex-row gap-x-4'>
                    <img className='w-full lg:w-2/3' src={kimitachi024} alt="" />
                    <div className="bg-primary/90 p-8 text-white flex flex-col justify-center items-start text-left">
                        <h2 className="text-2xl font-bold md:text-4xl md:my-3">THE BOY AND THE HERON</h2>
                        <p className=" mt-2 md:mt-4 md:text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium pariatur id sed vitae, adipisci illum ipsa ipsum expedita possimus error! Obcaecati possimus eaque corrupti. Sit rerum neque doloribus voluptates corporis!</p>
                        <button className="mt-10 bg-white text-primary/90 hover:text-primary/50 py-2 px-4 rounded ">
                            <Link to={'/film/1'}> LEARN MORE </Link>
                        </button>
                    </div>
                </div>

                {/* Lower Card */}
                <div>
                    <img src={totoro036} alt="" className="w-full h-auto " />
                    <div className="bg-green-800 p-4 text-white ">
                        <h2 className="text-2xl font-bold">MY NEIGHBOR TOTORO</h2>
                        <p className="mt-2 md:text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium pariatur id sed vitae, adipisci illum ipsa ipsum expedita possimus error! Obcaecati possimus eaque corrupti. Sit rerum neque doloribus voluptates corporis!</p>
                        <button className="mt-4 bg-white text-green-800 hover:text-green-500 py-2 px-4 rounded">
                            <Link to={'/film/24'}> LEARN MORE </Link>
                        </button>
                    </div>
                </div>
                <div>
                    <img src={chihiro045} alt="" className="w-full h-auto " />
                    <div className="bg-[#b95c69] p-4 text-white ">
                        <h2 className="text-2xl font-bold">SPIRITED AWAY</h2>
                        <p className="mt-2 md:text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium pariatur id sed vitae, adipisci illum ipsa ipsum expedita possimus error! Obcaecati possimus eaque corrupti. Sit rerum neque doloribus voluptates corporis!</p>
                        <button className="mt-4 bg-white text-[#b95c69] hover:text-[#b95c69]/60 py-2 px-4 rounded">
                            <Link to={'/film/14'}> LEARN MORE </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
