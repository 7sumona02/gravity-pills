'use client'
import { cn } from '@/lib/utils'
import { MessageCircle, PlusIcon, X } from 'lucide-react'
import {AnimatePresence, easeInOut, motion} from 'motion/react'
import React, { useState } from 'react'

const Demo2 = () => {
  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-neutral-50'>
        <Card />
    </div>
  )
}

const Card = () => {
    const [open, setOpen] = useState(true)
 return(
    <>
    <AnimatePresence>
        {open && (
            <motion.div 
            initial={{
                opacity: 0,
                scale: 0.98,
                filter: 'blur(10px)'
            }}
            animate={{
                opacity: 1,
                scale: 1,
                filter: 'blur(0px)'
            }}
            exit={{
                opacity: 0,
                scale: 0.98,
                filter: 'blur(10px)'
            }}
            transition={{
                duration: 0.3,
                ease: easeInOut
            }}
            className={cn(
                'w-80 h-[30rem] rounded-xl', 
                'shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]',
                'p-6 flex flex-col font-sans'
            )}>
                <h1 className='font-bold text-black'>Clerk Card</h1>
                <p className='text-xs text-neutral-400 font-medium pt-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, magni!</p>
                <div className='pt-4 mx-auto'>
                    <button onClick={() => setOpen(false)} className='text-xs py-1 px-4 rounded text-black max-w-20 cursor-pointer flex items-center shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]'>
                        {/* <img 
                        src='/clerk.svg'
                        alt='Clerk Logo'
                        className='w-40'
                        /> */}
                        <span className='font-medium text-xs'>Clerk</span>
                        <X className='w-4 text-neutral-400 ml-1' />
                    </button>
                </div>
                <div className='bg-neutral-100 flex-1 mt-4 rounded-lg border border-dashed border-neutral-200 relative'>

                    <motion.div 
                    initial={{
                        opacity: 0,
                        scale: 0.98,
                        filter: 'blur(10px)'
                    }}
                    whileHover={{
                        opacity: 1,
                        scale: 1.05,
                        filter: 'blur(0px)'
                    }}
                    transition={{
                        // duration: 0.3,
                        // ease: easeInOut
                        type: 'spring',
                        stiffness: 100,
                        damping: 15
                    }}
                    className='absolute inset-0 h-full w-full rounded-lg bg-white divide-y divide-neutral-200 border border-neutral-200'>
                        <div className='p-2.5 flex items-center gap-3'>
                            <div>
                                <button className='text-xs py-2 px-3 rounded text-black cursor-pointer flex items-center shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]'>
                                    <MessageCircle className='w-5 text-neutral-black' />
                                </button>
                            </div>
                            <div>
                                <div className='font-bold text-black text-xs'>Clerk UI</div>
                                <div className='text-xs text-neutral-400 font-medium'>Minimal component library</div>
                            </div>
                        </div>
                        <div className='p-2.5 flex items-center gap-3'>
                            <div>
                                <button className='text-xs py-2 px-3 rounded text-black cursor-pointer flex items-center shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]'>
                                    <MessageCircle className='w-5 text-neutral-black' />
                                </button>
                            </div>
                            <div>
                                <div className='font-bold text-black text-xs'>Clerk UI</div>
                                <div className='text-xs text-neutral-400 font-medium'>Minimal component library</div>
                            </div>
                        </div>
                        <div className='p-2.5 flex items-center gap-3'>
                            <div>
                                <button className='text-xs py-2 px-3 rounded text-black cursor-pointer flex items-center shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]'>
                                    <MessageCircle className='w-5 text-neutral-black' />
                                </button>
                            </div>
                            <div>
                                <div className='font-bold text-black text-xs'>Clerk UI</div>
                                <div className='text-xs text-neutral-400 font-medium'>Minimal component library</div>
                            </div>
                        </div>
                        <div className='p-2.5 flex items-center gap-3'>
                            <div>
                                <button className='text-xs py-2 px-3 rounded text-black cursor-pointer flex items-center shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]'>
                                    <MessageCircle className='w-5 text-neutral-black' />
                                </button>
                            </div>
                            <div>
                                <div className='font-bold text-black text-xs'>Clerk UI</div>
                                <div className='text-xs text-neutral-400 font-medium'>Minimal component library</div>
                            </div>
                        </div>
                        <div className='p-4 flex items-center justify-center gap-3'>
                            <div>
                                <button className='text-xs p-2 rounded-full text-black cursor-pointer flex items-center shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]'>
                                    <PlusIcon className='size-3 text-neutral-black' />
                                </button>
                            </div>
                            <div>
                                <div className='text-xs text-neutral-400 font-medium'>Create project</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        )}
    </AnimatePresence>
    </>
 )
}

export default Demo2