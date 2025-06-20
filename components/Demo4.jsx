'use client'

import { AlignJustify, ChartBarBig, GitGraph } from "lucide-react"

const Demo4 = () => {
  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-neutral-50'>
        <Card />
    </div>
  )
}

const Card = () => {
    return (
        <div className="w-sm h-[23rem] bg-white text-black rounded-2xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
            <div className="mx-auto max-w-[20rem] space-y-1 pt-4 pb-10">
                <div className="flex items-center gap-3 border-b border-neutral-300 pb-2.5">
                    <div className="text-white text-sm font-medium bg-black rounded-full size-6 p-1 flex items-center justify-center">4</div>
                    <div className="font-semibold">Projects</div>
                </div>
                <div className="space-y-4 mt-4">
                    <div className="flex items-center gap-3">
                        <div className="text-white text-xs font-medium bg-black rounded-full size-6 p-1 flex items-center justify-center"><AlignJustify className="w-3" /></div>
                        <div className="font-medium text-neutral-600">Product Design</div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="text-white text-xs font-medium bg-black rounded-full size-6 p-1 flex items-center justify-center"><AlignJustify className="w-3" /></div>
                        <div className="font-medium text-neutral-600">Promo Video</div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="text-white text-xs font-medium bg-black rounded-full size-6 p-1 flex items-center justify-center"><AlignJustify className="w-3" /></div>
                        <div className="font-medium text-neutral-600">Launch Campaign</div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="text-white text-xs font-medium bg-black rounded-full size-6 p-1 flex items-center justify-center"><AlignJustify className="w-3" /></div>
                        <div className="font-medium text-neutral-600">Photoshoot</div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-[20rem] space-y-1">
                <div className="font-semibold text-lg flex items-center gap-2"><ChartBarBig />Visualize your Pipeline</div>
                <div className="text-neutral-600">See a global view of all your project timelines in one place</div>
            </div>
        </div>
    )
}

export default Demo4