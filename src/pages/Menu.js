import React from 'react'
import Navbar from '../components/Navbar'
const Menu = () => {
  return (
    <div>
        {/* Navbar & Hero Start  */}
        <div className="container-xxl position-relative p-0">
           <Navbar />

            <div className="container-xxl py-5 bg-dark hero-header mb-5">
                <div className="container text-center my-5 pt-5 pb-4">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Food Menu</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center text-uppercase">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Menu</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        {/* Navbar & Hero End */}
    </div>
  )
}

export default Menu