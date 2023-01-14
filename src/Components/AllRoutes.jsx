import React from "react";
import { Route,Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ProductPage from "../Pages/ProductPage";
import CheckoutPage from "../Pages/CheckoutPage";
import OrderConformationPage from "../Pages/OrderConformationPage";
import AboutUsPage from "../Pages/AboutUsPage";

const AllRoutes = () => {
    return (

    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/products/:id' element={<ProductPage/>}/>
    <Route path='/cart' element={<CheckoutPage/>}/>
    <Route path='/order' element={<OrderConformationPage/>}/>
    <Route path='/about' element={<AboutUsPage/>}/>
    </Routes>
    )
  }
  
  export default AllRoutes
  