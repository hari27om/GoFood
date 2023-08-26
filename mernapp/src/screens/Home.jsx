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
        <div>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home