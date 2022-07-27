import React from 'react'
import './style.css'

import { ArrowLeft } from 'react-bootstrap-icons'
const Header = () => {
  return (
    <>
    <div className=' header-container'>
        <div className='col-5'>
            <ArrowLeft color='#0078CF' style={{ fontSize:"22px" }} />
        </div>
        
        <div className='col-7'>
            <h4 style={{ fontSize:"18px",color:"#0078CF"}}>LifeX</h4>
        </div>
    </div>
    
    </>
  )
}

export default Header