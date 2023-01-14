import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import "../Style/ProductPage.css"
import { useNavigate } from 'react-router-dom'
import CartDetails from './CartDetails'

const CheckoutPage = () => {
const [total,setTotal]=useState(0)

const navigate=useNavigate()
  let cartData=useSelector((store)=>store.ecommerceData.cart)
console.log(cartData)
  useEffect(() => {
  let cartItem=cartData?.map((e)=>e.price)
  let total=cartItem?.reduce((acc,curr)=>{
         return acc+curr
        },0)
    setTotal(total)
  }, [cartData]);

  const handleIncrement=(price)=>{
        setTotal(total+price)
       }
 const handleDecrement=(price)=>{
  setTotal(total-price)
      }
 const paymentHandler=()=>{
alert("Payment is Successfull")
navigate("/order")
}

  return (
    <div>
      {cartData?.length && cartData?.map((item)=>{
        return (
      <CartDetails {...item} handleIncrement={handleIncrement} handleDecrement={handleDecrement} key={item.id}></CartDetails>
      )
      })
    }
    <div className='TotalBox'>
     <h1> Total Price: {total.toFixed(2)}</h1> 
  <button className='paymentBtn' disabled={total===0} onClick={paymentHandler}>Make The Payment</button>
    </div>
    </div>
  )
}

export default CheckoutPage