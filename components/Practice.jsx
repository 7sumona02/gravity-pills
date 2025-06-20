'use client'

import { motion } from 'motion/react'

const Practice = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-neutral-50">
      <motion.div 
        className="max-w-lg h-[10rem] px-10 py-12 bg-white hover:bg-blue-700/10 transition-colors duration-300 border-2 border-dashed border-neutral-400 hover:border-blue-700 rounded-lg flex items-center justify-between gap-10 relative"
        whileHover="hover"
        initial="initial"
      >
        <div className="relative w-full h-full flex items-center ml-2">
          <motion.img 
            variants={{
              initial: { scale: 0.98 },
              hover: { scale: 1.03 }
            }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 15
            }}
            src='/b1.png' 
            alt='b1' 
            className="w-44 absolute z-50"
          />
          <motion.img 
            variants={{
              initial: { scale: 0.98, x: 20, rotate: 6 },
              hover: { scale: 1.03, x: 40, rotate: 12 }
            }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 15
            }} 
            src='/b2.png' 
            alt='b1' 
            className="w-44 absolute rotate-6 translate-y-3 translate-x-6"
          />
          <motion.img 
            variants={{
              initial: { scale: 0.98, x: -20, rotate: -6 },
              hover: { scale: 1.03, x: -40, rotate: -12 }
            }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 15
            }} 
            src='/b3.png' 
            alt='b1' 
            className="w-44 absolute -rotate-6 translate-y-4 -translate-x-6"
          />
        </div>
        <div className="font-medium text-2xl text-neutral-800 ml-4">Syncs to all your favorite tools</div>
      </motion.div>
    </div>
  )
}

export default Practice