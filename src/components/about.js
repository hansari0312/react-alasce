import sec1 from '../assets/images/home-sec-1-img-1.png';
import {Link} from 'react-router-dom';






export default function contact() {


  return (
    <div>
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
                        {/* <a className="t-btn" href="">OUR SERVICES</a> */}
                        <Link className="t-btn" to="/contact">OUR SERVICES</Link>
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
    </div>
  )
}
