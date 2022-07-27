import React from 'react'
import { Container} from 'react-bootstrap';
import { House , Search, Bookmark} from 'react-bootstrap-icons';
import './style.css'




 const footer = () => {
  return (
   <>
   <Container className="footer-container" fluid>
         
        <div className='footer-home active'>
       <a href='/'>
        <House size={20} color="#E87642"/>
       </a>
        <p className='active footer-name'>Home</p>
        </div>
      
        <div className='footer-explore'>
          <a href='/explore' >
          <Search size={20} color="#B1AC9F"/>
          </a>
         <p className='footer-name'>Explore</p>
          </div>
        <div className='footer-saved'>
          <a href='/saved_booklist'>
          <Bookmark size={20} color="#B1AC9F"/>
          </a>
          <p className='footer-name'>Saved</p>
          </div>
    
   </Container>
   </>
  )
}

export default footer;