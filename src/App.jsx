import AOS from "aos"
import 'aos/dist/aos.css'
import { useEffect, useState } from "react"
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";
import TopProducts from "./Components/TopProducts/TopProducts";
import Subscribe from "./Components/Subscribe/Subscribe";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";
import AllProducts from "./Components/AllProducts/AllProducts";
function App() {
  const [orderPopup, setOrderPopup] = useState(true);

  const handleOrderPopup = ()=>{
    setOrderPopup(!orderPopup);
  } 
  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    });
    AOS.refresh();
  },[]);
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <NavBar handleOrderPopup={handleOrderPopup} />
        <Hero handleOrderPopup={handleOrderPopup}/>
        <Products/>
        <AllProducts/>
        <TopProducts handleOrderPopup={handleOrderPopup}/>
        <Banner/>
        <Subscribe/>
        <Testimonials/>
        <Footer/>
      </div>
    </>
  )
}

export default App
