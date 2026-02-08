import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import HeroSection from '../Sections/HeroSection'
import Purpose from '../Sections/Purpose'
import Culture from '../Sections/Culture'
import Services from '../Sections/Services'
import Tut from '../Sections/Tut'
import DS from '../Sections/Ds'
import Tact from '../Sections/Tact'
import Think from '../Sections/Think'
import Insightify from '../Sections/insightify'
import MediaMagnet from '../Sections/MediaMagnet'

export default function Home() {
  return (
        <div className="min-h-screen ">

          <NavBar />
          <HeroSection />
          <Purpose />
          <Culture />
          <Services />
          <Tut />
          <DS />
          <Tact /> 
          <Think />
          <Insightify />
          <MediaMagnet />
          <Footer />

    </div>
  )
}
