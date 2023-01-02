
import Contact from '../components/contact';
import PageTitle from '../components/page-title';
import ContactBg from '../assets/images/page-title.jpg';







function App() {
  return (
    <>
       <div>

       <PageTitle title1="Contact" title2="Us" titleImg={ContactBg}/>
      
        <Contact/>

       </div>
    </>
  );
}

export default App;
