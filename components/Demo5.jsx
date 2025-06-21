'use client'
import {color, easeInOut, motion} from 'motion/react'

const Demo5 = () => {
    const variants = {
        start: {rotate: 180},
        hoverState: {
            borderRadius: 100,
            backgroundColor: 'gray'
        },
        tapState: {
            backgroundColor: 'yellow'
        }
    }
  return (
    <div
    className='min-h-screen w-full flex items-center justify-center'>
        <motion.div
        variants={variants}
        animate='start'
        whileHover='hoverState'
        whileTap='tapState'
        transition={{
            duration: 0.5,
            ease: easeInOut,
            type: 'spring'
        }}
        className='size-40 bg-red-400'>
        </motion.div>
    </div>
  )
}

export default Demo5