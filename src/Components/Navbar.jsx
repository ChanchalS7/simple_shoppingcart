import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import "../Style/Navbar.css"
const Navbar = () => {
  let cartData=useSelector((store=>store.ecommerceData.cart))

 return (
    <>
    <nav >
    <NavLink className="link" to="/">Home</NavLink>
    <NavLink className="link" to="/about"> About Us</NavLink>
    <NavLink className="link" to="/cart"> Cart
    :{cartData.length ? cartData.length:0}</NavLink>
    
    </nav>
    </>
  )
}

export default Navbar