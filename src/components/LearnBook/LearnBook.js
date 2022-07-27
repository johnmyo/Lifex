import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './style.css'
import Image from 'react-bootstrap/Image'
import {Heart} from 'react-bootstrap-icons'







const LiveBook = (props) => {
  return (
    
    <>
    <div style={{ backgroundColor:props.secondaryColor}} className='scroll-container'>
    <Container className='section-container' style={{ backgroundColor:props.primaryColor}}>
        <Row>
            <Col className='col-12 gy-2'><p className='date'>{props.date}</p></Col>
        </Row>
        <Row>
            <Col className='col-8'>
            <h5 className='book-title'> {props.title}</h5>
            </Col>
            <Col className='col-4'>
            <Image src={props.img} className='book-img' />
            </Col>
            
        </Row>
        <Row>
            <Col className='col-12 bottom-container my-2'>
          <Heart className='save-icon' size={23}/>
          <p className='sub-title'>{props.subTitle}</p>
            </Col>
        </Row>
    </Container>
    
    </div>
    </>
  )
}

export default LiveBook;