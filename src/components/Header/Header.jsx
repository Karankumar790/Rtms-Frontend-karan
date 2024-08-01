import React from 'react'
import '../../Stylesheet/Header.css'
import logo from '../../../public/assets/logo.svg'
import MQTT1 from '../../../public/assets/MQTT1.png'

function Header() {
  return (
    <div className='header'>
       <div class="logo">
          <img src={logo} alt="image" />
        </div>
        <div class="logo-heading">
            <h1>OIL & NATURAL GAS CORPORATION</h1>
            <h2>Real Time Well Monitoring System</h2>
        </div>
        <div class="icon">
            <a href="#"><img src={MQTT1} alt="" /></a>
            <a href="#">Technical Support</a>
            
            {/* <!-- <a href="#" id="sup"><img src="/asset/mqtt5.png" alt="mqtt" ></a> -->
            <!-- <a href="#">About us</a> --> */}
        </div>
    </div>
  )
}

export default Header
