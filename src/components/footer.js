import React from 'react'

import flogo from '../assets/images/footer-logo.png';
import insiicon from '../assets/images/insitech-icon.png';
import {Link} from 'react-router-dom';


export default function footer() {
  return (
    <div>
     



    <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 line-1">
                    <div className="footer-logo">
                        <a href="index.html"><img src={flogo} alt=""/></a>
                        <p>Quisque vehicula aliquam maurion suscipit felis fermentum id. Quisque tempoBacon ipsum dolor amet filet mignon pork belly hamburger pork tail shank pig andouille, pork loin cow sausage meatball capicola. Kielbasa porchetta meatball pig pork loin short ribs sirloin jowl landjaeger </p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12 line-2">
                    <div className="text">
                        <h5>UseFul Links</h5>
                        <ul>
                            {/* <li><a href="index.html">Home</a></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">Contact Us</a></li> */}
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/faq">Faq</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/contact">Book Now</Link></li>

                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12">
                    <div className="text">
                        <h5>Contact Us</h5>
                        <div className="links">
                            <ul>
                                <li><a href="tel:907 746 1438"><i className="fa fa-phone" aria-hidden="true"></i>907 746 1438</a></li>
                                <li><a href="mailto:info@alaskantours.com"><i className="fa fa-envelope" aria-hidden="true"></i>info@alaskantours.com</a></li>
                                <li><a href="javascript:void(0)"><i className="fa fa-map-marker" aria-hidden="true"></i>6830 E. Toller Court<br/>
                                    Wasilla Alaska 99654</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="fotter-btm">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="copy-right">
                            <p>AlaskaTours © 2022. All Rights Reserved. Made with Love by <a href="https://insitech.ae/" target="blank">Insitech <img src={insiicon} alt=""/></a></p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="links">
                            <a href="javascript:void(0)">Terms & Condition <span>/</span></a>
                            <a href="javascript:void(0)">Privacy Policy</a>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </footer>

    </div>
  )
}
