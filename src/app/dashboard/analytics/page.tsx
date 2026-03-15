"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { BarChart, Users, TrendingUp, Globe, Target } from "lucide-react"
import { ResponsiveContainer, BarChart as ReBarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line } from "recharts"

const channelPerformance = [
    { name: 'B2C Direct', current: 1200, lastYear: 900 },
    { name: 'Agent Portal', current: 850, lastYear: 720 },
    { name: 'GDS Connect', current: 600, lastYear: 580 },
    { name: 'Corporate', current: 400, lastYear: 310 },
]

const userGrowth = [
    { month: 'Jan', users: 8000 },
    { month: 'Feb', users: 9500 },
    { month: 'Mar', users: 11000 },
    { month: 'Apr', users: 12234 },
]

export default function DashboardAnalyticsSpecificPage() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Audience & Reach</h2>
                <p className="text-muted-foreground">Detailed breakdown of user acquisition and channel performance.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Channel Performance (Volume)</CardTitle>
                        <CardDescription>Comparison of direct vs indirect booking volumes.</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <ReBarChart data={channelPerformance}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                                    <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis fontSize={12} tickLine={false} axisLine={false} />
                                    <Tooltip cursor={{ fill: 'var(--muted)', opacity: 0.1 }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                    <Bar dataKey="current" fill="var(--primary)" radius={[4, 4, 0, 0]} />
                                    <Bar dataKey="lastYear" fill="var(--muted-foreground)" opacity={0.3} radius={[4, 4, 0, 0]} />
                                </ReBarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Total Active Users Growth</CardTitle>
                        <CardDescription>Monthly active users (MAU) across all portals.</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={userGrowth}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                                    <XAxis dataKey="month" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis fontSize={12} tickLine={false} axisLine={false} />
                                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                    <Line type="monotone" dataKey="users" stroke="var(--primary)" strokeWidth={3} dot={{ fill: 'var(--primary)', r: 4 }} activeDot={{ r: 6, stroke: 'var(--background)', strokeWidth: 2 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <Globe className="h-8 w-8 text-blue-500" />
                        <div>
                            <CardTitle className="text-lg">Global Reach</CardTitle>
                            <CardDescription>142 Countries active</CardDescription>
                        </div>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <Target className="h-8 w-8 text-emerald-500" />
                        <div>
                            <CardTitle className="text-lg">Conversion Goal</CardTitle>
                            <CardDescription>+15% from last month</CardDescription>
                        </div>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <TrendingUp className="h-8 w-8 text-purple-500" />
                        <div>
                            <CardTitle className="text-lg">Market Share</CardTitle>
                            <CardDescription>4.2% Total travel B2B</CardDescription>
                        </div>
                    </CardHeader>
                </Card>
            </div>
        </div>
    )
}
