import React from 'react'
import { useSelector } from 'react-redux'
import "../Style/ProductPage.css"
import Moment from 'moment';

const OrderConformationPage = () => {
const formatDate = Moment().format('DD-MM-YYYY')
let cartData=useSelector((store=>store.ecommerceData.cart))
return (
    <div className='orderPage'>
      <div className='orderPage1' >
      {cartData.length && cartData.map((item)=>{
    return (
          <div className='CartBox' key={item.id}>
          <div className='CartImage'>
        <img src={item.image} alt="" className='orderImg' />
        </div>
        <div className='decBox'>
        <p>{item.title}</p>
        <h3>{item.price}</h3>
        </div>
        </div>
        )
      })
    }
    </div>
      <div className='orderPage1'>
       <h1> ORDER IS CONFIRMED    </h1>
       <p>Trial Order: 458954</p>
       <p>Delivery by: {formatDate}</p>
      </div>
    </div>
  )
}



export default OrderConformationPage