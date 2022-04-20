import { fetchChart, fetchUser } from '../utils/fetchLocalStorage';

const userInfo = fetchUser()
const cartInfo=fetchChart()

export const initialState = {
    user: userInfo,
    foodItems: null,
    cartShow: false,
    cartItems:cartInfo,

}