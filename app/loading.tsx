import React from 'react';


export default function Loading() {
  return (
    <div className='flex flex-col justify-center items-center w-full h-[50vh]'>
      <h1 className='text-xl sm:text-3xl md:text-7xl font-bold italic'>Loading....</h1>
      <p className='text-lg sm:text-xl md:text-3xl'>Please wait...</p>
    </div>
  )
}
