import { ActionsTypes } from "../constants/actions-types";

const initialState ={
    products:[
        {
            id:1,
            title:"Dipesh",
            category:"programer"
        }
    ]
}

export const productReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ActionsTypes.SET_PRODUCTS:
            return state
    
        default:
            return state
    }
} 
