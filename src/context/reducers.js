export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const ADD_QUANTITY = 'ADD_QUANTITY';
export const SUBTRACT_QUANTITY = 'SUBTRACT_QUANTITY';
export const CUSTOM_QUANTITY = 'CUSTOM_QUANTITY';

const addProductToCart = (product, state) => {
  const updatedCart = [...state];
  const updatedItemIndex = updatedCart.findIndex(item => item.key === product.key);

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
  } else {
    const updatedItem = {...updatedCart[updatedItemIndex]};
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return updatedCart;
};

const removeProductFromCart = (product, state) => {
  const updatedCart = [...state];
  const updatedItemIndex = updatedCart.findIndex(item => item.key === product.key);
  const updatedItem = {...updatedCart[updatedItemIndex]};
  updatedItem.quantity--;

  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return updatedCart;
};

const addQuantityToItem = (product, state) => {
  const updatedCart = [...state];
  const updatedItemIndex = updatedCart.findIndex(item => item.key === product.key);
  const updatedItem = {...updatedCart[updatedItemIndex]};
  updatedItem.quantity < 99 && updatedItem.quantity++;
  updatedCart[updatedItemIndex] = updatedItem;
  return updatedCart;
};

const subtractQuantityFromItem = (product, state) => {
  const updatedCart = [...state];
  const updatedItemIndex = updatedCart.findIndex(item => item.key === product.key);
  const updatedItem = {...updatedCart[updatedItemIndex]};
  updatedItem.quantity > 1 && updatedItem.quantity--;
  updatedCart[updatedItemIndex] = updatedItem;
  return updatedCart;
};

const setCustomItemQuantity = ({product, value}, state) => {
  const updatedCart = [...state];
  const updatedItemIndex = updatedCart.findIndex(item => item.key === product.key);
  const updatedItem = {...updatedCart[updatedItemIndex]};
  updatedItem.quantity = value;
  updatedCart[updatedItemIndex] = updatedItem;
  return updatedCart;
};

export const shopReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.payload, state);
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.payload, state);
    case ADD_QUANTITY:
      return addQuantityToItem(action.payload, state);
    case SUBTRACT_QUANTITY:
      return subtractQuantityFromItem(action.payload, state);
    case CUSTOM_QUANTITY:
      return setCustomItemQuantity(action.payload, state);
    default:
      return state;
  }
};