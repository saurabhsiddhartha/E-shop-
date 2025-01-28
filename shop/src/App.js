import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Banner from "./Banner/Banner";
import NavBar from "./Navbar/NavBar";
// import DarkMode from './Navbar/DarkMode';
import Hero from "./Hero/Hero";
import Products from "./Product/Products";
import TopProducts from "./TopProducts/TopProducts";
import Testimonials from "./Testimonials/Testimonials";
import Footer from "./Footer/Footer";
import Subscribe from "./Subscriber/Subscriber";
import AdminDashboard from "./Admin/AdminDashboard";
import Users from "./Admin/Users";
import TotalOrder from "./Admin/TotalOrder";
import Setting from "./Admin/Setting"; 

function App() {
  const [orderPop, setOrderPop] = useState(false);

  const handlOrderPopUp = () => {
    setOrderPop(!orderPop);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  });

  return (
    <Router>
      <Routes>
        {/* Define the route for the admin dashboard */}
        <Route path="/admin" element={<AdminDashboard />}> 
          <Route index element={<Users/>}/>
          <Route path="users" element={<Users />} /> 
          <Route path="totalorders" element={<TotalOrder />} />
          <Route path="setting" element={<Setting />} />
        </Route>
        {/* Default route (home page) and other routes */}
        <Route
          path="/"
          element={
            <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
              <NavBar handlOrderPopUp={handlOrderPopUp} />
              <Hero handlOrderPopUp={handlOrderPopUp} />
              <Products />
              <TopProducts handlOrderPopUp={handlOrderPopUp} />
              <Banner />
              <Subscribe />
              <Testimonials />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
