


import sec2_bg from '../assets/images/sec-2-bg.png';
import sec4_bg from '../assets/images/sec-3-bg.png';
import logo_1 from '../assets/images/logo-1.png';
import logo_2 from '../assets/images/logo-2.png';
import logo_3 from '../assets/images/logo-3.png';
import logo_4 from '../assets/images/logo-4.png';
import logo_5 from '../assets/images/logo-5.png';

import poster_img from '../assets/images/iframe-video.png';

import video from '../assets/video/video-1.mp4';



import Slider from '../components/slider/slider.js';

import Contact from '../components/contact.js';
import Tour from '../components/tour/tour.js';
import About from '../components/about.js';
import {Link} from 'react-router-dom';
// import Fade from 'react-reveal/Fade';

function App() {
  return (
    <>
       <div>
      
     
     


      <section className="banner-sec wow fadeIn">
        <div className="container banner-slider">
            
            <Slider />
                {/* <div className="col-lg-12 col-md-12">
                    <div className="text wow fadeInUp" data-wow-duration="3s">
                        <h1>MAKE YOUR <span>PERFECT</span> <br/> ALASKA TOUR</h1>
                        <a className="t-btn t-blue" href="">KNOW MORE</a>
                    </div>
                </div> */}
                {/* <div className="col-lg-12 col-md-12">
                    <div className="text">
                        <h1>MAKE YOUR <span>PERFECT</span> <br/> ALASKA TOUR</h1>
                        <a className="t-btn t-blue" href="">KNOW MORE</a>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12">
                    <div className="text">
                        <h1>MAKE YOUR <span>PERFECT</span> <br/> ALASKA TOUR</h1>
                        <a className="t-btn t-blue" href="">KNOW MORE</a>
                    </div>
                </div> */}
            
        </div>
    </section>

    <About />



    
    <section className="home-sec-2" style={{ backgroundImage: 'url(' + sec2_bg + ')' }}>
        <div className="container">
            <div className="row text-center">
                <div className="col-md-12">
                    <div className="text">
                        <h2 className="wow fadeInUp" data-wow-duration="3s">ALASKA <span>Tour Services</span> </h2>
                    </div>
                </div>
            </div>
           
                 
                <Tour />


                {/* <div className="col-lg-3 col-md-6">
                    <div className="box wow fadeInLeft" data-wow-duration="3s">
                        <img src={sec2_1} alt=""/>
                        <div className="text">
                            <h6>1</h6>
                            <h3>Denali<br/>
                                National Park</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur blandit mollis. Etiam nec</p>
                        </div>

                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="box wow fadeInLeft" data-wow-duration="3s">
                        <img src={sec2_2} alt=""/>
                        <div className="text">
                            <h6>2</h6>
                            <h3>Anchorage<br/>
                                perfect city</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur blandit mollis. Etiam nec</p>
                        </div>

                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="box wow fadeInRight" data-wow-duration="3s">
                        <img src={sec2_3} alt=""/>
                        <div className="text">
                            <h6>3</h6>
                            <h3>Mendenhall<br/>
                                Glacier</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur blandit mollis. Etiam nec</p>
                        </div>

                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="box wow fadeInRight" data-wow-duration="3s">
                        <img src={sec2_4} alt=""/>
                        <div className="text">
                            <h6>4</h6>
                            <h3>Kenai Fjords<br/>
                                National Park</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur blandit mollis. Etiam nec</p>
                        </div>

                    </div>
                </div> */}
            
            <div className="row text-center">
                <div className="col-md-12">
                    {/* <a className="t-btn t-blue wow fadeInUp" data-wow-duration="3s" href="">SEE ALL SERVICES</a> */}
                    <Link className="t-btn t-blue wow fadeInUp" data-wow-duration="3s" to="/about">SEE ALL SERVICES</Link>

                </div>
            </div>
        </div>

    </section>
    {/* <Fade left>
          <h1>React Reveal</h1>
        </Fade> */}
    <section className="home-sec-3">
        <div className="container">
            <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 wow fadeInLeft" data-wow-duration="3s">
                <video width="100%" height="100%" poster={poster_img} controls>
                    <source src={video} type="video/mp4" />
                    <source src={video} type="video/ogg" />
                 </video>
               
             
            </div>
            <div className="col-lg-6 col-md-12 wow fadeInRight" data-wow-duration="3s">
                <div className="text">
                    <h2>Special <span>Offers</span></h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.</p>
                    {/* <a className="t-btn" href="">BOOK NOW</a> */}
                        <Link className="t-btn" to="/contact">BOOK NOW</Link>
                </div>
            </div>
            </div>
        </div>

    </section>


    
    <section className="home-sec-4 wow fadeIn" style={{ backgroundImage: 'url(' + sec4_bg + ')' }}>
        <div className="container">
            <div className="row text-center">
                <div className="col-md-12">
                    <div className="text">
                        <h2 className="wow fadeInUp" data-wow-duration="3s">Our <span>Partners</span> </h2>
                    </div>
                    <p className="wow fadeInUp" data-wow-duration="3.2s">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's<br /> standard dummy text ever since the 1500s,</p>
                </div>
            </div>
            <div className="row classwow fadeInUp" data-wow-duration="3.4s">
                <div className="col-md-12">
                    <div className="outer-logo-box">
                        <div className="logo-box logo-box-left">
                            <img src={logo_1} alt="" />
                        </div>
                        <div className="logo-box">
                            <img src={logo_2} alt="" />
                        </div>
                        <div className="logo-box">
                            <img src={logo_3} alt="" />
                        </div>
                        <div className="logo-box">
                            <img src={logo_4} alt="" />
                        </div>
                        <div className="logo-box">
                            <img src={logo_5} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </section>

    <Contact />


 



    
       </div>
    </>
  );
}

export default App;
