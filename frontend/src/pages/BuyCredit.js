import React from 'react'
import { assets, plans } from '../assets/assets'
import './BuyCredit.css'

function BuyCredit() {
  return (
    <div className='buycreedit-container'>
      <button className='buycredit-container-center-btn'>our plans</button>
      <h1 className='buycredit-container-center-heading'>choose the plan that`s right for you</h1>
      <div className='buycredit-methods'>
        {
          plans.map((item,index)=>(
            <div className='buycreit-methods-contain' key={index}>
              <img width={40} src={assets.logo_icon} alt="" />
              <p>{item.id}</p>
              <p>{item.desc}</p>
              <p>
                <span>${item.price}</span>/ {item.credits} credits

              </p>
              <button className='buycredit-methods-center-btn' >purchase</button>
 
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default BuyCredit