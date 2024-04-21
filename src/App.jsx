import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Categories from './Components/Categories/Categories'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Assets from './Components/Assets/Assets'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState, setPlayState] = useState(false);


  return (
    <div>
        <Navbar />
        <Hero />
        <div className="container">
        <Title subTitle='CATEGORIES' title='What We Offer'/>
        <Categories/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title='Asset Photos'/>
        <Assets/>
        <Title subTitle='TESTIMONIALS' title='What Artists Says'/>
        <Testimonials/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
        </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
