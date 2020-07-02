import React, { useEffect, useReducer } from 'react';

import ShopContext from './ShopContext';
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from './reducers';

const initialState = JSON.parse(sessionStorage.getItem("cart")) || [];

const GlobalState = props => {
  const [cartState, dispatch] = useReducer(shopReducer, initialState);

  useEffect(() => {
    initialState !== cartState && sessionStorage.setItem("cart", JSON.stringify(cartState));
  }, [cartState]);

  const addProductToCart = product => {
    setTimeout(() => {
      dispatch({ type: ADD_PRODUCT, product: product });
    }, 700);
  };

  const removeProductFromCart = product => {
    setTimeout(() => {
      dispatch({ type: REMOVE_PRODUCT, product: product });
    }, 700);
  };

  return (
    <ShopContext.Provider
      value={{
        cart: cartState,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;