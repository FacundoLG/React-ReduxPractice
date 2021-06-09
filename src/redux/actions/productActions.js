import {ActionsTypes} from '../constants/actions-types'
export const setProducts = poducts =>{
    return {
        type:ActionsTypes.SET_PRODUCTS,
        payload: poducts
    }
}
export const selectedProducts = poducts =>{
    return {
        type:ActionsTypes.SELECTED_PRODUCTS,
        payload: poducts
    }
}
export const remove = poducts =>{
    return {
        type:ActionsTypes.REMOVE_SELECTED_PRODUCTS,
        payload: poducts
    }
}