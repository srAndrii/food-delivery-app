import { useDispatch } from 'react-redux'

import { minusQty, plusQty, removeFromCart } from '../actions';

import { BiMinus, BiPlus } from 'react-icons/bi'

import { motion } from 'framer-motion'

const CartItem = ({ item }) => {
    
    const dispatch = useDispatch();

    const minusItem = ()=>{
        if (item.qty <= 1) {
            dispatch(removeFromCart(item.id))
        } else {
            dispatch(minusQty(item))
        }
    }

    return (
        <div  className='w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2'>
            <img src={item?.imageUrl} className='w-20 h-20 max-w-[60px] rounded-full object-contain ' alt="" />
            {/*Name Section */}
            <div className='flex flex-col gap-2'>
                <p className='text-base text-gray-50'>{ item?.title}</p>
                <p className='text-sm block text-gray-300 font-semibold'>
                    $ {+item?.price * item?.qty}
                </p>
            </div>
            {/*Button sectiion*/}
            <div className='group flex items-center gap-2 ml-auto cursor-pointer'>

                <motion.div whileTap={{ scale: 0.75 }}
                    onClick={minusItem}

                >
                    <BiMinus className='text-gray-50' />
                </motion.div>

                <p className='w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center'>
                    {item.qty}
                </p>

                <motion.div whileTap={{ scale: 0.75 }}
                    onClick={() => dispatch(plusQty(item))}
                >
                    <BiPlus className='text-gray-50' />
                </motion.div>
            </div>
        </div>
    )
}

export default CartItem
