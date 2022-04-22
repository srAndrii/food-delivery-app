import { useEffect, useRef, useState } from 'react';
import debounce from "lodash.debounce";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'


import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion';
import NotFound from '../img/NotFound.svg'
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions';


const RowContainer = ({ flag, data }) => {
    const dispatch = useDispatch();

    
    const addInCart = (item) => {
        dispatch(addToCart(item.id))
        console.log(item.id)
    }


    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const listRef = useRef(null);

    const checkForScrollPosition = () => {
        const { current } = listRef;
        if (current) {
            const { scrollLeft, scrollWidth, clientWidth } = current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft !== scrollWidth - clientWidth);
        }
  };

    const debounceCheckForScrollPosition = debounce(checkForScrollPosition, 200);

    const scrollContainerBy = (distance) => listRef.current?.scrollBy({ left: distance, behavior: "smooth" });

    useEffect(() => {
        const { current } = listRef;
        checkForScrollPosition();
        current?.addEventListener("scroll", debounceCheckForScrollPosition);

        return () => {
            current?.removeEventListener("scroll", debounceCheckForScrollPosition);
            debounceCheckForScrollPosition.cancel();
        };
         // eslint-disable-next-line
    }, []);

    
    return (
        
        <>
            {flag ? (<>
                {/* якщо flag = true  рендеримо разом з кнопками для горизонтального скролу*/}
                        <div className='hidden md:flex gap-3 items-center justify-end'>
                                <motion.button
                                    whileTap={{scale: 0.75}}
                                className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center'
                                disabled={!canScrollLeft}
                                    onClick={() => scrollContainerBy(-400)}
                                >
                                    <MdChevronLeft className='text-lg text-white' />
                                </motion.button>
                                <motion.button
                                    whileTap={{scale: 0.75}}
                                    className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center'
                                    disabled={!canScrollRight}
                                    onClick={() => scrollContainerBy(400)}
                                >
                                    <MdChevronRight className='text-lg text-white' />
                                </motion.button>
                        </div>
                    <div
                        ref={listRef}
                        className={`w-full flex items-center gap-3 my-4 scroll-smooth  ${flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap justify-center'}`} >
                        {data && data.length > 0 ? data.map(item => (
                            <div key={item.id} className="w-300 h-[200px] min-w-[300px] md:w-340 md:min-w-[340px] bg-cardOverlay rounded-lg p-2 my-7 backdrop-blur-lg hover:drop-shadow-lg" >
                                <div className="w-full flex items-center justify-between">
                                    <motion.div whileHover={{scale: 1.15}} className='w-44 h-44  -mt-8 drop-shadow-2xl'>
                                        <img  src={item?.imageUrl} alt=""
                                    className="w-full h-full min-w-40 min-h-40 object-contain" />
                                    </motion.div>
                                
                                
                                    <div className='w-full flex flex-col gap-4  items-end justify-end'>
                                        <motion.div whileTap={{ scale: 0.75 }} className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
                                        onClick={() => addInCart(item)}
                                        >
                                        <MdShoppingBasket className='text-white' />
                                    </motion.div>
                                    <p className='text-textColor font-semibold text-base md:text-lg text-right'>{ item.title }</p>
                                    <p className='mt-1 text-sm text-gray-500'> {item.calories} Calories</p>
                                    <div className='flex items-center gap-8'> 
                                        <p className='text-lg text-headingColor font-semibold'><span className='text-lg text-red-500'>$</span>{ item.price }</p>
                                    </div>
                                </div>    
                            </div>
                            
                        </div>
                        )) : <div className='w-full flex flex-col items-center justify-center'>
                                <img src={NotFound} className='h-340' alt="NotFound" />
                                <p className='text-xl text-headingColor font-semibold my-2'>Items Not Available</p>
                            </div>}
                        </div>
                    </>
                
            ) : (<>
                {/* якщо flag = false  рендеримо без кнопок для горизонтального скролу*/}
                    
                        <div
                            ref={listRef}
                            className={`w-full flex items-center gap-3 my-4 scroll-smooth  ${flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap justify-center'}`} >
                            {data && data.length > 0 ? data.map(item => (
                                <div key={item.id} className="w-300 h-[200px] min-w-[300px] md:w-340 md:min-w-[340px] bg-cardOverlay rounded-lg p-2 my-7 backdrop-blur-lg hover:drop-shadow-lg" >
                                    <div className="w-full flex items-center justify-between">
                                        <motion.div whileHover={{scale: 1.15}} className='w-44 h-44  -mt-8 drop-shadow-2xl'>
                                            <img  src={item?.imageUrl} alt=""
                                        className="w-full h-full min-w-40 min-h-40 object-contain" />
                                        </motion.div>
                                    
                                    
                                        <div className='w-full flex flex-col gap-4  items-end justify-end'>
                                            <motion.div whileTap={{ scale: 0.75 }} className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
                                            onClick={() => addInCart(item)}
                                            >
                                            <MdShoppingBasket className='text-white' />
                                        </motion.div>
                                        <p className='text-textColor font-semibold text-base md:text-lg text-right'>{ item.title }</p>
                                        <p className='mt-1 text-sm text-gray-500'> {item.calories} Calories</p>
                                        <div className='flex items-center gap-8'> 
                                            <p className='text-lg text-headingColor font-semibold'><span className='text-lg text-red-500'>$</span>{ item.price }</p>
                                        </div>
                                    </div>    
                                </div>
                            
                            </div>
                        )) : <div className='w-full flex flex-col items-center justify-center'>
                                <img src={NotFound} className='h-340' alt="NotFound" />
                                <p className='text-xl text-headingColor font-semibold my-2'>Items Not Available</p>
                            </div>}
                        </div>  
                    </>)}
        </>
    )
}

export default RowContainer;