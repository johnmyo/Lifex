import React from 'react'
import LiveBook from '../../components/LiveBook/LiveBook'
import Tab from '../../components/nav/Tab'
const Live = () => {

  const BookData = [
    {
        id:1,
        date:'Today 5:30 PM',
        title:'Coding သင်ရတာဘာလို့ ခက်တာလဲ',
        img: require('../../assets/book-images/book4.png'),
        subTitle: 'Leadership & Management',
        primaryColor:'#E6D153',
        secondaryColor:'#52912E',
    },
    {
        id:2,
        date:'Tuesday 6:30 PM',
        title:'လက်ဖက်ရည်နှင့် ကလေးတွေရဲ့ အနာဂါတ်',
        img: require('../../assets/book-images/book5.png'),
        subTitle: 'Leadership & Management',
        primaryColor:'#52912E',
        secondaryColor:'#417623',
    },
    {
        id:3,
        date:'Friday 6:30 PM',
        title:'စဥ်ဆက်မပြတ် လေ့လာသင်ယူ လေ့ကျင့်ခြင်း',
        img: require('../../assets/book-images/book6.png'),
        subTitle: 'Leadership & Management',
        primaryColor:'#417623',
        secondaryColor:'#fff',
    }
    
    ]





  return (
      <>
  <Tab
  active="2px solid #E6D153"
  background="#E6D153"
  /> 

  <div style={{ marginBottom:"80px" }}>
   {BookData.map( book => 
     <LiveBook
     key={book.id}
     date={book.date}
     title={book.title}
     img={book.img}
     subTitle={book.subTitle}
     primaryColor={book.primaryColor}
     secondaryColor={book.secondaryColor}
     />
    )}
     </div>
      </>
  )
}

export default Live