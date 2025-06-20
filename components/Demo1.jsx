'use client'
import {easeInOut, motion} from 'motion/react'

const Demo1 = () => {
  return (
    <div className='[perspective::1000px] [transform-style:preserve-3d] min-h-screen w-full flex items-center justify-center bg-transparent'>
      <motion.button 
      whileHover={{
        rotateX: 25,
        rotateY: 10,
        boxShadow: '0px 20px 50px rgba(8,112,184,0.7)',
        y: -5
      }}
      whileTap={{
        y:0
      }}
      style={{
        translateZ: 100
      }}
      transition={{
        duration: 0.3,
        ease: easeInOut
      }}
      className='group relative bg-black px-12 py-4 text-neutral-400 text-2xl rounded-lg shadow'>
        <span className='group-hover:text-cyan-500 transition-colors duration-300'>Subscribe</span>
        <span className='absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto'></span>
        <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[4px] w-full mx-auto blur-sm'></span>
      </motion.button>
    </div>
  )
}

export default Demo1