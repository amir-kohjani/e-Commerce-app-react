
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useDispatch } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import Footer from './components/footer/Footer';
import Header from './components/Header/Header';

import Home from './pages/HomePage/Home';
import ProductPage from './pages/ProductPage/ProductPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import TestPage from './pages/TestPage';
import OrderPage from './pages/OrderProduct/OrderPage';
import LoginOrRegisteryPage from './pages/LoginAndRegistery/LoginOrRegisteryPage';
import MobileSearch from './pages/MobileSearchPage/MobileSearch';
import WishListPage from './pages/WishList/WishListPage';

import { addUser } from './redux/user';
import { appService } from './appServises/appservices';
import { addItems } from './redux/cart';
import { useState } from 'react';
function App() {
  const [userId,setUserId] = useState(window.localStorage.getItem('_ID'))
  const dispatch = useDispatch();
    const setUserInRedux = (user) => {
      dispatch(addUser(user));
    }
    const setItemCartInRedux = (cart) => {
      dispatch(addItems(cart.itemList));
      
    } 
  
    const featchuser = (id) => {
  const getUserRequest = appService.getUserById(id)
  const getCartRequest = appService.getCartByUserId(id)
  Promise.all([getUserRequest,getCartRequest])
  .then((response) =>{

    const user = response[0].data._doc;
    const cart = response[1].data._doc;
  window.localStorage.setItem("_t",user.token);
  setUserInRedux(user);
  setItemCartInRedux(cart);
  })
  .catch((err)=>{
  console.log(err)
  })
    }
  
  useEffect(() => {
console.log(userId)
    if (userId) {
      featchuser(userId);
    }
    else {
      console.log(`user not exists`);

    }
  }, [])
  return (
    <>
      <Router>
        <Header />

        <Routes>

          <Route path='/' exact element={<Home />} />
          <Route path='/category/:categoryName' exact element={<CategoryPage />} />
          <Route path='/mobileSearch/' exact element={<MobileSearch />} />
          <Route path='/product/:productId' exact element={<ProductPage />} />
          <Route path='/order' exact element={<OrderPage />} />
          <Route path='/login' exact element={<LoginOrRegisteryPage />} />
          <Route path='/wishList' exact element={<WishListPage />} />

          <Route path='/test' exact element={<TestPage />} />
          {/* //this is for error 404 */}
        </Routes>

      </Router>
      {/* <Footer/> */}
    </>
  );

}

export default App;
