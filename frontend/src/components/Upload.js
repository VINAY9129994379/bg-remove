import React from 'react'
import './Upload.css'
import { assets } from '../assets/assets'

function Upload() {
  return (
    <div className='upload'>
        <h1>See The Magic</h1>
        <div className='upload-contain'>
          <input type='file' id='upload2' name=''  />
            <label htmlFor='upload2'>
                <img className='img' width={20} src={assets.upload_btn_icon} alt='upload icon' />
                <p className='upload image'>Upload your image</p>
           </label> 
        </div>
    </div>
  )
}

export default Upload
