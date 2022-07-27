import React from 'react'
import Section from '../../components/TrendingBook/Section'
 



const Trending = () =>  {

    const BookData = [
    {
        id:1,
        date:'Today 5:30 PM',
        title:'ဆင်းရဲကင်းကွာ အောင်မြင်စွာနေထိုင်နည်းကျင့်စဥ်',
        img: require('../../assets/book-images/book1.png'),
        subTitle: 'Personal Development & Etiquette',
        primaryColor:'#E87642',
        secondaryColor:'#8A56AC',
    },
    {
        id:2,
        date:'Tuesday 6:30 PM',
        title:'စာမေးခြင်း အတတ်ပညာ',
        img: require('../../assets/book-images/book2.png'),
        subTitle: 'Personal Development & Etiquette',
        primaryColor:'#8A56AC',
        secondaryColor:'#352641',
    },
    {
        id:3,
        date:'Friday 6:30 PM',
        title:'Developer ဖြစ်အောင်လုပ်နည်း',
        img: require('../../assets/book-images/book3.png'),
        subTitle: 'Personal Development & Etiquette',
        primaryColor:'#352641',
        secondaryColor:'#fff',
    }
    
    ]

return (
    <>
    <div style={{ marginBottom:"80px" }}>
    {BookData.map( book => 
        <Section
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

export default Trending