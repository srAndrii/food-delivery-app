export const setUser = (user) => {
  return {
      type: 'SET_USER',
      payload: user
  }
}

export const userLogout = () => {
    return {
        type: 'USER_LOGOUT'
    }
}

export const setFoodItems = (data) => {
    return {
        type: 'SET_FOOD_ITEMS',
        payload: data
    }
}

export const setCardShow = () => {
    return {
        type: 'SET_CART_SHOW'
    }
}

export const addToCart = (id) => {
  return {
    type: 'ADD_TO_CART',
    payload: {
      id: id,
    },
  };
};

export const removeFromCart = (id) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: {
      id: id,
    },
  };
};

export const plusQty = (item) => {
  return {
    type:  'PLUS_QTY',
    payload: item
  };
};

export const minusQty = (item) => {
  return {
    type: 'MINUS_QTY',
    payload: item
  };
};

export const removeAllFromCart = () => {
  return {
    type: 'REMOVE_ALL_FROM_CART'
  };
};