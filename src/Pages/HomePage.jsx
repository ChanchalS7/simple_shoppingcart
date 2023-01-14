import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../Redux/Products/action'
import "../Style/Homepage.css"
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const [categoryValue,setCategoryValue]=useState("")
    
 const dispatch=useDispatch()
const products=useSelector((state)=>state.ecommerceData.products)
const navigate=useNavigate()
const [filteredData,setFilteredData]=useState([])
useEffect(()=>{
if(products?.length===0){
   dispatch(fetchData())
}
}, [])

// console.log(products)
// 
const categoryHandler=(e)=>{
setCategoryValue(e.target.value)
 
 let temp=products?.filter((el)=>{
  if(el.category===e.target.value){
    return el
  }
 })
 console.log(temp)
 setFilteredData(temp)
}
const ResetFilterData=()=>{
  filteredData([])
}
const ProductDetail=(id)=>{
  navigate(`/products/${id}`)
}
console.log(categoryValue)
  return (
    <>
    <div className='HomeContainer'>
    <div className='leftBox'>
  <div className='radioBox'>
  <form onChange={(e)=>categoryHandler(e)}
>
<div>
<input type="radio" id="electronics" name="fav_language" value="electronics" />
<label>Electronics</label>
</div>


<div>
<input type="radio" id="men" name="fav_language" value="men's clothing" />
<label>Men's clothing</label>
</div>

<div>
<input type="radio" id="jewelery" name="fav_language" value="jewelery" />
<label>Jewelery</label>
</div>
<div>
<input type="radio" id="women" name="fav_language" value="women's clothing" />
<label>Women's clothing</label>
</div>
<div ><button className='resetButton' onClick={ResetFilterData}> RESET</button>
 </div>
</form>
 </div>
  </div>
    <div className='rightBox'>
    {filteredData.length>0?filteredData?.map(product=>{
        return (
    <div className='ProductCard' key={product.id} onClick={()=>ProductDetail(product.id)}>

    <img src={product.image} alt="abc" />
    <h3>{product.title} </h3>
    <div>
    <span>Price:{product.price}</span>
    <span>Rating:{product.rating.rate}</span>
    </div>
       </div>
) 
}):products.map(product=>{
  return (
<div className='ProductCard' key={product.id} onClick={()=>ProductDetail(product.id)}>

<img src={product.image} alt="abc" />
<h3>{product.title} </h3>
<div>
<span>Price:{product.price}</span>
<span>Rating:{product.rating.rate}</span>
</div>
 </div>
) 
})}
</div>
</div>
    </>
  )
}

export default HomePage
