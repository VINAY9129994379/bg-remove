import React from 'react'
import './Navbar.css'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
function Navbar() {
  const {openSignIn}=useClerk()
  const {isSignedIn,user}=useUser()
  return (
    <div className='navbar'>
        <Link to='/'><img className='nav-logo' src={assets.logo} alt=""/></Link>

          {
            isSignedIn ? <div>
                
                <UserButton/>

            </div>
            :
            <button onClick={()=>openSignIn({})}>get started <img className='img-image' src={assets.arrow_icon} alt=""/></button>
          }


       
    </div>
  )
}

export default Navbar