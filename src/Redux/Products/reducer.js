import * as types from "./actionTypes"

const intialState={
    products:[],
    currrentProduct:{},
    cart:JSON.parse(localStorage.getItem('cartdata'))||[]
}

const ProductReducer = (state= intialState, action)=>{
    const {type, payload}= action;
    switch(type){
        case types.FETCH_DATA_REQUEST:
            return{
                ...state,
            }
    case types.FETCH_DATA_SUCCESS:
           return{
                ...state,
                products:payload,
        }
        case types.FETCH_DATA_FAILURE:
            return{
                ...state,
                error: payload,
        }

            case types.GET_SINGLE_PRODUCT_REQUEST:
            return{
                ...state,
              }
        case types.GET_SINGLE_PRODUCT_SUCCESS:
            return{
                ...state,
                currrentProduct:payload
              }
        case types.GET_SINGLE_PRODUCT_FAILURE:
            return{
                ...state,
                error: payload,
                }
       case types.ADD_PRODUCT_CART_REQUEST:
                return {
                    ...state,
                    }
        case types.ADD_PRODUCT_CART_SUCCESS:
              return {
                    ...state,
                    cart:action.payload||JSON.parse(localStorage.getItem("cartdata"))||[],
                }
               case types.ADD_PRODUCT_CART_FAILURE:
                return {
                     ...state,
                error: payload,
                }
                case "GET_CART_SUCCESS":
                    return {
                        ...state,
                        cart:action.payload||JSON.parse(localStorage.getItem("cartdata"))||[],
                      }
            default:{
                return state; 
            }
            
        }
        
        
}
export default ProductReducer