import React from 'react'
import Hero from './Hero'
import AllMedi from './AllMedi'
import TabletList from './TableList'
import Footer from './Footer'
import Conduct from './Conduct'

const Home = () => {
  return (
    <div className='pl-15 pt-0 pb-0 pr-15'>
      <Hero/>
      <TabletList/>
      <AllMedi/>
      <Conduct/>

    </div>
  )
}

export default Home
