"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bell, BellRing, AlertTriangle, ShieldCheck, Info, Search, Filter, MoreHorizontal, CheckCircle2, Activity } from "lucide-react"

const alerts = [
    { id: "ALT-01", type: "Security", title: "Suspicious Login Attempt", desc: "Detected connection from unknown IP in Singapore.", severity: "High", time: "2 mins ago", status: "New" },
    { id: "ALT-02", type: "System", title: "API Quota Warning", desc: "Sabre GDS endpoint reaching 95% of daily limit.", severity: "Medium", time: "15 mins ago", status: "New" },
    { id: "ALT-03", type: "Financial", title: "Payment Failure Spike", desc: "Booking conversion dropped 15% in last hour.", severity: "High", time: "45 mins ago", status: "Investigating" },
    { id: "ALT-04", type: "Inventory", title: "Product Stock Sync Error", desc: "Delta failed between CRS and local bedbank cache.", severity: "Medium", time: "2 hours ago", status: "Acknowledged" },
    { id: "ALT-05", type: "Audit", title: "Compliance Review Required", desc: "GDPR policy update pending for German market.", severity: "Low", time: "1 day ago", status: "Acknowledged" },
]

export default function DashboardAlertsPage() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">System Alerts</h2>
                    <p className="text-muted-foreground">Centralized monitoring for security, performance, and financial anomalies.</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Button variant="outline"><CheckCircle2 className="mr-2 h-4 w-4" /> Resolve All</Button>
                    <Button><BellRing className="mr-2 h-4 w-4" /> Notification Settings</Button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Unread Alerts</CardTitle>
                        <Bell className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-muted-foreground mt-1 text-error font-medium">4 Critical Priority</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Avg Resolution Time</CardTitle>
                        <ShieldCheck className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">18m</div>
                        <p className="text-xs text-muted-foreground mt-1">Improved by 12%</p>
                    </CardContent>
                </Card>
            </div>

            <div className="flex items-center space-x-2 py-4">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input placeholder="Search alerts..." className="flex h-9 w-full rounded-md border border-input bg-background pl-9 pr-3 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" />
                </div>
                <Button variant="outline"><Filter className="mr-2 h-4 w-4" /> Filter Priority</Button>
            </div>

            <div className="space-y-4">
                {alerts.map((alert) => (
                    <Card key={alert.id} className={`border-l-4 ${alert.severity === 'High' ? 'border-l-error' : alert.severity === 'Medium' ? 'border-l-warning' : 'border-l-blue-400'}`}>
                        <CardContent className="p-0">
                            <div className="flex items-start justify-between p-6">
                                <div className="flex items-start gap-4">
                                    <div className={`mt-1 p-2 rounded-full ${alert.severity === 'High' ? 'bg-error/10 text-error' : alert.severity === 'Medium' ? 'bg-warning/10 text-warning' : 'bg-blue-100 text-blue-600'}`}>
                                        {alert.type === 'Security' ? <ShieldCheck className="h-5 w-5" /> : alert.type === 'System' ? <Activity className="h-5 w-5" /> : alert.type === 'Financial' ? <AlertTriangle className="h-5 w-5" /> : <Info className="h-5 w-5" />}
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <h4 className="font-semibold text-lg">{alert.title}</h4>
                                            <Badge variant={alert.status === 'New' ? 'destructive' : alert.status === 'Investigating' ? 'warning' : 'secondary'}>{alert.status}</Badge>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{alert.desc}</p>
                                        <div className="flex items-center gap-4 pt-2 text-xs text-muted-foreground">
                                            <span className="font-mono">{alert.id}</span>
                                            <span>•</span>
                                            <span>{alert.time}</span>
                                            <span>•</span>
                                            <span className="font-medium text-foreground">{alert.type} Category</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm">Acknowledge</Button>
                                    <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
