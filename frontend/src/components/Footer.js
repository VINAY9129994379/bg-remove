import React from 'react'
import './Footer.css'
import { assets } from '../assets/assets'
function Footer() {
  return (
    <div className='footer'>
        <img className='footer-img-left' width={150} src={assets.logo} alt=''/>
        <p className='footer-center'>copyright @vinaystack.dev | All right reserved.</p>
        <div className='footer-right'>
            <img width={40} src={assets.facebook_icon} alt=''/>
            <img width={40} src={assets.twitter_icon} alt=''/>
            <img width={40} src={assets.google_plus_icon} alt=''/>

        </div>
    </div>
  )
}

export default Footer