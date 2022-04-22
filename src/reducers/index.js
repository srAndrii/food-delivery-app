export const initialState = {
    user: null,
    foodItems: null,
    cartShow: false,
    cart: []

}
const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user:action.payload,
            }
        
        case 'USER_LOGOUT':
            return {
                ...state,
                user: null,
            }
        
        case 'SET_FOOD_ITEMS':
            return {
                ...state,
                foodItems: action.payload,
            }
        
        case 'SET_CART_SHOW':
            return {
                ...state,
                cartShow: !state.cartShow
            }
        
        case 'ADD_TO_CART':
            const item = state?.foodItems?.find(
                (product) => product.id === action.payload.id);
            // Перевірка наявності item в корзині
            const inCart = state.cart.find((item) => item.id === action.payload.id ? true : false);

            return {
                ...state,
                // якщо item вже в корзині то додаєм всластивосі qty + 1(збільшеємо кількість)
                cart: inCart
                    ? state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item) : [...state.cart, { ...item, qty: 1 }],
            };
        
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
            
        case 'PLUS_QTY':
            return {
                ...state,
                cart: state.cart.map((item) =>item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item )
            };
        
        case 'MINUS_QTY':
            return {
                ...state,
                cart: state.cart.map((item) =>item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item )
            };
        
        case 'REMOVE_ALL_FROM_CART':
            return {
                ...state,
                cart: []
            };
        
        default:
            return state;
    }
}

export default reducer