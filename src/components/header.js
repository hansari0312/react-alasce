import React from 'react'

import logo from '../assets/images/logo.png';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



export default function header() {
  return (
    <div>

      <header>
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-lg-4 col-md-12">
                    <div className="logo wow fadeInLeft" data-wow-duration="3s" >
                        <Link to="/"><img src={logo}/></Link>
                    </div>
                </div>
                <div className="col-lg-8 col-md-12 wow fadeInRight" data-wow-duration="3s">
                    <div className="header-text text-right">
                        <ul>
                        <li><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}> Home </NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}> About Us </NavLink></li>
                        <li><NavLink to="/faq" className={({ isActive }) => (isActive ? "active" : "")}> Faq </NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}> Contact Us </NavLink></li>
                        <li><NavLink to="/contact" className="t-btn"> BOOK NOW </NavLink></li>

                            


                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>

{/* 
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="index.html"><img src={logo} alt=""/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}> Home </NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}> About Us </NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}> Faq </NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}> Contact Us </NavLink></li>
            <li><NavLink to="/about" className="t-btn"> BOOK NOW </NavLink></li>
           
          </ul>
        </div>
      </nav> */}

<Navbar  expand="lg" className="mb-menu">
     
        <Navbar.Brand to="/"><img src={logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/contact">Book Now</Link>
            
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
      
    </div>
  )
}
