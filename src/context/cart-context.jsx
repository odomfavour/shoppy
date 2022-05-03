import React, {createContext, useReducer} from "react";
import cartReducer from "./cart-reducer";

export const CartContext = createContext();

const initialState = {cartItems: [], itemCount: 1, total: 0 }

const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer.initialState)
    const addProduct = (product) => dispatch({type: 'ADD_ITEM', payload: product})

    const contextValues = {
        ...state,
        addProduct,
    }
    return (
        <CartContext.Provider value={{contextValues}}>
            {
                children
            }
        </CartContext.Provider>
    );
}

export default CartContextProvider;