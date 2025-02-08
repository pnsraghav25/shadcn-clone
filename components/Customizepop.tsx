'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Check, Moon, Repeat, Sun } from 'lucide-react'

const Customizepop = () => {

    const { theme, colorTheme, setTheme, setColorTheme, radii, setRadii } = useTheme();

    const handleColorThemeChange = (newColorTheme: 'Orange' | 'Blue' | 'Green' | 'Rose' | 'Zinc') => {
        setColorTheme(newColorTheme);
    };

    let color = [{ 1: 'Zinc', 2: 'bg-zinc-600' }, { 1: 'Red', 2: 'bg-red-600' }, { 1: 'Rose', 2: 'bg-rose-600' }, { 1: 'Orange', 2: 'bg-orange-600' }, { 1: 'Green', 2: 'bg-green-600' }, { 1: 'Blue', 2: 'bg-blue-600' }, { 1: 'Yellow', 2: 'bg-yellow-600' }, { 1: 'Violet', 2: 'bg-violet-600' },]
    const radius = ['0', '0.3', '0.5', '0.75', '1.0']

    let resetThemeData = () =>{
        setTheme('system')
        setColorTheme('Zinc')
        setRadii('0.5')
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button size={'sm'}>Customize</Button>
            </PopoverTrigger>
            <PopoverContent className="w-[350px] ml-4 p-6">
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <p className='font-semibold text-base'>Theme Customizer</p>
                        <p className='text-xs font-normal text-foreground/40'>Customize your components colors.</p>
                    </div>
                    <Button variant={'ghost'} size={'sm'} onClick={resetThemeData}><Repeat /></Button>
                </div>
                <div className='flex flex-col mt-6 gap-2'>
                    <p className='font-semibold text-xs'>Color</p>
                    <div className='grid grid-cols-3 gap-2'>
                        {color.map((e : any, id) => {
                            return (
                                <Button key={id} variant={'outline'} size={'sm'} onClick={() => handleColorThemeChange(e[1])} className={`${colorTheme === e[1] ? 'border-2 border-foreground' : null}`}>
                                    <div className={`${e[2]} w-5 h-5 rounded-full flex flex-row items-center justify-center`}><Check className={`${colorTheme === e[1] ? 'block' : 'hidden'}` } width='14px' height='14px' /></div>
                                    {e[1]}
                                </Button>
                            )
                        })}
                    </div>
                </div>
                <div className='flex flex-col mt-6 gap-2'>
                    <p className='font-semibold text-xs'>Radius</p>
                    <div className='flex flex-wrap gap-2'>
                        {radius.map((e) => {
                            return (
                                <Button key={e} variant={'outline'} size={'sm'} onClick={()=> setRadii(e)} className={`${radii === e ? 'border border-foreground' : null}`}>
                                    {e}
                                </Button>
                            )
                        })}
                    </div>
                </div>
                <div className='flex flex-col mt-6 gap-2'>
                    <p className='font-semibold text-xs'>Mode</p>
                    <div className='flex flex-wrap gap-2'>
                        <Button variant={'outline'} size={'sm'} className={`${theme === 'light' ? 'border border-foreground' : null}`} onClick={() => setTheme('light')}><Sun/> Light</Button>
                        <Button variant={'outline'} size={'sm'} className={`${theme === 'dark' ? 'border border-foreground' : null}`} onClick={() => setTheme('dark')}><Moon/> Dark</Button>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default Customizepop