import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Link} from 'react-router-dom';


// import './App.css';
import { dataDigitalBestSeller } from './data';
// import imgGirl from './assets/images/defaultImage.jpg';

function App() {
//   const [defaultImage, setDefaultImage] = useState({});
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     initialSlide: 0,
   
//   };

//   const handleErrorImage = (data) => {
//     setDefaultImage((prev) => ({
//       ...prev,
//       [data.target.alt]: data.target.alt,
//     //   linkDefault: imgGirl,
//     }));
//   };

//   return (
//     <div className="">
//       <Slider {...settings}>
//         {dataDigitalBestSeller.map((item) => (
//           // <div className="card">
//           //   <div className="card-top">
//           //     <img
//           //       src={
//           //        item.linkImg
//           //       }
//           //       alt={item.title}
//           //       onError={handleErrorImage}
//           //     />
//           //     <h1>{item.title}</h1>
//           //   </div>
//           //   <div className="card-bottom">
//           //     <h3>{item.price}</h3>
//           //     <span className="category">{item.category}</span>
//           //   </div>
//           // </div>
          
//           <div className="row">
//           <div className="col-lg-12 col-md-12">
//           <div className="text">
//                         <h1>{item.title}</h1>
//                         <a className="t-btn t-blue" href="">{item.category}</a>
//             </div>
//             </div>
//             </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  
};
return (
  <div>
    <Slider {...settings}>
      <div className="text">
        <h1>MAKE YOUR <span>PERFECT</span> <br/> ALASKA TOUR</h1>
        {/* <a className="t-btn t-blue" href="" tabindex="0">KNOW MORE</a> */}
        <Link className="t-btn t-blue" to="/about">KNOW MORE</Link>
      </div>
      <div className="text">
      <h1>MAKE YOUR <span>PERFECT</span> <br/> ALASKA TOUR</h1>
        {/* <a className="t-btn t-blue" href="" tabindex="0">KNOW MORE</a> */}
        <Link className="t-btn t-blue" to="/about">KNOW MORE</Link>

      </div>
      
    </Slider>
  </div>
);
}

export default App;