"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DollarSign, Users, CreditCard, Activity, Sparkles, TrendingUp, AlertCircle } from "lucide-react"

import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip, BarChart, Bar, YAxis } from "recharts"

const areaData = [
    { name: "Mon", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Tue", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Wed", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Thu", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Fri", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Sat", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Sun", total: Math.floor(Math.random() * 5000) + 1000 },
]

const barData = [
    { name: "B2C", value: 400 },
    { name: "B2B", value: 300 },
    { name: "Corp", value: 300 },
    { name: "API", value: 200 },
]

export default function AdminDashboardPage() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Executive Dashboard</h2>
                <div className="flex items-center space-x-2">
                    {/* Calendar Date Picker placeholder */}
                </div>
            </div>

            {/* AI Insights Banner */}
            <Card className="border-primary/30 bg-primary/5 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Sparkles className="h-24 w-24 text-primary" />
                </div>
                <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-primary/20 p-2 rounded-lg">
                            <Sparkles className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-1 flex-1">
                            <h3 className="text-lg font-bold">Predictive AI Insights</h3>
                            <p className="text-sm text-muted-foreground">Based on current booking velocity, we project a <span className="text-success font-bold">+12% revenue increase</span> for Q4. Actionable anomaly detected in <span className="font-medium text-foreground">EMEA Corporate</span> channel.</p>
                            <div className="flex gap-4 pt-3">
                                <div className="flex items-center gap-2 text-xs font-medium px-2 py-1 bg-background rounded border">
                                    <TrendingUp className="h-3 w-3 text-success" /> Revenue Trend: Bullish
                                </div>
                                <div className="flex items-center gap-2 text-xs font-medium px-2 py-1 bg-background rounded border">
                                    <AlertCircle className="h-3 w-3 text-warning" /> 2 Channel Anomalies
                                </div>
                            </div>
                        </div>
                        <Button size="sm">View Detailed Analysis</Button>
                    </div>
                </CardContent>
            </Card>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Revenue
                        </CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$45,231.89</div>
                        <p className="text-xs text-muted-foreground">
                            +20.1% from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Active Agents
                        </CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+2350</div>
                        <p className="text-xs text-muted-foreground">
                            +180.1% from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Bookings</CardTitle>
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+12,234</div>
                        <p className="text-xs text-muted-foreground">
                            +19% from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Active Now
                        </CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+573</div>
                        <p className="text-xs text-muted-foreground">
                            +201 since last hour
                        </p>
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Revenue Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="h-[350px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={areaData}>
                                    <XAxis
                                        dataKey="name"
                                        stroke="#888888"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                    />
                                    <YAxis
                                        stroke="#888888"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                        tickFormatter={(value) => `$${value}`}
                                    />
                                    <Tooltip
                                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="total"
                                        stroke="var(--primary)"
                                        fill="var(--primary)"
                                        fillOpacity={0.2}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Channel Breakdown</CardTitle>
                        <CardDescription>
                            Revenue distribution by sales channel
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[350px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={barData}>
                                    <XAxis
                                        dataKey="name"
                                        stroke="#888888"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                    />
                                    <Tooltip
                                        cursor={{ fill: 'transparent' }}
                                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    />
                                    <Bar
                                        dataKey="value"
                                        fill="currentColor"
                                        radius={[4, 4, 0, 0]}
                                        className="fill-primary"
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
