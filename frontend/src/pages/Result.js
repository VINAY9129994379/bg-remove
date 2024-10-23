import React from 'react'
import { assets } from '../assets/assets';
import './Result.css'


function Result() {
  return (
    <div className='resul-container'>
      <div className='result-left'>
        <h3>Original</h3>
        <img src={assets.image_w_bg} alt=''/>


      </div>
      <div className='result-right'>
        <h3>Background Removed</h3>
        <img src={assets.image_wo_bg} alt=''/>
        <button className='result-right-btn-left'>
          Try another image

        </button>
        <button className='result-right-btn-right'>
          Download image

        </button>
        

      </div>
    </div>
  )
}

export default Result