"use client"

import { CartesianGrid, Line, LineChart, ResponsiveContainer, } from "recharts"

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
} from "@/components/ui/chart"

const chartData = [
    { value: 10400, subscription: 200 },
    { value: 14405, subscription: 200 },
    { value: 9400, subscription: 200 },
    { value: 8200, subscription: 200 },
    { value: 7000, subscription: 200 },
    { value: 9600, subscription: 200 },
    { value: 11244, subscription: 200 },
    { value: 26475, subscription: 200 },
]


const chartConfig = {
    value: {
        label: "Value",
        color: "hsl(var(--primary))",
    },
} satisfies ChartConfig

import React from 'react'

const Revenuechart = () => {
    return (
        <div>
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle>Total Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                    <div>
                        <p className="text-2xl font-bold text-card-foreground">$15,231.89</p>
                        <p className="text-sm text-muted-foreground">+20.1% from last month</p>
                    </div>
                    <ResponsiveContainer height={80}>

                        <ChartContainer config={chartConfig}>
                            <LineChart
                                data={chartData}
                                margin={{ bottom: 0, left: 10, right: 10, top: 5 }}
                            >
                                <Line
                                    dataKey="value"
                                    type="natural"
                                    stroke="var(--color-value)"
                                    strokeWidth={2}
                                    dot={{
                                        fill: "hsl(var(--foreground))",
                                    }}
                                    activeDot={{
                                        r: 6,
                                    }}
                                />
                            </LineChart>
                        </ChartContainer>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div >
    )
}

export default Revenuechart
