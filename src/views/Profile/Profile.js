import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Server, Bookmark, Bell, CalendarCheckFill,  Sliders2Vertical,People} from 'react-bootstrap-icons'
import User from '../../assets/Avatar/profile.png'
import './style.css'
const Profile = () => {
  return (
   <div>
    <img src={User} className='user-profile-img' alt='profile'/>
    <div className='user-information-container'>
   <Row>
    <Col className='col-7'>
        <h4 className='user-name'>မေမြတ်မွန်</h4>
        <p className='user-phone'>+95943543543</p>
    </Col>
    <Col className='col-5'>
        <button className='edit-btn'>Edit Profile</button>
    </Col>
    </Row>
   <Row className='plan-container'>
    <Col className='col-7'>
        <h6 className='user-plan-title'>Plans and Payment</h6>
    </Col>
    <Col className='col-5'>
        <button className='plan-btn'>Manage Plan</button>
    </Col>
    </Row>

    <div className='details-container'>
        <div className='left-container'>
        <CalendarCheckFill size={16} color="#fff"/>
        <div className='currency'>MMK 299/wk</div>
        </div>
        <div className='right-container'>

        <Server color='#fff' size={20} style={{marginRight:'5px'}}/>
          <div>
             <p style={{ fontSize:'12px',color:'#fff',padding:'0',margin:'0' }}>Lvl 3</p>
             <p style={{ fontSize:'12px',color:'#fff',padding:'0',margin:'0' }}><b>25 </b>Points</p>  
          </div>
          </div>
      </div>
    
    <div className='profile-settins-tab-container'>
   <Row className=' m-auto'>
    <Col className='col-4' style={{ textAlign:'center' }}>
        <Bookmark size={23} color="#9599B3"/>
        <p className='icon-title'>Saved</p>
    </Col>
    <Col className='col-4' style={{ textAlign:'center' }}>
        <Bell size={23} color="#9599B3"/>
        <p className='icon-title'>Notifications</p>
    </Col>
    <Col className='col-4' style={{ textAlign:'center' }}>
        <Sliders2Vertical size={23} color="#9599B3"/>
        <p className='icon-title'>Settings</p>
    </Col>
   </Row>
   <hr className='divider'></hr>
   <Row className='m-auto' style={{ textAlign:'center' }}>
    <Col className='col-4'>
        <People size={23} color="#9599B3"/>
        <p className='icon-title'>Help</p>
    </Col>
</Row>
    </div>
    </div>
   </div>
  )
}

export default Profile