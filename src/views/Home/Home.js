import React from 'react'
import Tab from '../../components/nav/Tab'
import Trending from '../TrendingScreen/Trending'



const Home = () => {
  return (
    <>
    <Tab 
    active="2px solid #E87642"
    background="#E87642"
    />
    <Trending/>
    </>
  )
}

export default Home