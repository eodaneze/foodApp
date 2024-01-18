import React from 'react'
import Navbar from '../components/Navbar'
import DynamicHero from '../components/DynamicHero'

const Service = () => {
  return (
    <div>
       <div className="container-xxl position-relative p-0">
				<Navbar />
				<DynamicHero page={"Service"}/>
			</div>
    </div>
  )
}

export default Service