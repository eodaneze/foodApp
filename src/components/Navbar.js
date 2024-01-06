import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                <Link to={'/'} className="navbar-brand p-0">
                    <h1 className="text-primary m-0"><i className="fa fa-utensils me-3"></i>Restoran</h1>
                 
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0 pe-4">
                        <Link to={"/"} className="nav-item nav-link active">Home</Link>
                        <Link to={"/about"} className="nav-item nav-link">About</Link>
                        <Link to={"/service"} className="nav-item nav-link">Service</Link>
                        <Link to={"/menu"} className="nav-item nav-link">Menu</Link>
                        <div className="nav-item dropdown">
                            <Link to={''} className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Account</Link>
                            <div className="dropdown-menu m-0">
                                <a href="booking.html" className="dropdown-item">Login</a>
                                <a href="team.html" className="dropdown-item">Register</a>
                                
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div>
                    <a href="#" className="btn btn-primary py-2 px-4">Book A Table</a>
                </div>
            </nav>
    </div>
  )
}

export default Navbar