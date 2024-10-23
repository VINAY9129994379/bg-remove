import React from 'react'
import './Header.css'
import { assets } from '../assets/assets'
function Header() {
  return (
    <div className='header'>
        <div className='header-left'>
            <h1 className='header-left-heading'>Remove the <br/><span>background</span>from<br/>images for free.</h1>
            <p className='header-left-heading-para'>lorem ipsum is simply dummy text of the printing and typesetting industry..</p>
            <div>
                <input type='file' name='' id='upload1' hidden/>
                <label htmlFor='upload1'>
                    <img className='upload-image' src={assets.upload_btn_icon} alt=''/>
                    <p className='para'>Upload your image</p>
                </label>
            </div>

        </div>
        <div className='header-right'>
            <img className='header-right-img' src={assets.header_img} alt=""/>

        </div>
    </div>
  )
}

export default Header