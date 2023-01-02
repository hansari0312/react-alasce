// import ReactDOM from "react-dom/client";
// import { 
//     BrowserRouter as Router,
//     Routes,
//     Switch, 
//     Route,
//     Link
//  } from "react-router-dom";
import {BrowserRouter , Routes , Route} from 'react-router-dom'


import './App.css';
import './assets/css/main-style.css';



import Rect from "react";

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Faq from './pages/faq';
import Header from './components/header.js';
import Footer from './components/footer.js';

import 'bootstrap/dist/css/bootstrap.css';


import logo from './assets/images/logo.png';



// import WOW from 'wowjs';


function App() {
  return (
    <>
       <div>
       <BrowserRouter>
       <Header />
    
               <Routes>
                   
                       
                            <Route  path='/' element={<Home />} ></Route>
                            <Route path='/about' element={<About />} ></Route>
                            <Route path='/contact' element={<Contact />} ></Route>
                            <Route path='/faq' element={<Faq />} ></Route>
                        
                  

               </Routes>
               <Footer />
               </BrowserRouter>

    
       </div>
    </>
  );
}

export default App;
