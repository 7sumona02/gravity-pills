'use client'

import { AlignJustify, ChartBarBig } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { useState } from "react"
import { easeInOut, motion } from "framer-motion"

const Demo4 = () => {
  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-neutral-50'>
      <Card />
    </div>
  )
}

const Card = () => {
  const projects = [
    { name: "Product Design", initial: 33, hover: 60 },
    { name: "Promo Video", initial: 50, hover: 85 },
    { name: "Launch Campaign", initial: 62, hover: 70 },
    { name: "Photoshoot", initial: 48, hover: 50 },
  ]

  const [isCardHovered, setIsCardHovered] = useState(false)

  return (
    <motion.div 
      className="max-w-lg h-[24rem] bg-white text-black rounded-2xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] p-6"
      onHoverStart={() => setIsCardHovered(true)}
      onHoverEnd={() => setIsCardHovered(false)}
      transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 1000 }}
    >
      <div className="mx-auto max-w-[25rem] space-y-1 pb-10">
        <div className="flex items-center gap-3 border-b border-neutral-300 pb-2.5">
          <div className="text-white text-sm font-medium bg-black rounded-full size-6 p-1 flex items-center justify-center">
            {projects.length}
          </div>
          <div className="font-semibold">Projects</div>
        </div>
        <div className="space-y-4 mt-4">
          {projects.map((project, index) => (
            <ProjectItem 
              key={index}
              name={project.name}
              initialProgress={project.initial}
              hoverProgress={project.hover}
              isHovered={isCardHovered}
            />
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-[20rem] space-y-1">
        <div className="font-semibold text-lg flex items-center gap-2">
          <ChartBarBig />Visualize your Pipeline
        </div>
        <div className="text-neutral-600">
          See a global view of all your project timelines in one place
        </div>
      </div>
    </motion.div>
  )
}

const ProjectItem = ({ 
  name, 
  initialProgress, 
  hoverProgress,
  isHovered
}) => {
  const progressValue = isHovered ? hoverProgress : initialProgress

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="text-white text-xs font-medium bg-black rounded-full size-6 p-1 flex items-center justify-center">
          <AlignJustify className="w-3" />
        </div>
        <div className="font-medium text-neutral-600">{name}</div>
      </div>
      <div className="w-40 pl-4">
        <Progress value={progressValue} />
      </div>
    </div>
  )
}

export default Demo4