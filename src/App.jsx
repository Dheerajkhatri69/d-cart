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
import NewCollection from "./Components/NewCollection/NewCollection";
import Shopcategory from "./Components/Shopcategory/Shopcategory";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Product from "./Components/Product/Product";
import Cart from "./Components/Cart/Cart";
import { CartProvider } from "react-use-cart";
function App() {
  const [orderPopup, setOrderPopup] = useState(true);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  }
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    });
    AOS.refresh();
  }, []);
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <CartProvider>
        <BrowserRouter>
          <ScrollToTop />
          <NavBar handleOrderPopup={handleOrderPopup} />
          <Routes>
            <Route path='/d-cart/' element={
              <>
                <Hero handleOrderPopup={handleOrderPopup} />
                <Products />
                <NewCollection />
                <TopProducts handleOrderPopup={handleOrderPopup} />
                <Banner />
                <Subscribe />
                <Testimonials />
              </>
            } />
            <Route path='/d-cart/men' element={<Shopcategory category="men" />} />
            <Route path='/d-cart/women' element={<Shopcategory category="women" />} />
            <Route path='/d-cart/kid' element={<Shopcategory category="kid" />} />
            <Route path='/d-cart/top_rated' element={<Shopcategory category="banner" />} />

            <Route path='/d-cart/product' element={<Product />}>
              <Route path=':productId' element={<Product />} />
            </Route>
            <Route path='/d-cart/cart' element={<Cart />} />
            {/* <Route path='/d-cart/login' element={<Loginsignup/>}/> */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App
