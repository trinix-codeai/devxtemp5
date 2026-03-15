"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, PieChart, Activity, TrendingUp, Users, DollarSign, Calendar } from "lucide-react"
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, BarChart as ReBarChart, Bar, CartesianGrid, Legend } from "recharts"

const monthlyRevenue = [
    { name: 'Jan', total: 145000, target: 120000 },
    { name: 'Feb', total: 180000, target: 130000 },
    { name: 'Mar', total: 225000, target: 150000 },
    { name: 'Apr', total: 195000, target: 160000 },
    { name: 'May', total: 280000, target: 180000 },
    { name: 'Jun', total: 310000, target: 200000 },
]

const bookingSource = [
    { name: 'Direct B2C', value: 45 },
    { name: 'Agent Portal', value: 35 },
    { name: 'API Partners', value: 15 },
    { name: 'Corporate', value: 5 },
]

export default function DashboardAnalyticsPage() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">System Analytics</h2>
                <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-2 bg-background border rounded-md px-3 py-1.5 text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>Last 6 Months</span>
                    </div>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Volume (YTD)</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$1.34M</div>
                        <p className="text-xs text-muted-foreground flex items-center mt-1 text-success">
                            <TrendingUp className="mr-1 h-3 w-3" /> +24% vs last year
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+12,234</div>
                        <p className="text-xs text-muted-foreground mt-1">Across all platforms</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">4.2%</div>
                        <p className="text-xs text-muted-foreground flex items-center mt-1 text-success">
                            <TrendingUp className="mr-1 h-3 w-3" /> +0.4% from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">System Health</CardTitle>
                        <LineChart className="h-4 w-4 text-success" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-success">99.99%</div>
                        <p className="text-xs text-muted-foreground mt-1">Uptime trailing 30 days</p>
                    </CardContent>
                </Card>
            </div>

            <Tabs defaultValue="overview" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="audience">Audience</TabsTrigger>
                    <TabsTrigger value="performance">Product Performance</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                        <Card className="col-span-4">
                            <CardHeader>
                                <CardTitle>Revenue vs Target</CardTitle>
                                <CardDescription>Monthly revenue realization compared to projected targets.</CardDescription>
                            </CardHeader>
                            <CardContent className="pl-2">
                                <div className="h-[350px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={monthlyRevenue}>
                                            <defs>
                                                <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.8} />
                                                    <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                                                </linearGradient>
                                                <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="var(--color-warning)" stopOpacity={0.1} />
                                                    <stop offset="95%" stopColor="var(--color-warning)" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                                            <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
                                            <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                            <Area type="monotone" dataKey="target" stroke="var(--color-warning)" fillOpacity={1} fill="url(#colorTarget)" strokeDasharray="5 5" />
                                            <Area type="monotone" dataKey="total" stroke="var(--primary)" fillOpacity={1} fill="url(#colorTotal)" />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="col-span-3">
                            <CardHeader>
                                <CardTitle>Booking Sources</CardTitle>
                                <CardDescription>Where are transactions originating?</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="h-[350px] flex items-center justify-center relative">
                                    {/* Simplified visual representation for the pie chart using standard DOM to avoid SVG complexity here for now */}
                                    <div className="w-48 h-48 rounded-full border-[16px] border-primary relative flex items-center justify-center">
                                        <div className="absolute top-0 right-0 w-1/2 h-full border-[16px] border-warning rounded-r-full border-l-0 clip-right" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }} />
                                        <div className="text-center">
                                            <span className="text-3xl font-bold">12.2k</span>
                                            <span className="block text-xs text-muted-foreground mt-1">Bookings</span>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-4 w-full px-8">
                                        <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                                            <li className="flex items-center"><div className="w-3 h-3 rounded-full bg-primary mr-2" /> Direct B2C (45%)</li>
                                            <li className="flex items-center"><div className="w-3 h-3 rounded-full bg-warning mr-2" /> Agent Portal (35%)</li>
                                            <li className="flex items-center"><div className="w-3 h-3 rounded-full bg-success mr-2" /> API (15%)</li>
                                            <li className="flex items-center"><div className="w-3 h-3 rounded-full bg-muted-foreground/50 mr-2" /> Corp (5%)</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}
