import React from 'react'

const Title = () => {
  return (
    <div className='flex flex-col items-center mt-8'>
        <div className='flex items-center gap-8'>
            <hr className='bg-[#087071] w-75 h-1.5'/>
        <div className='font-bebas text-[#087071] text-4xl'>NEW ARRIVALS</div>
        <hr className='bg-[#087071] w-75 h-1.5'/>
        </div>
        <div className='font-bebas text-8xl pt-4'>LATEST COLLECTION</div>
        
        <div className='text-gray-600 font-semibold'>Explore our newest pieces, designed for comfort, crafted for style.</div>

    </div>
  )
}

export default Title