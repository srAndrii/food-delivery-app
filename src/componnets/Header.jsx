import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from "react-redux";
import { setUser, userLogout, setCardShow } from '../actions';

import { motion } from 'framer-motion'
import { MdShoppingBasket, MdAdd, MdLogout } from 'react-icons/md'

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';

import { Link as ScrollTo} from "react-scroll";

import Logo from '../img/logo.png'
import Avatar from '../img/avatar.png'



const Header = () => {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const dispatch = useDispatch();


    const { user, cart } = useSelector(state => state);

    const [isMenu, setIsMenu] = useState(false);

    const login = async () => {
        if (!user) {
             // eslint-disable-next-line
            const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider);
            dispatch(setUser(providerData[0]))
            localStorage.setItem('user', JSON.stringify(providerData[0]))  
        } else {
            setIsMenu(!isMenu);
        }
        
    }

    const logout = () => {
        setIsMenu(false)
        localStorage.clear()
        dispatch(userLogout())
    }

    const showCart = () => {
        dispatch(setCardShow())
    }

    return (
        <header className='fixed z-50 w-screen  p-3 px-4 md:p-6 md:px-16 bg-primary'>
            {/*DESKTOP*/}
            <div className='hidden md:flex w-full h-full items-center justify-between'>
                <Link to={'/'} className='flex items-center gap-2'>
                    <motion.img
                        initial={{opacity: 0, x:200}}
                        animate={{opacity: 1, x:0}}
                        exit={{opacity: 0, x:200}}
                        src={Logo} className='w-8 object-cover' alt="logo" />
                    <p className='text-headingColor text-xl font-bold'> City</p>
                </Link>
                <div className='flex items-center gap-8'>
                    <motion.ul 
                        initial={{opacity: 0, x:200}}
                        animate={{opacity: 1, x:0}}
                        exit={{opacity: 0, x:200}}
                        className='flex items-center gap-8'>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
                            <ScrollTo
                                to='home'
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >
                                Home
                            </ScrollTo>
                            
                            </li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
                            <ScrollTo
                                to='menu'
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >
                                Menu
                            </ScrollTo>
                        </li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
                            <ScrollTo
                                to='footer'
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >
                                About Us
                            </ScrollTo>
                            
                        </li>

                    </motion.ul>
                    
                    <div className='relative flex items-center justify-center' onClick={showCart}>
                        <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
                        {cart && cart.length > 0 && (
                            <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cArtNumBg flex items-center justify-center'>
                            <p className='text-xs text-white font-semibold'> {cart.length} </p>
                        </div>
                        )}
                    </div>
                    <div className='relative'>
                        <motion.img whileTap={{ scale: 0.6}}
                        src={user ? user.photoURL : Avatar}
                        className='w-10  min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full'
                        alt="userprofile"
                        onClick={login}
                        />
                        {
                            isMenu && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.6 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{opacity:0, scale:0.6}}
                                    className='w-40 flex flex-col bg-gray-50 shadow-xl rounded-lg absolute top-12 right-0'>
                                    {
                                        user && user.email === '55akif5548@gmail.com' && (
                                            <Link to={'/createItem'}>
                                                <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base'
                                                onClick={()=> setIsMenu(false)}
                                                >New Item <MdAdd /></p>
                                            </Link>
                                        )  
                                    }
                                    <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base'
                                    onClick={logout}
                                    >Logout <MdLogout /></p>
                                </motion.div>
                            )
                        }
                    </div>
                </div>
            </div>


            {/*Mobile*/ }
            <div className='flex items-center justify-between md:hidden w-full h-full' >
                <div className='relative flex items-center justify-center'
                onClick={showCart}>
                    <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
                    {cart && cart.length > 0 && (
                            <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cArtNumBg flex items-center justify-center'>
                            <p className='text-xs text-white font-semibold'> {cart.length} </p>
                        </div>
                        )}
                </div>

                <Link to={'/'} className='flex items-center gap-2'>
                    <motion.img
                        initial={{opacity: 0, x:200}}
                        animate={{opacity: 1, x:0}}
                        exit={{opacity: 0, x:200}}
                        src={Logo} className='w-8 object-cover' alt="logo" />
                    <p className='text-headingColor text-xl font-bold'> City</p>
                </Link>
                
                 <div className='relative'>
                    <motion.img whileTap={{ scale: 0.6}}
                    src={user ? user.photoURL : Avatar}
                    className='w-10  min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full'
                    alt="userprofile"
                    onClick={login}
                    />
                    {
                        isMenu && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{opacity:0, scale:0.6}}
                                className='w-40 flex flex-col bg-gray-50 shadow-xl rounded-lg absolute top-12 right-0'>
                                {
                                    user && user.email === '55akif5548@gmail.com' && (
                                        <Link to={'/createItem'}>
                                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base'
                                            onClick={()=> setIsMenu(false)}
                                            >New Item <MdAdd/></p>
                                        </Link>
                                    )
                                }

                                <ul 
                                    className='flex flex-col'>
                                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2'
                                    onClick={()=> setIsMenu(false)}
                                    >
                                        <ScrollTo
                                        to='home'
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                        onClick={()=> setIsMenu(false)}
                                    >
                                            Home
                                        </ScrollTo>
                                    </li>
                                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2'
                                    onClick={()=> setIsMenu(false)}
                                    >
                                        <ScrollTo
                                        to='menu'
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                        onClick={()=> setIsMenu(false)}
                                    >
                                            Menu
                                        </ScrollTo>
                                    </li>
                                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2'
                                    onClick={()=> setIsMenu(false)}
                                    >
                                        <ScrollTo
                                        to='footer'
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                        onClick={()=> setIsMenu(false)}
                                    >
                                            About Us
                                        </ScrollTo>
                                        
                                    </li>
                                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2'
                                    onClick={()=> setIsMenu(false)}
                                    >Service</li>

                                </ul>

                                <p className='m-2 p-2 rounded-md shadow-md flex justify-center bg-gray-200 items-center gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base'
                                onClick={logout}
                                >Logout <MdLogout /></p>
                            </motion.div>
                        )
                    }
                </div>
            </div>
        </header>
    )
}

export default Header
