import HomeConteiner from './HomeConteiner'

import RowContainer from './RowContainer'

import MenuContainer from './MenuContainer'
import Cart from './Cart'

import { useSelector } from "react-redux";

const MainContainer = () => {
    const { foodItems, cartShow } = useSelector(state => state);

    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>
            <HomeConteiner />
            <section className='w-full my-6'>
                <div className='w-full flex items-center justify-between'>
                    <p
                        className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600  transition-all ease-in-out duration-100 '
                    > 
                        Our fresh & healthy fruits
                    </p>
                    
                </div>
                <RowContainer
                    flag={true}
                    data={foodItems?.filter(n => n.category === "fruits")} />
            </section>
            <MenuContainer />
            {cartShow && (
                <Cart/>
            )}
        </div>
    )
}

export default MainContainer
