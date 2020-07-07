import React, { useEffect, useReducer } from 'react';

import CartContext from '../context/CartContext';
import { ACTIONS, shopReducer } from '../reducers/shopReducer';

const initialState = JSON.parse(sessionStorage.getItem("cart")) || [];

const CartState = props => {
  const [cartState, dispatch] = useReducer(shopReducer, initialState);

  useEffect(() => {
    initialState !== cartState && sessionStorage.setItem("cart", JSON.stringify(cartState));
  }, [cartState]);

  const addProductToCart = product => {
    setTimeout(() => {
      dispatch({ type: ACTIONS.ADD_PRODUCT, payload: product });
    }, 700);
  };

  const removeProductFromCart = product => {
    setTimeout(() => {
      dispatch({ type: ACTIONS.REMOVE_PRODUCT, payload: product });
    }, 700);
  };

  const addQuantityToItem = product => {
    setTimeout(() => {
      dispatch({ type: ACTIONS.ADD_QUANTITY, payload: product });
    }, 700);
  };

  const subtractQuantityFromItem = product => {
    setTimeout(() => {
      dispatch({ type: ACTIONS.SUBTRACT_QUANTITY, payload: product });
    }, 700);
  };

  const setCustomItemQuantity = (product, value) => {
    dispatch({ type: ACTIONS.CUSTOM_QUANTITY, payload: {product: product, value: value} });
  };

  return (
    <CartContext.Provider
      value={{
        cart: cartState,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        addQuantityToItem: addQuantityToItem,
        subtractQuantityFromItem: subtractQuantityFromItem,
        setCustomItemQuantity: setCustomItemQuantity
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;