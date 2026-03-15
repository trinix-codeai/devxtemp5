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
import { Activity, Server, Database, Globe, RefreshCcw, Wifi, HardDrive, Cpu, ExternalLink } from "lucide-react"

const services = [
    { id: "SRV-01", name: "Core API Gateway", type: "Infrastructure", status: "Operational", uptime: "99.99%", latency: "45ms" },
    { id: "SRV-02", name: "Booking Engine", type: "Microservice", status: "Operational", uptime: "99.95%", latency: "120ms" },
    { id: "SRV-03", name: "User Auth (OAuth)", type: "Security", status: "Operational", uptime: "100.0%", latency: "15ms" },
    { id: "SRV-04", name: "Payment Processor", type: "Integration", status: "Degraded", uptime: "98.50%", latency: "850ms", error: "Elevated response times from upstream provider." },
    { id: "SRV-05", name: "Search & Indexing", type: "Microservice", status: "Operational", uptime: "99.90%", latency: "35ms" },
]

export default function SystemHealthPage() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">System Health & Metrics</h2>
                    <p className="text-muted-foreground">Monitor infrastructure, API uptime, and service latency in real-time.</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Button variant="outline"><RefreshCcw className="mr-2 h-4 w-4" /> Refresh Status</Button>
                    <Button><ExternalLink className="mr-2 h-4 w-4" /> View Status Page</Button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="border-success">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Overall System Status</CardTitle>
                        <Activity className="h-4 w-4 text-success" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-success">All Systems Operational</div>
                        <p className="text-xs text-muted-foreground mt-1">1 minor degradation noted</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Average Response Time</CardTitle>
                        <Wifi className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">145ms</div>
                        <p className="text-xs text-muted-foreground mt-1 text-warning">Elevated from normal (85ms)</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Global Error Rate (5m)</CardTitle>
                        <Server className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">0.02%</div>
                        <p className="text-xs text-muted-foreground mt-1">Below alert threshold of 1.0%</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Incidents</CardTitle>
                        <Server className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-warning">1</div>
                        <p className="text-xs text-muted-foreground mt-1">Investigating payment provider latency</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="col-span-2 space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Microservices & Integrations</CardTitle>
                            <CardDescription>Current status of internal services and external API connections.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {services.map(service => (
                                    <div key={service.id} className="flex flex-col space-y-2 border-b last:border-0 pb-4 last:pb-0">
                                        <div className="flex justify-between items-center group">
                                            <div className="flex items-center space-x-3">
                                                <div className={`h-2 w-2 rounded-full ${service.status === 'Operational' ? 'bg-success' : 'bg-warning animate-pulse'}`}></div>
                                                <h4 className="font-semibold">{service.name}</h4>
                                                <span className="text-xs text-muted-foreground px-2 py-0.5 bg-muted rounded-full">{service.type}</span>
                                            </div>
                                            <div className="flex items-center space-x-6 text-sm">
                                                <div className="flex flex-col items-end">
                                                    <span className="text-muted-foreground text-xs">Uptime (30d)</span>
                                                    <span className="font-medium">{service.uptime}</span>
                                                </div>
                                                <div className="flex flex-col items-end">
                                                    <span className="text-muted-foreground text-xs">Latency (avg)</span>
                                                    <span className="font-medium">{service.latency}</span>
                                                </div>
                                            </div>
                                        </div>
                                        {service.status === 'Degraded' && (
                                            <div className="text-sm bg-warning/10 text-warning px-3 py-2 rounded-md border border-warning/20">
                                                <strong>Warning:</strong> {service.error}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Resource Utilization</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="flex items-center"><Cpu className="mr-2 h-4 w-4 text-muted-foreground" /> CPU Usage</span>
                                    <span className="font-medium">45%</span>
                                </div>
                                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-[45%] rounded-full"></div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="flex items-center"><Database className="mr-2 h-4 w-4 text-muted-foreground" /> Memory (RAM)</span>
                                    <span className="font-medium text-warning">82%</span>
                                </div>
                                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                    <div className="h-full bg-warning w-[82%] rounded-full"></div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="flex items-center"><HardDrive className="mr-2 h-4 w-4 text-muted-foreground" /> Disk Space</span>
                                    <span className="font-medium">28%</span>
                                </div>
                                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-[28%] rounded-full"></div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="flex items-center"><Globe className="mr-2 h-4 w-4 text-muted-foreground" /> Network I/O</span>
                                    <span className="font-medium">1.2 GB/s</span>
                                </div>
                                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-[65%] rounded-full"></div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
