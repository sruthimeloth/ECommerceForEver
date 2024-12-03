import React from 'react'
import Hero from '../Components/Hero'
import LatestCollections from '../Components/LatestCollections'
import BestSeller from '../Components/BestSeller'
import OurPolicy from '../Components/OurPolicy'
import NewSeletter from '../Components/NewSeletter'

const Home = () => {
  return (
    <div>
     <Hero/>
     <LatestCollections/>
     <BestSeller/>
     <OurPolicy/>
     <NewSeletter/>
    </div>
  )
}

export default Home
