
import * as types from "./actionTypes"
import Axios  from "axios"

const fetchDataRequest=(payload) =>{
    return {
        type: types.FETCH_DATA_REQUEST,
        payload,
    }
}
const fetchDataSuccess =(payload) =>{
    return {
        type: types.FETCH_DATA_SUCCESS,
        payload,
}

}
const fetchDataFailure =(payload) =>{
    return {
        type:types.FETCH_DATA_FAILURE,
        payload,
}
}
const fetchData =(payload)=>{
return(dispatch)=>{
        dispatch(fetchDataRequest());
        Axios.get('/products',{
            params:{
                ...payload,
            },
        }).then(res=>dispatch(fetchDataSuccess(res.data)))
.catch(e=>dispatch(fetchDataFailure(e.data)));
    }
}

/////////////////single Prodduct///////////////////
const getSingleProductSuccess=(payload)=>{
    return {
        type: types.GET_SINGLE_PRODUCT_SUCCESS,
        payload
      }
}
const getSingleProductRequest=(payload)=>{
    return {
        type: types.GET_SINGLE_PRODUCT_REQUEST,
        payload
      }
    }

    const getSingleProductFailure=(payload)=>{
        return {
            type: types.GET_SINGLE_PRODUCT_FAILURE ,
            payload
         }
     }

const getSingleProduct=(id)=>(dispatch)=>{
    dispatch(getSingleProductRequest())
    Axios.get(`/products/${id}`).then(r=>dispatch(getSingleProductSuccess(r.data))).catch(e=>dispatch(getSingleProductFailure(e.data)))
}

// ///////////Add to cart/////////////////
const addProductCartSuccess=(payload)=>{
        return {
            type: types.ADD_PRODUCT_CART_SUCCESS,
            payload
          }
        }
    
    
const addProductCart=(product)=>(dispatch)=> {
let addToCart=JSON.parse(localStorage.getItem('cartdata'))||[]
localStorage.setItem("cartdata",JSON.stringify([...addToCart,product]))
dispatch(addProductCartSuccess({
    payload:addToCart,
}))
 dispatch(getCartItem())
 } 

const getCartItem=()=>(dispatch)=>{
     let data=JSON.parse(localStorage.getItem('cartdata'))||[]
    console.log("getting cart data",data)
    dispatch({
        type:"GET_CART_SUCCESS",
        payload:data
    })
}
////////////////////Remove Item To The Cart//////////

export const removeProductCart=(id)=>(dispatch)=>{
    console.log(id)
    let data=JSON.parse(localStorage.getItem('cartdata'))||[]
    let newdata=data.filter((el)=>{
        if(el.id!==id){
            return el
        }
    })
    localStorage.setItem("cartdata",JSON.stringify(newdata))
    dispatch(getCartItem())
} 


export {fetchData,getSingleProduct,addProductCart,getCartItem}