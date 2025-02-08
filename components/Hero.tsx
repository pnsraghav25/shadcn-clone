import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import Customizepop from './Customizepop'
import Copycodepopup from './Copycodepopup'
import ThemeToggle from './Themetoggle'

const Hero = () => {
    return (
        <div className='border-b border-accent px-4 py-12'>
            <div className='flex flex-col items-start gap-1 max-w-[2000px]'>
                <a className='px-0.5 mb-2 font-medium inline-flex items-center gap-1 text-sm hover:underline cursor-pointer underline-offset-4'>Blocks are open for contributions <ArrowRight size={24} className='w-4 h-4'/></a>
                <p className='font-bold text-4xl tracking-tighter leading-[1.1]'>Add colors. Make it yours.</p>
                <p className='font-light text-lg'>Hand-picked themes that you can copy and paste into your apps.</p>
                <div className='flex flex-row pt-2 gap-2'>
                    {/* Popover 1 */}
                    <Customizepop/>
                    {/* Popover 2 */}
                    <Copycodepopup/>
                </div>
            </div>
        </div>
    )
}

export default Hero