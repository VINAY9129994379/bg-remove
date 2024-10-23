import React from 'react'
import './Steps.css'
import { assets } from '../assets/assets'
function Steps() {
  return (
    <div className='steps'>
      <h1>Steps to remove the background<br/>image in seconds</h1>
        <div className='step-contain-center'>
        <div >

         <img  src={assets.upload_icon} alt=""/>

<div >
  <p>Upload image</p>
  <p>This is a demo text,will replace it later. This is a demo..</p>

</div>
</div>

<div >

<img src={assets.upload_icon} alt=""/>

<div >
  <p>Upload image</p>
  <p>This is a demo text,will replace it later. This is a demo..</p>

</div>
</div>

<div >

<img src={assets.upload_icon} alt=""/>

<div >
  <p>Upload image</p>
  <p>This is a demo text,will replace it later. This is a demo..</p>

</div>
</div>

        </div>

    
    </div>
  )
}

export default Steps