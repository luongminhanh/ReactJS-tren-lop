import React from 'react'
import NavBar from '../navbar/NavBar'
import FeatureList from '../feature/FeatureList'
import Slide from '../slide/Slide'
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <div>
      <NavBar />
      <FeatureList />
      {/* <Slide /> */}
      <Footer />
    </div>
  )
}

export default Home