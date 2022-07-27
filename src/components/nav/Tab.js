import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Avatar from "../../assets/Avatar/Ava@3x.png"
import Image from 'react-bootstrap/Image'
import './style.css'


// //tab icon svg import
import TrendingIcon from "../../assets/Tab-icon/trending-up.svg"
import HeartIcon from '../../assets/Tab-icon/heart.svg'
import LearningIcon from '../../assets/Tab-icon/e-learning.svg'
import {Award} from 'react-bootstrap-icons'












const Tab = () => {
  return (
    <div className='nav-container'>
<Row className='pt-3 tab-container' style={{ backgroundColor:'#ffffff', borderRadius: '0px 0px 0px 40px',padding:0,margin:0}} >
  {/* Profile tab    */}
<Col className='d-flex justify-content-center align-items-center flex-column col-4 my-auto' >
<a href='/profile'><img src={Avatar} alt="profile" className='profile-img'/></a>
<p className='profile-name'>You</p>
</Col>
 {/* trending tab    */}
 
<Col className='d-flex justify-content-center align-items-center flex-column col-4 my-auto' >
<a href='/'><Image src={TrendingIcon} className="tab-icon" /></a>
 <p className='profile-name'>Trending</p>
</Col>

 {/* live tab    */}

<Col className='d-flex justify-content-center align-items-center flex-column col-4 my-auto' >
<a href='/live'><Image src={HeartIcon} className="tab-icon" /></a>
<p className='profile-name'>Live</p>
</Col>

 {/* learn tab    */}
<Col className='d-flex justify-content-center align-items-center flex-column col-4 my-auto' >
<a href='/live'><Image src={LearningIcon} className="tab-icon" /></a>
<p className='profile-name'>learn</p>
</Col>
 {/* earn tab    */}
<Col className='d-flex justify-content-center align-items-center flex-column col-4 my-auto' >
<a href='/live'><Award className='tab-icon' color='#9aa6ac'/></a>
<p className='profile-name'>earn</p>
</Col>
</Row>
</div>
  )
}

export default Tab