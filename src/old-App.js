import logo from './assets/images/logo.png';
import insiicon from './assets/images/insitech-icon.png';
import flogo from './assets/images/footer-logo.png';
import sec1 from './assets/images/home-sec-1-img-1.png';
import sec2_1 from './assets/images/sec-2-1.jpg';
import sec2_2 from './assets/images/sec-2-2.jpg';
import sec2_3 from './assets/images/sec-2-3.jpg';
import sec2_4 from './assets/images/sec-2-4.jpg';
import sec2_bg from './assets/images/sec-2-bg.png';
import sec4_bg from './assets/images/sec-3-bg.png';
import logo_1 from './assets/images/logo-1.png';
import logo_2 from './assets/images/logo-2.png';
import logo_3 from './assets/images/logo-3.png';
import logo_4 from './assets/images/logo-4.png';
import logo_5 from './assets/images/logo-5.png';
import form_img from './assets/images/form-img.png';
import side_bg from './assets/images/side-bg.png';
import poster_img from './assets/images/iframe-video.png';
import lu_logo1 from './assets/images/ollu-logo-1.png';
import lu_logo2 from './assets/images/ollu-logo-2.png';
import lu_logo3 from './assets/images/ollu-logo-3.png';
import lu_logo4 from './assets/images/ollu-logo-4.png';
import video from './assets/video/video-1.mp4';

import './App.css';
import './assets/css/main-style.css';



function App() {
  return (
    <>
       <div>
       <header>
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-lg-4 col-md-12">
                    <div className="logo wow fadeInLeft" data-wow-duration="3s" >
                        <a href="index.html"><img src={logo}/></a>
                    </div>
                </div>
                <div className="col-lg-8 col-md-12 wow fadeInRight" data-wow-duration="3s">
                    <div className="header-text">
                        <ul>
                            <li><a href="" className="home-active">Home </a></li>
                            <li><a href="">About us </a></li>
                            <li><a href="">Alaska Land Tours </a></li>
                            <li><a href="">Alaska Family Tours </a></li>
                            <li><a href="">Faq </a></li>
                            <li><a href="">Contact us</a></li>
                            <li><a className="t-btn" href="">BOOK NOW</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="index.html"><img src={logo} alt=""/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">About us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">Alaska Land Tours</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="">Alaska Family Tours</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">Faq</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">Contact us</a>
              </li>
          </ul>
        </div>
      </nav>


      <section className="banner-sec wow fadeIn">
        <div className="container">
            <div className="row banner-slider">
                <div className="col-lg-12 col-md-12">
                    <div className="text wow fadeInUp" data-wow-duration="3s">
                        <h1>MAKE YOUR <span>PERFECT</span> <br/> ALASKA TOUR</h1>
                        <a className="t-btn t-blue" href="">KNOW MORE</a>
                    </div>
                </div>
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
        </div>
    </section>
{/* 
    <section className="home-sec-1">
        <div className="container-fluid p-0">
            <div className="row align-items-center">
                <div className="offset-lg-1 col-lg-5 col-md-12">
                    <div className="text wow fadeInLeft" data-wow-duration="3s">
                        <h2>About <span>Us</span></h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley.</p>
                        <a className="t-btn" href="">OUR SERVICES</a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 p-0">
                    <div className="img-box text-right wow fadeInRight" data-wow-duration="3s">
                        <img src={sec1} alt=""/>

                    </div>
                </div>
            </div>
        </div>
    </section>


    
    <section className="home-sec-2" style={{ backgroundImage: 'url(' + sec2_bg + ')' }}>
        <div className="container">
            <div className="row text-center">
                <div className="col-md-12">
                    <div className="text">
                        <h2 className="wow fadeInUp" data-wow-duration="3s">ALASKA <span>Tour Services</span> </h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6">
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
                </div>
            </div>
            <div className="row text-center">
                <div className="col-md-12">
                    <a className="t-btn t-blue wow fadeInUp" data-wow-duration="3s" href="">SEE ALL SERVICES</a>


                </div>
            </div>
        </div>

    </section>

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
                    <a className="t-btn" href="">BOOK NOW</a>
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
                    <div className="row without-padding">
                        <div className="col-md-6">
                        <div className="input-box">
                            <input type="text" placeholder="First Name" />
                            <i className="fa fa-user" aria-hidden="true"></i>
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Last Name" />
                            <i className="fa fa-user" aria-hidden="true"></i>
                        </div>
                        <div className="input-box">
                            <input type="email" placeholder="Email" />
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                        </div>
                        <div className="input-box">
                            <input type="number" placeholder="Phone Number" />
                            <i className="fa fa-phone" aria-hidden="true"></i>
                        </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-box">
                                <textarea placeholder="How can we help you?"></textarea>
                                <i className="fa fa-question-circle" aria-hidden="true"></i>
                            </div>
                            
                        </div>
                    </div>
                    <div className="row without-padding">
                        <div className="col-md-12">
                         <form action="">
                            <button>Submit Now</button>
                         </form>

                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 wow fadeInRight" data-wow-duration="3s">
                    <div className="form-text">
                        <img src={form_img} alt="" />
                        <a className="new-btn" href="">Call Us Now</a>
                        <p><a href="">907-354-1438</a></p>
                        <p><a href="">info@alaskantour.com</a></p>
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


    <section class="footer-upper" style={{ backgroundImage: 'url(' + side_bg + ')' }}>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="text">
                        <h3 class="wow fadeInLeft" data-wow-duration="3s">COMPNAY <br /> REWARDS</h3>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 wow fadeInRight" data-wow-duration="3s">
                    <div class="footer-upper-logo">
                        <img src={lu_logo1} alt="" />
                        <img src={lu_logo2} alt="" />
                        <img src={lu_logo3} alt="" />
                        <img src={lu_logo4} alt="" />
                    </div>
                </div>
            </div>
        </div>

    </section>















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
                            <li><a href="index.html">Home</a></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Alaska Land Tours</a></li>
                            <li><a href="">Alaska Family Tours</a></li>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">Contact Us</a></li>
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
                                <li><a href=""><i className="fa fa-map-marker" aria-hidden="true"></i>6830 E. Toller Court<br/>
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
                            <p>AlaskaTours © 2022. All Rights Reserved. Made with Love by <a href="https://insitech.ae/">Insitech <img src={insiicon} alt=""/></a></p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="links">
                            <a href="">Terms & Condition <span>/</span></a>
                            <a href="">Privacy Policy</a>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </footer> */}

    
       </div>
    </>
  );
}

export default App;
