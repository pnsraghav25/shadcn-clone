'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { useTheme } from './theme-provider';
import { Check, Copy } from 'lucide-react'

const Copycodepopup = () => {

    const { theme, colorTheme, setTheme, setColorTheme, radii, setRadii } = useTheme();

    const themes = {
        Red: {
            light: {
                background: "0 0% 100%",
                foreground: "0 0% 3.9%",
                card: "0 0% 100%",
                cardForeground: "0 0% 3.9%",
                popover: "0 0% 100%",
                popoverForeground: "0 0% 3.9%",
                primary: "0 72.2% 50.6%",
                primaryForeground: "0 85.7% 97.3%",
                secondary: "0 0% 96.1%",
                secondaryForeground: "0 0% 9%",
                muted: "0 0% 96.1%",
                mutedForeground: "0 0% 45.1%",
                accent: "0 0% 96.1%",
                accentForeground: "0 0% 9%",
                destructive: "0 84.2% 60.2%",
                destructiveForeground: "0 0% 98%",
                border: "0 0% 89.8%",
                input: "0 0% 89.8%",
                ring: "0 72.2% 50.6%",
                radius: `${radii} rem`,
                chart1: "12 76% 61%",
                chart2: "173 58% 39%",
                chart3: "197 37% 24%",
                chart4: "43 74% 66%",
                chart5: "27 87% 67%"
            },
            dark: {
                background: "0 0% 3.9%",
                foreground: "0 0% 98%",
                card: "0 0% 3.9%",
                cardForeground: "0 0% 98%",
                popover: "0 0% 3.9%",
                popoverForeground: "0 0% 98%",
                primary: "0 72.2% 50.6%",
                primaryForeground: "0 85.7% 97.3%",
                secondary: "0 0% 14.9%",
                secondaryForeground: "0 0% 98%",
                muted: "0 0% 14.9%",
                mutedForeground: "0 0% 63.9%",
                accent: "0 0% 14.9%",
                accentForeground: "0 0% 98%",
                destructive: "0 62.8% 30.6%",
                destructiveForeground: "0 0% 98%",
                border: "0 0% 14.9%",
                input: "0 0% 14.9%",
                ring: "0 72.2% 50.6%",
                chart1: "220 70% 50%",
                chart2: "160 60% 45%",
                chart3: "30 80% 55%",
                chart4: "280 65% 60%",
                chart5: "340 75% 55%"
            }
        },
        Yellow: {
            light: {
                background: "0 0% 100%",
                foreground: "20 14.3% 4.1%",
                card: "0 0% 100%",
                cardForeground: "20 14.3% 4.1%",
                popover: "0 0% 100%",
                popoverForeground: "20 14.3% 4.1%",
                primary: "47.9 95.8% 53.1%",
                primaryForeground: "26 83.3% 14.1%",
                secondary: "60 4.8% 95.9%",
                secondaryForeground: "24 9.8% 10%",
                muted: "60 4.8% 95.9%",
                mutedForeground: "25 5.3% 44.7%",
                accent: "60 4.8% 95.9%",
                accentForeground: "24 9.8% 10%",
                destructive: "0 84.2% 60.2%",
                destructiveForeground: "60 9.1% 97.8%",
                border: "20 5.9% 90%",
                input: "20 5.9% 90%",
                ring: "20 14.3% 4.1%",
                radius: `${radii} rem`,
                chart1: "12 76% 61%",
                chart2: "173 58% 39%",
                chart3: "197 37% 24%",
                chart4: "43 74% 66%",
                chart5: "27 87% 67%"
            },
            dark: {
                background: "20 14.3% 4.1%",
                foreground: "60 9.1% 97.8%",
                card: "20 14.3% 4.1%",
                cardForeground: "60 9.1% 97.8%",
                popover: "20 14.3% 4.1%",
                popoverForeground: "60 9.1% 97.8%",
                primary: "47.9 95.8% 53.1%",
                primaryForeground: "26 83.3% 14.1%",
                secondary: "12 6.5% 15.1%",
                secondaryForeground: "60 9.1% 97.8%",
                muted: "12 6.5% 15.1%",
                mutedForeground: "24 5.4% 63.9%",
                accent: "12 6.5% 15.1%",
                accentForeground: "60 9.1% 97.8%",
                destructive: "0 62.8% 30.6%",
                destructiveForeground: "60 9.1% 97.8%",
                border: "12 6.5% 15.1%",
                input: "12 6.5% 15.1%",
                ring: "35.5 91.7% 32.9%",
                chart1: "220 70% 50%",
                chart2: "160 60% 45%",
                chart3: "30 80% 55%",
                chart4: "280 65% 60%",
                chart5: "340 75% 55%"
            }
        },
        Orange: {
            light: {
                background: "0 0% 100%",
                foreground: "20 14.3% 4.1%",
                card: "0 0% 100%",
                cardForeground: "20 14.3% 4.1%",
                popover: "0 0% 100%",
                popoverForeground: "20 14.3% 4.1%",
                primary: "24.6 95% 53.1%",
                primaryForeground: "60 9.1% 97.8%",
                secondary: "60 4.8% 95.9%",
                secondaryForeground: "24 9.8% 10%",
                muted: "60 4.8% 95.9%",
                mutedForeground: "25 5.3% 44.7%",
                accent: "60 4.8% 95.9%",
                accentForeground: "24 9.8% 10%",
                destructive: "0 84.2% 60.2%",
                destructiveForeground: "60 9.1% 97.8%",
                border: "20 5.9% 90%",
                input: "20 5.9% 90%",
                ring: "24.6 95% 53.1%",
                radius: `${radii} rem`,
            },
            dark: {
                background: "20 14.3% 4.1%",
                foreground: "60 9.1% 97.8%",
                card: "20 14.3% 4.1%",
                cardForeground: "60 9.1% 97.8%",
                popover: "20 14.3% 4.1%",
                popoverForeground: "60 9.1% 97.8%",
                primary: "20.5 90.2% 48.2%",
                primaryForeground: "60 9.1% 97.8%",
                secondary: "12 6.5% 15.1%",
                secondaryForeground: "60 9.1% 97.8%",
                muted: "12 6.5% 15.1%",
                mutedForeground: "24 5.4% 63.9%",
                accent: "12 6.5% 15.1%",
                accentForeground: "60 9.1% 97.8%",
                destructive: "0 72.2% 50.6%",
                destructiveForeground: "60 9.1% 97.8%",
                border: "12 6.5% 15.1%",
                input: "12 6.5% 15.1%",
                ring: "20.5 90.2% 48.2%",
            },
        },
        Blue: {
            light: {
                background: "0 0% 100%",
                foreground: "222.2 84% 4.9%",
                card: "0 0% 100%",
                cardForeground: "222.2 84% 4.9%",
                popover: "0 0% 100%",
                popoverForeground: "222.2 84% 4.9%",
                primary: "221.2 83.2% 53.3%",
                primaryForeground: "210 40% 98%",
                secondary: "210 40% 96.1%",
                secondaryForeground: "222.2 47.4% 11.2%",
                muted: "210 40% 96.1%",
                mutedForeground: "215.4 16.3% 46.9%",
                accent: "210 40% 96.1%",
                accentForeground: "222.2 47.4% 11.2%",
                destructive: "0 84.2% 60.2%",
                destructiveForeground: "210 40% 98%",
                border: "214.3 31.8% 91.4%",
                input: "214.3 31.8% 91.4%",
                ring: "221.2 83.2% 53.3%",
                radius: `${radii} rem`,
            },
            dark: {
                background: "240 10% 3.9%",
                foreground: "210 40% 98%",
                card: "222.2 84% 4.9%",
                cardForeground: "210 40% 98%",
                popover: "222.2 84% 4.9%",
                popoverForeground: "210 40% 98%",
                primary: "217.2 91.2% 59.8%",
                primaryForeground: "222.2 47.4% 11.2%",
                secondary: "217.2 32.6% 17.5%",
                secondaryForeground: "210 40% 98%",
                muted: "217.2 32.6% 17.5%",
                mutedForeground: "215 20.2% 65.1%",
                accent: "217.2 32.6% 17.5%",
                accentForeground: "210 40% 98%",
                destructive: "0 62.8% 30.6%",
                destructiveForeground: "210 40% 98%",
                border: "217.2 32.6% 17.5%",
                input: "217.2 32.6% 17.5%",
                ring: "224.3 76.3% 48%",
            },
        },
        Green: {
            light: {
                background: "0 0% 100%",
                foreground: "240 10% 3.9%",
                card: "0 0% 100%",
                cardForeground: "240 10% 3.9%",
                popover: "0 0% 100%",
                popoverForeground: "240 10% 3.9%",
                primary: "142.1 76.2% 36.3%",
                primaryForeground: "355.7 100% 97.3%",
                secondary: "240 4.8% 95.9%",
                secondaryForeground: "240 5.9% 10%",
                muted: "240 4.8% 95.9%",
                mutedForeground: "240 3.8% 46.1%",
                accent: "240 4.8% 95.9%",
                accentForeground: "240 5.9% 10%",
                destructive: "0 84.2% 60.2%",
                destructiveForeground: "0 0% 98%",
                border: "240 5.9% 90%",
                input: "240 5.9% 90%",
                ring: "142.1 76.2% 36.3%",
                radius: `${radii} rem`,
            },
            dark: {
                background: "20 14.3% 4.1%",
                foreground: "0 0% 95%",
                card: "24 9.8% 10%",
                cardForeground: "0 0% 95%",
                popover: "0 0% 9%",
                popoverForeground: "0 0% 95%",
                primary: "142.1 70.6% 45.3%",
                primaryForeground: "144.9 80.4% 10%",
                secondary: "240 3.7% 15.9%",
                secondaryForeground: "0 0% 98%",
                muted: "0 0% 15%",
                mutedForeground: "240 5% 64.9%",
                accent: "12 6.5% 15.1%",
                accentForeground: "0 0% 98%",
                destructive: "0 62.8% 30.6%",
                destructiveForeground: "0 85.7% 97.3%",
                border: "240 3.7% 15.9%",
                input: "240 3.7% 15.9%",
                ring: "142.4 71.8% 29.2%",
            },
        },
        Rose: {
            light: {
                background: "0 0% 100%",
                foreground: "240 10% 3.9%",
                card: "0 0% 100%",
                cardForeground: "240 10% 3.9%",
                popover: "0 0% 100%",
                popoverForeground: "240 10% 3.9%",
                primary: "346.8 77.2% 49.8%",
                primaryForeground: "355.7 100% 97.3%",
                secondary: "240 4.8% 95.9%",
                secondaryForeground: "240 5.9% 10%",
                muted: "240 4.8% 95.9%",
                mutedForeground: "240 3.8% 46.1%",
                accent: "240 4.8% 95.9%",
                accentForeground: "240 5.9% 10%",
                destructive: "0 84.2% 60.2%",
                destructiveForeground: "0 0% 98%",
                border: "240 5.9% 90%",
                input: "240 5.9% 90%",
                ring: "346.8 77.2% 49.8%",
                radius: `${radii} rem`,
            },
            dark: {
                background: "20 14.3% 4.1%",
                foreground: "0 0% 95%",
                card: "24 9.8% 10%",
                cardForeground: "0 0% 95%",
                popover: "0 0% 9%",
                popoverForeground: "0 0% 95%",
                primary: "346.8 77.2% 49.8%",
                primaryForeground: "355.7 100% 97.3%",
                secondary: "240 3.7% 15.9%",
                secondaryForeground: "0 0% 98%",
                muted: "0 0% 15%",
                mutedForeground: "240 5% 64.9%",
                accent: "12 6.5% 15.1%",
                accentForeground: "0 0% 98%",
                destructive: "0 62.8% 30.6%",
                destructiveForeground: "0 85.7% 97.3%",
                border: "240 3.7% 15.9%",
                input: "240 3.7% 15.9%",
                ring: "346.8 77.2% 49.8%",
            },
        },
        Zinc: {
            light: {
                background: "0 0% 100%",
                foreground: "240 10% 3.9%",
                card: "0 0% 100%",
                cardForeground: "240 10% 3.9%",
                popover: "0 0% 100%",
                popoverForeground: "240 10% 3.9%",
                primary: "240 5.9% 10%",
                primaryForeground: "0 0% 98%",
                secondary: "240 4.8% 95.9%",
                secondaryForeground: "240 5.9% 10%",
                muted: "240 4.8% 95.9%",
                mutedForeground: "240 3.8% 46.1%",
                accent: "240 4.8% 95.9%",
                accentForeground: "240 5.9% 10%",
                destructive: "0 84.2% 60.2%",
                destructiveForeground: "0 0% 98%",
                border: "240 5.9% 90%",
                input: "240 5.9% 90%",
                ring: "240 5.9% 10%",
                radius: `${radii} rem`,
            },
            dark: {
                background: "240 10% 3.9%",
                foreground: "0 0% 98%",
                card: "240 10% 3.9%",
                cardForeground: "0 0% 98%",
                popover: "240 10% 3.9%",
                popoverForeground: "0 0% 98%",
                primary: "0 0% 98%",
                primaryForeground: "240 5.9% 10%",
                secondary: "240 3.7% 15.9%",
                secondaryForeground: "0 0% 98%",
                muted: "240 3.7% 15.9%",
                mutedForeground: "240 5% 64.9%",
                accent: "240 3.7% 15.9%",
                accentForeground: "0 0% 98%",
                destructive: "0 62.8% 30.6%",
                destructiveForeground: "0 0% 98%",
                border: "240 3.7% 15.9%",
                input: "240 3.7% 15.9%",
                ring: "240 4.9% 83.9%",
            },
        },
        Violet: {
            light: {
                background: "0 0% 100%",
                foreground: "224 71.4% 4.1%",
                card: "0 0% 100%",
                cardForeground: "224 71.4% 4.1%",
                popover: "0 0% 100%",
                popoverForeground: "224 71.4% 4.1%",
                primary: "262.1 83.3% 57.8%",
                primaryForeground: "210 20% 98%",
                secondary: "220 14.3% 95.9%",
                secondaryForeground: "220.9 39.3% 11%",
                muted: "220 14.3% 95.9%",
                mutedForeground: "220 8.9% 46.1%",
                accent: "220 14.3% 95.9%",
                accentForeground: "220.9 39.3% 11%",
                destructive: "0 84.2% 60.2%",
                destructiveForeground: "210 20% 98%",
                border: "220 13% 91%",
                input: "220 13% 91%",
                ring: "262.1 83.3% 57.8%",
                radius: `${radii} rem`,
                chart1: "12 76% 61%",
                chart2: "173 58% 39%",
                chart3: "197 37% 24%",
                chart4: "43 74% 66%",
                chart5: "27 87% 67%"
            },
            dark: {
                background: "224 71.4% 4.1%",
                foreground: "210 20% 98%",
                card: "224 71.4% 4.1%",
                cardForeground: "210 20% 98%",
                popover: "224 71.4% 4.1%",
                popoverForeground: "210 20% 98%",
                primary: "263.4 70% 50.4%",
                primaryForeground: "210 20% 98%",
                secondary: "215 27.9% 16.9%",
                secondaryForeground: "210 20% 98%",
                muted: "215 27.9% 16.9%",
                mutedForeground: "217.9 10.6% 64.9%",
                accent: "215 27.9% 16.9%",
                accentForeground: "210 20% 98%",
                destructive: "0 62.8% 30.6%",
                destructiveForeground: "210 20% 98%",
                border: "215 27.9% 16.9%",
                input: "215 27.9% 16.9%",
                ring: "263.4 70% 50.4%",
                chart1: "220 70% 50%",
                chart2: "160 60% 45%",
                chart3: "30 80% 55%",
                chart4: "280 65% 60%",
                chart5: "340 75% 55%"
            }
        },
    };
    const [copy, setcopy] = useState(false)
    let handleCopy = (e: any) => {
        navigator.clipboard.writeText('@layer base\n' + JSON.stringify(themes[colorTheme], null, 4))
        setcopy(true)
        setTimeout(() => {
            setcopy(false)
        }, 3000);
    }


    return (
        <Dialog>
            <DialogTrigger>
                <Button variant={'ghost'} size={'sm'}>Copy code</Button>
            </DialogTrigger>
            <DialogContent className='min-w-[44rem]'>
                <DialogHeader>
                    <DialogTitle>Theme</DialogTitle>
                    <DialogDescription className='text-muted-foreground text-sm'>
                        Copy and paste the following code into your CSS file.
                    </DialogDescription>
                    <ScrollArea className="h-[30rem] whitespace-nowrap rounded-md border">
                        <div className='p-4 bg-accent/50 rounded-lg flex flex-row items-start justify-between'>
                            <pre>
                                <code className='font-mono text-sm'>
                                    @layer base{'\n' +
                                        JSON.stringify(themes[colorTheme], null, 4)
                                    }
                                </code>
                            </pre>
                            <Button variant={'secondary'} size={'sm'} className='text-accent-foreground/50' onClick={(e) => handleCopy(e)}>
                                {copy ? <Check /> : <Copy />} Copy
                            </Button>
                        </div>
                        <ScrollBar orientation="vertical" />
                    </ScrollArea>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}

export default Copycodepopup