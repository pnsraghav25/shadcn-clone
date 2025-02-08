"use client"

import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Minus, Plus } from 'lucide-react'
import { Button } from './ui/button'


import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis } from "recharts"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const Goal = () => {
    const chartData = [
        { month: "January", desktop: 400 },
        { month: "February", desktop: 300 },
        { month: "March", desktop: 200 },
        { month: "April", desktop: 300 },
        { month: "May", desktop: 200 },
        { month: "June", desktop: 278 },
        { month: "January", desktop: 189 },
        { month: "February", desktop: 239 },
        { month: "March", desktop: 300 },
        { month: "April", desktop: 200 },
        { month: "May", desktop: 278 },
        { month: "June", desktop: 189 },
        { month: "June", desktop: 349 },
    ]
    const chartConfig = {
        desktop: {
            label: "Desktop",
            color: "hsl(var(--primary))",
        },
    } satisfies ChartConfig
    const [goal, setgoal] = useState(340)
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Move Goal</CardTitle>
                    <CardDescription>Set your daily activity goal.</CardDescription>
                </CardHeader>
                <CardContent className='flex flex-col gap-4'>
                    <div className='flex flex-row justify-between'>
                        <Button variant={'outline'} size={'icon'} className='text-foreground rounded-full' disabled={(goal <= 200)} onClick={() => { setgoal(goal - 10) }}>
                            <Minus className='cursor-pointer' width={30} height={30} strokeWidth={2} />
                        </Button>
                        <div className='flex flex-col items-center text-5xl font-bold'>
                            {goal}
                            <span className='font-semibold text-[0.7rem] uppercase te'>Calories/day</span>
                        </div>
                        <Button variant={'outline'} size={'icon'} className='text-foreground rounded-full px-4 py-4' disabled={(goal >= 400)} onClick={(e) => {
                            setgoal(goal + 10);
                        }}>
                            <Plus className='cursor-pointer' width={30} height={30} strokeWidth={2} />
                        </Button>
                    </div>
                    <div className='h-fit'>
                        <ResponsiveContainer height={60}>
                            <ChartContainer config={chartConfig}>
                                <BarChart accessibilityLayer data={chartData}>
                                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={6} />
                                </BarChart>
                            </ChartContainer>
                        </ResponsiveContainer>
                    </div>
                    <Button variant={'default'} className='w-full'>Set Goal</Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default Goal