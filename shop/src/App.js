import './App.css';
import AOS from 'aos';
import "aos/dist/aos.css"
import { useState,useEffect } from 'react';
import Banner from './Banner/Banner';
import NavBar from './Navbar/NavBar';
import DarkMode from './Navbar/DarkMode';
import Hero from './Hero/Hero';
import Products from './Product/Products'
import TopProducts from './TopProducts/TopProducts';
import Testimonials from './Testimonials/Testimonials';
import Footer from './Footer/Footer';
import Subscribe from './Subscriber/Subscriber';
function App() {
  const [orderPop ,setOrderPop] = useState(false)
  
  const handlOrderPopUp =()=>{
    setOrderPop(!orderPop)

  }
  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100
    })
    AOS.refresh();
  })
  return (
    <>
      <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
         <NavBar handlOrderPopUp={handlOrderPopUp}/>
         <Hero handlOrderPopUp={handlOrderPopUp}/>
         <Products/>
         <TopProducts handlOrderPpopUp={handlOrderPopUp}/>
          <Banner/>
          <Subscribe/>
          <Testimonials/>
          <Footer/>
      </div>
    </>
  );
}

export default App;
