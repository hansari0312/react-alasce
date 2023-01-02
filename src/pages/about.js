


import AboutBg from '../assets/images/page-title.jpg';
import PageTitle from '../components/page-title';
import About from '../components/about';







function App() {
  return (
    <>
       <div>

        <PageTitle title1="About" title2="Us" titleImg={AboutBg}/>
        <About />
      
      
       </div>
    </>
  );
}

export default App;
