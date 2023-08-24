import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousal from '../components/Carousel'

const Home = () => {
  return (
    <>
      <div>
        <Navbar/>
        <Carousal/>
        <Card/>
        <Footer />
      </div>
    </>
  )
}

export default Home