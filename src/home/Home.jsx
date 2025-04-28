import React from 'react'
import './Home.css'
import Navbar from './navbar/Navbar'
import Banner from './banner/Banner'
import Someword from './someword/Someword'
import Recentwork from './recentwork/Recentwork'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Recentwork />
      <Someword />
    </div>
  )
}

export default Home