import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import store from './Store'
import Header from './components/1_Header/Header'
import './components/Main_res.css'
import Footer from './components/Footer/Footer'
import Errorpage from './components/N_Pages/404_Error/Errorpage'
import Home from './components/0_Home/Home';
import Contact from './components/N_contact/Contact'
import Shop from './components/N_shop/Shop/Shop'
import Shop2 from './components/N_shop/Shop2/Shop2'
import Sign_in from './components/N_Pages/Sign_In/Sign_in';
import Shop_Location from './components/N_shop/ShopLocation/Shop_details';
import Wishlist from './components/N_shop/Wishlist/Wishlist';
import ProductTrack from './components/N_shop/ProductTrack/ProductTrack';
import About from './components/N_Pages/About/About';
import Firstline from './components/1_Header/Firstline/Firstline';
import FirstData from './components/Popular_contain/FirstData';
import Cart from './components/N_shop/Cart/Cart';
import ScrollToTop from './components/N_shop/Top_navigate/Top_navigate';
import Checkout from './components/N_Pages/Checkout/Checkout';
import Log_in from './components/N_Pages/Log_In/Log_in';
import Sign_inandLog_in from './components/N_Pages/Sign_inLog_in/signandLog';
import Shopofside from './components/N_shop/Shop/Shopofside/Shopofside';
import Cate from './components/1_Header/2_Catagories/Cate';
function App() {
  return (
    <>
      <Firstline />
      <div className='xl:w-full xl:container mx-auto'>
        <div>
          <Provider store={store}>
            <BrowserRouter>
              <ScrollToTop />
              <Header />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/error" element={<Errorpage />} ></Route>
                <Route path="/contact" element={<Contact />} ></Route>
                <Route path="/shop" element={<Shop />} ></Route>
                <Route path="/shop2" element={<Shop2 />} ></Route>
                <Route path="/signin" element={<Sign_in />} ></Route>
                <Route path="/login" element={<Log_in />} ></Route>
                <Route path="/Sign_inandLog_in" element={<Sign_inandLog_in />} ></Route>
                <Route path="/shop_details" element={<Shop_Location />} ></Route>
                <Route path="/wishlist" element={<Wishlist />} ></Route>
                <Route path="/ProductTrack" element={<ProductTrack />} ></Route>
                <Route path="/about" element={<About />} ></Route>
                <Route path="/product/:id" element={<FirstData />} ></Route>
                <Route path="/cart" element={<Cart />} ></Route>
                <Route path="/checkout" element={<Checkout />} ></Route>
                <Route path="/shopofside" element={<Shopofside />} ></Route>
                <Route path="/cate" element={<Cate />} ></Route>
              </Routes>
            </BrowserRouter>
          </Provider>
          <Footer />
        </div>
      </div>
    </>
  );
}
export default App;
