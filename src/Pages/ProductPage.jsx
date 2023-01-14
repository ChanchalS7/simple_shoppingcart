import React, { useEffect } from 'react'
import "../Style/ProductPage.css"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addProductCart, getSingleProduct } from '../Redux/Products/action'
const ProductPage = () => {
const {id}=useParams()
const dispatch=useDispatch()
const currrentProduct=useSelector(store=>store.ecommerceData.currrentProduct)
useEffect(()=>{
  if(id){
    dispatch(getSingleProduct(id))
  }
},[dispatch,id])
console.log(currrentProduct)

const addToCartHandler=()=>{
  currrentProduct && dispatch(addProductCart(currrentProduct))
  alert("Go to the cart")
}
return (
    <div>
      <div className='product_Box'>
        <div className='pro_leftBox' >
          <img src={currrentProduct.image} alt="" />
        </div>
        <div className='pro_rightBox'>
        <h4>{currrentProduct.category}</h4>
        <h3>{currrentProduct.title}</h3>
        <h2>Price:{currrentProduct.price}</h2>
        <p>{currrentProduct.description}</p>
        <button onClick={addToCartHandler}>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductPage