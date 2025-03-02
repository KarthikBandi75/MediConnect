import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContent.jsx';

const Banner = () => {
    const navigate=useNavigate();
    const {token} =useContext(AppContext);
  return (

    
    <div className='flex px-6 my-20 rounded-lg bg-primary sm:px-10 md:px-14 lg:px-12 md:mx-10'>
     <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5 '>
        <div className='text-xl font-semibold text-white sm:text-2xl md:text-3xl lg:text-5xl '>
            <p>Book Appointment</p>
            <p className='mt-4'>With 100+ Trusted Doctors</p>
        </div>
        {!token && (
        <button onClick={() => { navigate('/login'); scrollTo(0, 0);}} className="px-8 py-3 mt-6 text-sm text-gray-600 transition-all bg-white rounded-full sm:text-base hover:scale-105">
            Create Account
        </button>
        )}

     </div>

     <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
        <img className='absolute bottom-0 right-0 w-full max-w-md' src={assets.appointment_img} alt="" />
     </div>
    </div>
  )
}

export default Banner
