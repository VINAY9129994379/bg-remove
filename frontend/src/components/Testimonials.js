import React from 'react'
import './Testimonials.css'
import { testimonialsData } from '../assets/assets'
function Testimonials() {
  return (
    <div className='testimonial'>
        <h1 className='testimonial-heading-center'>conditions testimonials</h1>

        <div className='testimonial-container'>
            {
                testimonialsData.map((item,index)=>(
                    <div key={index}>
                        <p>”</p>
                        <p>{item.text}</p>
                        <div className='testimonial-detail'>
                            <img src={item.image} alt=""/>
                            <div className='img-flex-title'>
                                <p>{item.author}</p>
                                <p>{item.jobTitle}</p>
                                </div>
                        </div>

                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Testimonials