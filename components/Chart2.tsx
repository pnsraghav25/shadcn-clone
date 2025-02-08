"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, ResponsiveContainer, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { month: "January", desktop: 56 },
    { month: "February", desktop: 70 },
    { month: "March", desktop: 46 },
    { month: "April", desktop: 64 },
    { month: "May", desktop: 44 },
    { month: "June", desktop: 55 },
    { month: "June", desktop: 64 },
    { month: "June", desktop: 41 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--primary))",
    },
} satisfies ChartConfig

import React from 'react'

const Chart2 = () => {
    return (
        <div>
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Subscriptions</CardTitle>
                </CardHeader>
                <CardContent className="h-fit">
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold text-foreground">+2350</span>
                        <span className="text-xs text-muted-foreground">+180.1% from last month</span>
                    </div>
                    <ResponsiveContainer height={80}>
                        <ChartContainer config={chartConfig}>
                            <BarChart
                                accessibilityLayer
                                data={chartData}>
                                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={6}>
                                </Bar>
                            </BarChart>
                        </ChartContainer>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
    )
}

export default Chart2