"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis } from "recharts"

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
import { tree } from "next/dist/build/templates/app-page"
const chartData = [
    { average: 400, today: 240 },
    { average: 300, today: 139 },
    { average: 200, today: 980 },
    { average: 278, today: 390 },
    { average: 189, today: 480 },
    { average: 239, today: 380 },
    { average: 349, today: 430 },

]

const chartConfig = {
    average: {
        label: "Average",
        color: "hsl(var(--primary))",
    },
    today: {
        label: "Today",
        color: "hsl(var(--primary))",
    },
} satisfies ChartConfig

const Chart3 = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Exercise Minutes</CardTitle>
                <CardDescription>Your exercise minutes are ahead of where you normally are.</CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer height={200}>
                    <ChartContainer config={chartConfig}>
                        <LineChart
                            accessibilityLayer
                            data={chartData}
                            margin={{
                                left: 12,
                                right: 12,
                            }}
                        >
                            <ChartTooltip cursor={true} content={<ChartTooltipContent />} />
                            <Line
                                dataKey="average"
                                type="monotone"
                                stroke="var(--color-average)"
                                strokeOpacity={0.5}
                                strokeWidth={2}
                                dot={true}
                            />
                            <Line
                                dataKey="today"
                                type="monotone"
                                stroke="var(--color-today)"
                                strokeWidth={2}
                                dot={true}
                            />
                        </LineChart>
                    </ChartContainer>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}

export default Chart3
