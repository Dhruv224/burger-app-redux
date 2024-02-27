const orders = JSON.parse(localStorage.getItem("orders")) || [];

const OrdersReducer = (state = orders, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      action.payload.orderId = state[state.length - 1]?.orderId + 1 || 1;
      const newState = [...state, action.payload];
      localStorage.setItem("orders", JSON.stringify(newState));

      return newState;
    }

    case "REMOVE_FROM_CART": {
      const newState = state.filter(
        (order) => order.orderId !== action.payload
      );
      localStorage.setItem("orders", JSON.stringify(newState));

      return newState;
    }

    case "UPDATE_ITEM": {
      const newState = state.map((order) => {
        if(order.orderId === Number(action.payload.orderId)){
          return action.payload.ingrediants
        }

        return order;
      });
    console.log(newState);
      localStorage.setItem("orders", JSON.stringify(newState));

      return newState;
    }

    default: {
      return state;
    }
  }
};

export default OrdersReducer;
