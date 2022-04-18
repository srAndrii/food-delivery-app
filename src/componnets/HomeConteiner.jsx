import Delivery from '../img/delivery.png';
import HeroBg from '../img/heroBg.png';
import { heroData } from '../utils/data';





const HomeConteiner = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home'>
            <div className='py-2 flex-1 flex flex-col items-start justify-center  gap-6'>
                <div className='flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full'>
                    <p className='text-base text-orange-500 font-semibold'>Bike Delivery</p>
                    <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
                        <img src={Delivery} className='w-full h-full object-contain' alt="delivery" />
                    </div>
                </div>
                <p className='text-[2rem] lg:text-[3rem] font-bold tracking-wide text-headingColor'>
                    The Fastest Delivery in <span className='text-orange-600 text-[2.5rem] lg:text-[3.5rem]'>Your City</span>
                </p>
                <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla nobis blanditiis aperiam perferendis laborum repudiandae, voluptates nisi magnam delectus, eveniet ipsum fugiat commodi in beatae expedita quasi quas? Modi, ex. </p>
                <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500 w-full mt-2 md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'>Order Now</button>
            </div>
            <div className='p-5 flex-1 items-center relative'>
                <img src={HeroBg} className='ml-auto h-420 w-full lg:w-auto lg:h-650' alt="hero-bg" />

                <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 lg:py-10 py-4 gap-4 flex-wrap'>
                    {heroData && heroData.map(n => (
                        <div key={n.id} className=' lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'>
                        <img src={n.imgSrc} className='w-[100px] lg:w-40 -mt-10 lg:-mt-20' alt="Icecream" />

                        <p className='text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4'>
                            {n.name}
                        </p>

                        <p className='text-[12px] lg:text-md text-lightTextGrey font-semibold my-1 lg:my-3'>
                            {n.descr}

                        </p>

                        <p className='text-sm font-semibold text-headingColor'><span className='text-sm text-red-600'>
                            $</span>{n.price}
                        </p>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    ) 
}

export default HomeConteiner
