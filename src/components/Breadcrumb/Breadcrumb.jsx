import React from 'react'

export const Breadcrumb = ({ film }) => {
    return (
        <div>
            <h1 className='text-xl font-bold mb-4'>{film.title}</h1>
            <div className='space-y-2'>
                <p className='text-sm text-gray-500 font-bold'>{film.year}/???min</p>
                <p> <span className='text-sm font-bold'>Directed by:</span> Hayao Mizaki </p>
                <p> <span className='text-sm font-bold'>Produced by:</span> Hayao Mizaki </p>
                <p> <span className='text-sm font-bold'>Written by:</span> Hayao Mizaki </p>
            </div>
        </div>
    )
}
