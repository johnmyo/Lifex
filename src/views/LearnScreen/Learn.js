import React from 'react'
import LearnBook from '../../components/LearnBook/LearnBook'
import Tab from '../../components/nav/Tab'
const Learn = () => {

  const BookData = [
    {
        id:1,
        date:'Today 5:30 PM',
        title:'အချိန်စီမံ ခန့်ခွဲခြင်းအစ မိမိကိုယ်ကို စီမံခြင်းက',
        img: require('../../assets/book-images/book8.png'),
        subTitle: 'Leadership & Management',
        primaryColor:'#F6C063',
        secondaryColor:'#9770E6',
    },
    {
        id:2,
        date:'Tuesday 6:30 PM',
        title:'အာရုံကိုဘယ်လို စွဲဆောင်မလဲ',
        img: require('../../assets/book-images/book7.png'),
        subTitle: 'Leadership & Management',
        primaryColor:'#9770E6',
        secondaryColor:'#132641',
    },
    {
        id:3,
        date:'Friday 6:30 PM',
        title:'စိတ်ကူးကောင်းတွေကို လက်တွေ့အကောင်အထည်ဖော်နည်း',
        img: require('../../assets/book-images/book6.png'),
        subTitle: 'Leadership & Management',
        primaryColor:'#132641',
        secondaryColor:'#fff',
    }
    
    ]





  return (
      <>
  <Tab
  active="2px solid #F6C063"
  background="#F6C063"
  /> 

  <div style={{ marginBottom:"80px" }}>
   {BookData.map( book => 
     <LearnBook
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

export default Learn