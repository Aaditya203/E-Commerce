import React from 'react'
import { NavLink } from 'react-router-dom'
import { model2, model3, models, parcel, premium, rightArrow, secure } from '../assets/asset'

const Hero = () => {
  return (
    <div className='flex flex-col justify-between sm:flex-row md:flex-row '>
      <div>
        {/* Left part */}
        <div className='w-full px-25 py-30'>
          <p className='text-2xl text-[#087071] font-bebas'>NEW SEASON. NEW STYLE.</p>
          <p className='font-bebas text-8xl py-2'>WEAR YOUR
            <br />
            CONFIDENCE
          </p>
          <hr className='bg-[#087071] w-50 h-1.5'/>
          <div className='my-3 text-lg text-gray-600 font-semibold'>
            Timeless designs. Premium quality.
            <br />
            Made for the way you live.
          </div>

          <div className='flex flex-col sm:flex-row gap-4 pt-5'>
            <NavLink to={"/collection"}>
              <div className='flex items-center justify-center bg-[#087071] rounded-md px-9 py-3 whitespace-nowrap'>
              
                <div className=' text-white font-semibold'>SHOP NOW</div>
              
                <img src={rightArrow} alt="" className='w-6 ml-3'/>
              </div>
            </NavLink>
            <NavLink to={"/collection"}>
              <div className='flex items-center justify-center border-2 rounded-md px-4 py-2.5 border-[#087071] text-[#087071] font-semibold whitespace-nowrap'>
                EXPLORE COLLECTION
              </div>
            </NavLink>
        </div>

        <div className='flex  gap-8 pt-15'>
          <div className='flex  items-center gap-2'>
            <img src={premium} alt="" className='w-8 sm:w-10'/>
            <div className='flex flex-col '>
              <div className='font-semibold '>PREMIUM QUALITY</div>
              <div className='text-gray-700'>Finest Material</div>
            </div>
          </div>
           <div className='w-px  bg-gray-400 opacity-50'></div>
          <div className='flex  items-center gap-2'>
            <img src={parcel} alt="" className='w-8 sm:w-10'/>
            <div className='flex flex-col '>
              <div className='font-semibold '>EASY RETURNS</div>
              <div className='text-gray-700'>Hassle free</div>
            </div>
          </div>
          <div className='w-px  bg-gray-400 opacity-50'></div>
          <div className='flex  items-center gap-2'>
            <img src={secure} alt="" className='w-8 sm:w-10'/>
            <div className='flex flex-col '>
              <div className='font-semibold'>SECURE PAYMENT</div>
              <div className='text-gray-700'>100% protected</div>
            </div>
          </div>
        </div>

      </div>
    </div>
      
        {/* right part */}
        <img src={model2} alt="" className='w-220 sm:w-1/2 object-scale-down bg-gray-400' />
      
    </div>
  )
}

export default Hero