import React, { useEffect } from 'react'
import { preLoaderAnim } from '../../animations'

const PreLoader = () => {
        useEffect(() => {
            preLoaderAnim()
        }, [])

  return (
    <div className='preloader h-screen w-[100%] bg-black text-white fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center overflow-hidden'>
        <div className='texts-container flex items-center justify-between gap-2 lg:gap-0 lg:justify-start text-2xl h-14 w-[80%] lg:w-[25%] font-extrabold overflow-hidden'>
            <span>Developer,</span>
            <span>Video-Editor,</span>
            <span>Vibes,</span>
        </div>
      
    </div>
  )
}

export default PreLoader
