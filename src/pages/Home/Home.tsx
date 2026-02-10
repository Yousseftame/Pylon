import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import HeroSection from '../Sections/HeroSection'
import Purpose from '../Sections/Purpose'
import Culture from '../Sections/Culture'
import Services from '../Sections/Services'
import Tut from '../Sections/Tut'
import Tact from '../Sections/Tact'
import Think from '../Sections/Think'
import MediaMagnet from '../Sections/MediaMagnet'
import DS from '../Sections/DS'
import Insightify from '../Sections/Insightify'
import ScrollToTop from '../../components/shared/ScrollToTop'

export default function Home() {
  return (
    <div className="min-h-screen ">
      <NavBar />
      <HeroSection />
      <Purpose />
      <Culture />
      <Services />

      <Footer />
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
