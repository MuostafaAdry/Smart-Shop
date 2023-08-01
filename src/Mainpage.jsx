import React from "react";
import Home from "./Pages/Home";

import Products from "./Pages/Products"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nnav from "./AllComponents/Navbar/Nnav";
import Services from "./Pages/Services";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Footer from "./AllComponents/Footer/Footer";
 import Notfound from "./Pages/Notfound";
import SingleProductDetails from "./Pages/SingleProductDetails";
import { ToastContainer } from 'react-toastify';
import CreateAcount from "./AllComponents/CreateAcount/CreateAcount";
import SignIn from "./AllComponents/SignIn/SignIn";
import AddToCart from "./Pages/AddToCart";
import Likes from "./Pages/Likes";

const Mainpage = () => {
  return (
    <>
      <BrowserRouter>
      <Nnav
      logo='\images\logo.png'
      />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Products" element={<Products/>}/>
          <Route path="/Services" element={<Services/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/ContactUs" element={<ContactUs/>}/>
          <Route path="/SingleProductDetails" element={<SingleProductDetails/>}/>
          <Route path="/CreateAcount" element={<CreateAcount
          createAcountimg='\images\CreateAcountimg.png'
          />}
          />
          <Route path='/AddToCart' element={<AddToCart/>}/>
          <Route path="/Signin" element={<SignIn
         Signinimg='\images\Signinimg.png'
          />}/> 
          <Route path="/Likes" element={<Likes
          />}/>
        
          <Route path="*" element={<Notfound/>}/>
         
          
        </Routes>
        <Footer/>
      </BrowserRouter>
<ToastContainer/>
    
    </>
  );
};

export default Mainpage;
