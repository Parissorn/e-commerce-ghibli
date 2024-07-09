import React from 'react'

export const Contact = () => {
    return (

        <div className='w-full p-12 bg-[#d0e1e7]'>
            <div className="max-w-lg mx-auto p-6 bg-white rounded-lg ">
                <h2 className="text-2xl font-bold mb-6">Contact us</h2>
                <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae incidunt tempora, ad harum nulla sit ipsum.
                </p>
                <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae incidunt tempora.
                </p>
                <p className="mb-4">
                    For our Shipping Policy and our FAQ, <span className="text-pink-500 underline hover:cursor-pointer">click here</span>.
                </p>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                        Full Name *
                    </label>
                    <input
                        id="fullName"
                        type="text"
                        placeholder="Full Name"
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
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="orderNumber">
                        Order Number *
                    </label>
                    <input
                        id="orderNumber"
                        type="text"
                        placeholder="Please enter the order number."
                        className="shadow  border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message *
                    </label>
                    <textarea
                        id="message"
                        placeholder="Give us some feedback or you can leave it blank."
                        className="shadow  border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    ></textarea>
                </div>
                <div className="mb-4">
                    < button className='bg-primary text-white py-2 px-4 text-[10px] md:text-xs font-semibold tracking-wider 
                        hover:bg-white hover:text-black transition-all duration-500 border-[1px] border-primary hover:border-black '>
                        SUBMIT
                    </button>
                </div>
            </div>
        </div>

    );
};

