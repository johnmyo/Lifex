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
import { useLocation} from 'react-router-dom'












const Tab = (props) => {

 let location = useLocation();
 let path = location.pathname;



return (
    <div className='nav-container' style={{  backgroundColor:props.background }}>
<Row className='pt-3 tab-container' style={{ backgroundColor:'#ffffff', borderRadius: '0px 0px 0px 40px',padding:0,margin:0}} >
  
  {/* Profile tab    */}
<Col className='d-flex justify-content-center align-items-center flex-column col-4 my-auto' >
<a href='/profile'><img src={Avatar} alt="profile" className='profile-img'/></a>
<p className='profile-name'>You</p>
</Col>
 
 {/* trending tab    */}
 <Col className='d-flex justify-content-center align-items-center flex-column col-4 my-auto' >
<a href='/'><Image src={TrendingIcon} className="tab-icon"  style={ path === '/' ? { border:props.active}:null} /></a>
 <p className='profile-name' style={path === '/'? {  fontWeight:600  }:null}>Trending</p>
</Col>

{/* live tab    */}
<Col className='d-flex justify-content-center align-items-center flex-column col-4 my-auto' >
<a href='/live'><Image src={HeartIcon} className="tab-icon"  style={path === '/live'? {  border:props.active  }:null}/></a>
<p className='profile-name' style={path === '/live'? {  fontWeight:600  }:null}>Live</p>
</Col>

 {/* learn tab    */}
<Col className='d-flex justify-content-center align-items-center flex-column col-4 my-auto' >
<a href='/learn'><Image src={LearningIcon} className="tab-icon" style={path === '/learn'? {  border:props.active  }:null}/></a>
<p className='profile-name' style={path === '/learn'? {  fontWeight:600  }:null}>learn</p>
</Col>

 {/* earn tab    */}
<Col className='d-flex justify-content-center align-items-center flex-column col-4 my-auto' >
<a href='/earn'><Award className='tab-icon' color='#9aa6ac' style={path === '/earn'? {  border:props.active  }:null}/></a>
<p className='profile-name' style={path === '/earn'? {  fontWeight:600  }:null}>earn</p>
</Col>
</Row>
</div>
  )
}

export default Tab