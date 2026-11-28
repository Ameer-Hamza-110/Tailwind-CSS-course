import React from 'react'
import Navbar from './LandingPage/Navbar'
import HeroSection from './LandingPage/HeroSection'
import Cards from './LandingPage/Cards'
import Price from './LandingPage/Price'
import ContactForm from './LandingPage/ContactForm'
import Footer from './LandingPage/Footer'

const Project5 = () => {
    return (
        <main className='bg-gray-900 text-gray-100'>
            <Navbar />
            <HeroSection />
            <Cards />
            <Price />
            <ContactForm />
            <Footer />
        </main>
    )
}

export default Project5
