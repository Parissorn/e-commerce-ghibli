import React from 'react'
import { Hero } from '../components/Hero/Hero'
import { Popular } from '../components/Popular/Popular'
import { AllFilms } from '../components/AllFilms/AllFilms'


export const HomePage = () => {
    return (
        <div >
            <Hero />
            <Popular />
            <AllFilms />
        </div>
    )
}
