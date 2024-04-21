import React, { Suspense } from 'react'
import ChatUI from '../UI-Components/ChatUI'
import Loading from '../loading'

export default function page() {
  return (
    <div className='py-10 w-full h-full flex justify-center align-middle bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200' > 
      <Suspense fallback={<Loading />}>
          <ChatUI />
      </Suspense>
      
    </div>
  )
}
