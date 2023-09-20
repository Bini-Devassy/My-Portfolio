import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../Assets/pro.jpg'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className=" header_container">
        <h5 className="text-light">Hello I'm</h5>
        <h1>BINI DEVASSY</h1>
        <h5 className="text-light">Frontend Developer </h5>
        <h2>
  <span>&nbsp;Creating</span>
  <span>&nbsp;  Websites </span>
  <span> &nbsp;That</span>
  <span> &nbsp;Convert</span>
  <span>&nbsp;Visitors </span>
  <span> &nbsp;Into</span>
  <span> &nbsp;Customers</span>
  <span> &nbsp;- Where</span>
  <span> &nbsp; Code</span>
  <span>&nbsp;Meets</span>
  <span>&nbsp;Creativity.</span>
  <span>&nbsp;As a Developer-</span>
  <span>&nbsp; Doing  </span>
  <span>&nbsp; Frontend,</span>
  <span>&nbsp; Unlocking </span>
  <span>&nbsp; Potential</span>
  <span>Thinking.</span>
</h2>
<CTA/>

<HeaderSocials/> 
        
         <div className="me">
          <img src={ME} alt="" />
         </div>

         <a href="#contact" className='scroll_down'>Scroll Down</a>
</div>  

  
    </header>
  )
}

export default header