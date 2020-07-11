export const ACTIONS = {
  ADD_PRODUCT : 'ADD_PRODUCT',
  REMOVE_PRODUCT : 'REMOVE_PRODUCT',
  ADD_QUANTITY : 'ADD_QUANTITY',
  SUBTRACT_QUANTITY : 'SUBTRACT_QUANTITY',
  CUSTOM_QUANTITY : 'CUSTOM'
}

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

const removeProductFromCart = (product, prevState) => {
  const updatedCart = [...prevState];
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

const addQuantityToItem = (product, prevState) => {
  const updatedCart = [...prevState];
  const updatedItemIndex = updatedCart.findIndex(item => item.key === product.key);
  const updatedItem = {...updatedCart[updatedItemIndex]};
  updatedItem.quantity < 99 && updatedItem.quantity++;
  updatedCart[updatedItemIndex] = updatedItem;
  return updatedCart;
};

const subtractQuantityFromItem = (product, prevState) => {
  const updatedCart = [...prevState];
  const updatedItemIndex = updatedCart.findIndex(item => item.key === product.key);
  const updatedItem = {...updatedCart[updatedItemIndex]};
  updatedItem.quantity > 1 && updatedItem.quantity--;
  updatedCart[updatedItemIndex] = updatedItem;
  return updatedCart;
};

const setCustomItemQuantity = ({product, value}, prevState) => {
  const updatedCart = [...prevState];
  const updatedItemIndex = updatedCart.findIndex(item => item.key === product.key);
  const updatedItem = {...updatedCart[updatedItemIndex]};
  updatedItem.quantity = value;
  updatedCart[updatedItemIndex] = updatedItem;
  return updatedCart;
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_PRODUCT:
      return addProductToCart(action.payload, state);
    case ACTIONS.REMOVE_PRODUCT:
      return removeProductFromCart(action.payload, state);
    case ACTIONS.ADD_QUANTITY:
      return addQuantityToItem(action.payload, state);
    case ACTIONS.SUBTRACT_QUANTITY:
      return subtractQuantityFromItem(action.payload, state);
    case ACTIONS.CUSTOM_QUANTITY:
      return setCustomItemQuantity(action.payload, state);
    default:
      return state;
  }
};