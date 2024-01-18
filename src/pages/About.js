import React from 'react'
import DynamicHero from '../components/DynamicHero'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div>
       <div className="container-xxl position-relative p-0">
				<Navbar />
				<DynamicHero page={"About"}/>
			</div>
    </div>
  )
}

export default About