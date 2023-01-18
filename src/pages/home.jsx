import React from 'react'
import NavBar from '../components/navbar'
import Main from '../components/main'
import Images from '../components/images'
import Services from '../components/services'
import Portofolio from '../components/portofolio'
import Reviews from '../components/reviews'

function Home() {
  return (
    <div>
        <NavBar />
        <Main />
        <Images />
        <Services />
        <Portofolio />
        <Reviews />
    </div>
  )
}

export default Home