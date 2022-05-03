import React, { useState, useContext, useReducer, useEffect } from 'react';

import reducer from './reducer'
// import { goods } from './data';
const url = 'https://fakestoreapi.com/products'
// const url = 'https://course-api.com/react-useReducer-cart-project'

const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
  products: []
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [categories, setCategories] = useState([])

  const getCategories = async () => {
    const response = await fetch(
      'https://fakestoreapi.com/products/categories'
    );
    const categories = await response.json();
    setCategories(categories);
  };

  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART',
    })
  }

  const remove = (id) => {
    dispatch({
      type: 'REMOVE', payload: id
    })
  }

  const increase = (id) => {
    dispatch({
      type: 'INCREASE', payload: id
    })
  }

  const decrease = (id) => {
    dispatch({
      type: 'DECREASE', payload: id
    })
  }

  const addProduct = (id) => {
    dispatch({ type: 'ADD_PRODUCT', payload: id });
  };

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    const response = await fetch(url)
    const products = await response.json()
    // console.log(cart)
    dispatch({ type: 'DISPLAY_ITEMS', payload: products })
  }

  useEffect(() => {
    fetchData();
    getCategories();
  }, [])

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' })
  }, [state.cart])

  return (
    <AppContext.Provider value={{ ...state, clearCart, remove, increase, decrease, categories, addProduct }}>
      {children}
    </AppContext.Provider>

  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}


export { AppContext, AppProvider }