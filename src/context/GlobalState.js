import React, { useEffect, useReducer } from 'react';

import ShopContext from './ShopContext';
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT, ADD_QUANTITY, SUBTRACT_QUANTITY, CUSTOM_QUANTITY} from './reducers';

const initialState = JSON.parse(sessionStorage.getItem("cart")) || [];

const GlobalState = props => {
  const [cartState, dispatch] = useReducer(shopReducer, initialState);

  useEffect(() => {
    initialState !== cartState && sessionStorage.setItem("cart", JSON.stringify(cartState));
  }, [cartState]);

  const addProductToCart = product => {
    setTimeout(() => {
      dispatch({ type: ADD_PRODUCT, payload: product });
    }, 700);
  };

  const removeProductFromCart = product => {
    setTimeout(() => {
      dispatch({ type: REMOVE_PRODUCT, payload: product });
    }, 700);
  };

  const addQuantityToItem = product => {
    setTimeout(() => {
      dispatch({ type: ADD_QUANTITY, payload: product });
    }, 700);
  };

  const subtractQuantityFromItem = product => {
    setTimeout(() => {
      dispatch({ type: SUBTRACT_QUANTITY, payload: product });
    }, 700);
  };

  const setCustomItemQuantity = (product, value) => {
    dispatch({ type: CUSTOM_QUANTITY, payload: {product: product, value: value} });
  };

  return (
    <ShopContext.Provider
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
    </ShopContext.Provider>
  );
};

export default GlobalState;