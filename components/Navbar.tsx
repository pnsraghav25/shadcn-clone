import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Command, LucideGithub, Sun } from 'lucide-react'
import { ModeToggle } from './ModeToggle'

const Navbar = () => {
    return (
        <div className='flex flex-row justify-between items-center border-b border-accent px-4 max-w-[2000px] sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50'>
            <div className='h-14 flex flex-row items-center'>
                <a href='/' className='flex flex-row items-center gap-2 mr-2'>
                    <div>
                        {/* Logo */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6">
                            <rect width="256" height="256" fill="none"></rect>
                            <line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></line>
                            <line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></line>
                        </svg>
                    </div>
                    <span className='font-bold mr-4'>shadcn/ui</span>
                </a>
                <div className='flex flex-row gap-6 text-sm text-foreground/80 items-center'>
                    <a href="/docs">Docs</a>
                    <a href="/components">Components</a>
                    <a href="/blocks">Blocks</a>
                    <a href="/charts">Charts</a>
                    <a href="/themes">Themes</a>
                    <a href="/colors">Colors</a>
                </div>
            </div>
            <div className='flex flex-row gap-2 items-center'>
                <Button variant={'secondary'} className='text-foreground/40'>Search Documentation...
                    <div className='flex flex-row items-center gap-px bg-foreground/10 text-foreground/40 p-1 rounded-md text-xs'>
                    <Command size={20} strokeWidth={1.5} />K
                    </div>
                </Button>
                <Button className='w-8 h-8' variant={'ghost'}>
                    <LucideGithub/>
                </Button>
                <ModeToggle/>
            </div>
        </div>
    )
}

export default Navbar