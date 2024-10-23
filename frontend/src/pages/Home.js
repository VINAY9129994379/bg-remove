import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import BgSlider from '../components/BgSlider'
import Testimonials from '../components/Testimonials'
import Upload from '../components/Upload'

function Home() {
  return (
    <div className='home'>
      <Header/>
      <Steps/>
      <BgSlider/>
      <Testimonials/>
      <Upload/>

    </div>
  )
}

export default Home