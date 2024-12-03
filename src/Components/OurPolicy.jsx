import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row  justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div>
        <img className='w-12 m-auto mb-5' src={assets.exchange_icon} alt="" />
        <p className='font-semibold'> EASY EXCHANGE POLICY</p>
        <p className='text-gray-400'>
        We Offer Hassle free Exchange  Policy
        </p>
      </div>
      <div>
        <img className='w-12 m-auto mb-5' src={assets.quality_icon} alt="" />
        <p className='font-semibold'> 7 DAYS RETURN POLICY</p>
        <p className='text-gray-400'>
        We Provide 7 days free return Policy
        </p>
      </div>
      <div>
        <img className='w-12 m-auto mb-5' src={assets.support_img} alt="" />
        <p className='font-semibold'> BEST CUSTOMER SUPPORT</p>
        <p className='text-gray-400'>
        We Provide 24/7 customer support
        </p>
      </div>
    </div>
  )
}

export default OurPolicy
