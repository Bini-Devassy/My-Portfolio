import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../Assets/Me Main.jpg'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className="container header_container">
        
        <h5>Hello I'm</h5>
        <h1>BINI DEVASSY</h1>
        <h5 className="text-light">Frontend Developer </h5>
        
        <CTA/>
        <HeaderSocials/>
        



<div class="container-pic">
        
<div class="card-wrapper">
      
      <div class="card profile-two">
        
        <div class="card-image profile-img--two">
        <img src={ME} alt="" />
        </div>

    </div>
 </div>
     
 </div>



         <div className="me">
          <img src={ME} alt="" />
         </div>
         <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header