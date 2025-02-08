import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Showcase from '@/components/Showcase'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Themes Clone",
    description: "Themes using shadcn/ui",
}
const Themes = () => {
    return (
        <div>
            <Navbar />
            <Hero/>
            <Showcase/>
            <Footer/>
        </div>
    )
}

export default Themes