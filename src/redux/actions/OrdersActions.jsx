export const addToCart = (ingrediants) => {
  return {
    type: "ADD_TO_CART",
    payload: ingrediants,
  };
};

export const removeFromCart = (orderId) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: orderId,
  };
};

export const updateItem = (orderId, ingrediants) => {
  return {
    type: "UPDATE_ITEM",
    payload: {orderId, ingrediants}
  }
}