import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeProductCart } from '../Redux/Products/action'

const CartDetails = ({id,image,price,title,handleIncrement,handleDecrement}) => {
const [count,setCount]=useState(1)
const [priceInc,setPriceInc]=useState(0)
const [priceDec,setPriceDec]=useState(0)
const dispatch= useDispatch()
const hangleAdd=()=>{
setCount(count+1)
setPriceInc(priceInc+1)
    }
useEffect(()=>{
handleIncrement(price)
},[priceInc])

const hangleSub=()=>{
if(count===1){
  alert(" reached minimum limit")
}
 setCount(count-1)
setPriceDec(priceDec-1)
}
useEffect(()=>{
    handleDecrement(price)
},[priceDec])
const handleRemovefromCart=(id)=>{
    dispatch(removeProductCart(id))
}
  return (
    <div>
        <div className='CartBox' key={id}>
        <div className='CartImage'>
        <img src={image} alt="abc"/>
        </div>
        <div className='decBox'>
        <p>{title}</p>
        <h3>{price}</h3>
        </div>
        <div className='lastBox'>
        <div className="counter">
        <button onClick={()=>hangleAdd()} disabled={count===5}>+</button>
        <div>{count}</div>
        <button onClick={()=>hangleSub()} disabled={count===1}>-</button>
        </div>
        <button onClick={()=>handleRemovefromCart(id)} className='removeBtn'>Remove</button>
        </div>
        </div>  
    </div>
  )
}

export default CartDetails