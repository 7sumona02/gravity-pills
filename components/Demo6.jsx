'use client'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    close: {
        opacity: 0,
        y: 20,
        transition: { duration: 0.3 }
    }
}
const Demo6 = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <motion.div 
    initial={false}
    animate={isOpen ? 'open' : 'close'}
    className='min-h-screen w-full bg-neutral-50 flex flex-col items-center justify-center'>
        <motion.div 
        whileTap={{
            scale: 0.95
        }}
        onClick={() => setIsOpen(!isOpen)}
        className='cursor-pointer w-[14rem] flex items-center justify-between bg-white font-medium py-2 px-4 rounded-lg text-neutral-800 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]'>
            <div className='text-lg'>Menu</div>
            <motion.div 
            variants={{
                open : {rotate: -180},
                close: {rotate :0}
            }}
            transition={{
                duration: 0.3,
                ease: 'easeInOut'
            }}
            ><ChevronDown className='w-5' /></motion.div>
        </motion.div>

        {/* nav links */}
        <motion.ul
        variants={{
            open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.7,
                    delayChildren: 0.3,
                    staggerChildren: 0.05
                }
            },
            close: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.3
                }
            }
        }}  
        className='text-neutral-600 mt-4 w-[14rem] space-y-2 h-fit bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] px-4 py-2 rounded-lg'>
            <motion.li variants={itemVariants} whileHover={{ scale: 1.02, transition: { duration: 0.2, ease: 'easeInOut' }}}>Home</motion.li>
            <motion.li variants={itemVariants} whileHover={{ scale: 1.02, transition: { duration: 0.2, ease: 'easeInOut' }}}>About</motion.li>
            <motion.li variants={itemVariants} whileHover={{ scale: 1.02, transition: { duration: 0.2, ease: 'easeInOut' }}}>Contact</motion.li>
            <motion.li variants={itemVariants} whileHover={{ scale: 1.02, transition: { duration: 0.2, ease: 'easeInOut' }}}>Career</motion.li>
        </motion.ul>
    </motion.div>
  )
}

export default Demo6