import Emailjs from '@emailjs/browser';
import { useState as UseState, useRef as UseRef } from "react";
import React from 'react'
import form_img from '../assets/images/form-img.png';
import side_bg from '../assets/images/side-bg.png';
import lu_logo1 from '../assets/images/ollu-logo-1.png';
import lu_logo2 from '../assets/images/ollu-logo-2.png';
import lu_logo3 from '../assets/images/ollu-logo-3.png';
import lu_logo4 from '../assets/images/ollu-logo-4.png';






export default function contact() {

    const [pending, setPending] = UseState(false);

    const form = UseRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setPending(true);

    Emailjs.sendForm('service_1w5vh6l', 'template_deg9k6l', form.current, '8pAkXoSKDleRcs2Ka')
      .then((result) => {

         setPending(false);

          console.log(result.text);
        //   alert("we;'ve reciece your message!")
        form.current.reset();
      }, (error) => {
          console.log(error.text);
         setPending(false);

            //  alert("Sorry, there was some error!")
           form.current.reset();
      });
  };

  return (
    <div>
      
    <section className="home-sec-5">
        <div className="container">
            <div className="row text-center">
                <div className="col-md-12">
                    <div className="text">
                        <h2 className="wow fadeInUp" data-wow-duration="3s">Contact <span>us</span> </h2>
                    </div>
                    <p className="wow fadeInUp" data-wow-duration="3.2s">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's<br /> standard dummy text ever since the 1500s,</p>
                </div>
            </div>
            <div className="row margin-top">
                <div className="col-lg-8 col-md-12 wow fadeInLeft" data-wow-duration="3s">
                    <form   ref={form} onSubmit={sendEmail}>
                        <div className="row without-padding">
                            <div className="col-md-6">
                            <div className="input-box">
                                <input type="text" placeholder="First Name" name="first-name"  required/>
                                <i className="fa fa-user" aria-hidden="true"></i>
                            </div>
                            <div className="input-box">
                                <input type="text" placeholder="Last Name" name="last-name" required/>
                                <i className="fa fa-user" aria-hidden="true"></i>
                            </div>
                            <div className="input-box">
                                <input type="email" placeholder="Email" name="email" required/>
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                            </div>
                            <div className="input-box">
                                <input type="number" placeholder="Phone Number" name="phone" required/>
                                <i className="fa fa-phone" aria-hidden="true"></i>
                            </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-box">
                                    <textarea placeholder="How can we help you?" name="message"></textarea>
                                    <i className="fa fa-question-circle" aria-hidden="true"></i>
                                </div>
                                
                            </div>

                            
                        </div>

                        <div className="row without-padding">
                        <div className="col-md-12">
                        
                            <button type="submit" disabled={pending ? true : false} >{pending ? "Loading..." : "Submit Now"}</button>
                        

                        </div>
                    </div>
                    </form>
                   
                </div>
                <div className="col-lg-4 col-md-12 wow fadeInRight" data-wow-duration="3s">
                    <div className="form-text">
                        <img src={form_img} alt="" />
                        <a className="new-btn" href="tel:012-345-6789">Call Us Now</a>
                        <p><a href="tel:012-345-6789">012-345-6789</a></p>
                        <p><a href="mailto:info@alaskantour.com">info@alaskantour.com</a></p>
                        <div className="social-icons">
                            <p>FOLLOW US:</p>
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                            <i className="fa fa-google-plus" aria-hidden="true"></i>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>


    <section className="footer-upper" style={{ backgroundImage: 'url(' + side_bg + ')' }}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="text">
                        <h3 className="wow fadeInLeft" data-wow-duration="3s">COMPNAY <br /> REWARDS</h3>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 wow fadeInRight" data-wow-duration="3s">
                    <div className="footer-upper-logo">
                        <img src={lu_logo1} alt="" />
                        <img src={lu_logo2} alt="" />
                        <img src={lu_logo3} alt="" />
                        <img src={lu_logo4} alt="" />
                    </div>
                </div>
            </div>
        </div>

    </section>
    </div>
  )
}
