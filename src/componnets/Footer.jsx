import Delivery from '../img/delivery.png';

import { GrInstagram, GrFacebookOption, GrTwitter, GrYoutube } from 'react-icons/gr'

import { motion } from 'framer-motion';


const Footer = () => {
    return (
        <footer className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-50 p-3 px-4 md:p-6 md:px-16 bg-orange-100' id='footer'>
            <div className='w-full md:w-[300px] h-[50px] sm flex items-center gap-2 justify-center bg-orange-300 px-2 py-1 rounded-full'>
                <p className='text-base text-orange-600 font-semibold'>Use our fastest Dilivery</p>
                <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
                    <img src={Delivery} className='w-full h-full object-contain' alt="delivery" />
                </div> 
            
            </div>
            
            
            <p className='text-[1rem] md:text-[1.5rem] font-bold tracking-wide text-headingColor'>
                Our Address in<span className='text-orange-600 text-[1rem] md:text-[1.5rem]'>Your City: </span>
                Burshtyn, Big St. 35
            </p>
            <p className='flex flex-row items-center text-[1rem] md:text-[1.5rem] font-bold tracking-wide text-headingColor cursor-pointer mb-5'>Follow us:
                <motion.span whileTap={{scale:0.75}}><GrInstagram className='text-[2rem] text-orange-400 ml-2 mx-1 pt-1' /></motion.span>
                <motion.span whileTap={{scale:0.75}}><GrFacebookOption className='text-[2rem] text-orange-400 mx-1 pt-1 '/></motion.span>
                <motion.span whileTap={{scale:0.75}}><GrTwitter className='text-[2rem] text-orange-400 mx-1 pt-1 ' /></motion.span>
                <motion.span whileTap={{ scale: 0.75 }}><GrYoutube className='text-[2rem] text-orange-400 mx-1 pt-1 ' /></motion.span>
            </p>
        </footer>
    )
}

export default Footer
