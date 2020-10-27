import React from "react";

export default React.createContext({
  cart: [],
  addProductToCart: (payload) => {},
  removeProductFromCart: (payload) => {},
  addQuantityToItem: (payload) => {},
  subtractQuantityFromItem: (payload) => {},
  setCustomItemQuantity: (payload) => {},
});
