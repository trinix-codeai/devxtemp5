"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Globe, Network, Code, Server, CheckCircle2, XCircle } from "lucide-react"

const partners = [
    { id: "API-01", name: "Expedia Connect", type: "OTA", quota: "10,000/day", usage: "8,450", status: "Healthy" },
    { id: "API-02", name: "Local Agent Network", type: "B2B Portal", quota: "5,000/day", usage: "4,900", status: "Warning" },
    { id: "API-03", name: "Direct B2C App", type: "Mobile App", quota: "Unlimited", usage: "12,400", status: "Healthy" },
    { id: "API-04", name: "Corporate Booking Tech", type: "Third-party", quota: "1,000/day", usage: "1,200", status: "Limit Reached" },
]

export default function DistributionPage() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Distribution & Channels</h2>
                    <p className="text-muted-foreground">Manage API partners, channel visibility, and pricing matrices.</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Button><Code className="mr-2 h-4 w-4" /> Generate API Key</Button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">B2C Channels</CardTitle>
                        <Globe className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">Live</div>
                        <p className="text-xs text-muted-foreground mt-1">Direct website & mobile app</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">B2B Agent Portal</CardTitle>
                        <Network className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">14 Active</div>
                        <p className="text-xs text-muted-foreground mt-1">White-label sub-portals</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">API Requests (24h)</CardTitle>
                        <Server className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">26.9k</div>
                        <p className="text-xs text-muted-foreground mt-1">99.9% uptime</p>
                    </CardContent>
                </Card>
            </div>

            <Tabs defaultValue="partners" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="partners">API Partners</TabsTrigger>
                    <TabsTrigger value="visibility">Channel Visibility</TabsTrigger>
                    <TabsTrigger value="pricing">Pricing Matrix</TabsTrigger>
                </TabsList>
                <TabsContent value="partners" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Partner API Integrations</CardTitle>
                            <CardDescription>Manage third-party access to your inventory and rates.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Partner Name</TableHead>
                                        <TableHead>Integration Type</TableHead>
                                        <TableHead>Daily Quota</TableHead>
                                        <TableHead>Current Usage</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {partners.map((partner) => (
                                        <TableRow key={partner.id}>
                                            <TableCell>
                                                <div className="font-medium text-primary">{partner.name}</div>
                                                <div className="text-xs text-muted-foreground font-mono">{partner.id}</div>
                                            </TableCell>
                                            <TableCell>{partner.type}</TableCell>
                                            <TableCell>{partner.quota}</TableCell>
                                            <TableCell>
                                                <span className={partner.status === 'Warning' ? 'text-warning font-medium' : partner.status === 'Limit Reached' ? 'text-error font-medium' : ''}>
                                                    {partner.usage}
                                                </span>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center">
                                                    {partner.status === 'Healthy' ? <CheckCircle2 className="mr-1 h-4 w-4 text-success" /> : partner.status === 'Limit Reached' ? <XCircle className="mr-1 h-4 w-4 text-error" /> : null}
                                                    <Badge variant={partner.status === 'Healthy' ? 'success' : partner.status === 'Warning' ? 'warning' : 'destructive'}>
                                                        {partner.status}
                                                    </Badge>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
