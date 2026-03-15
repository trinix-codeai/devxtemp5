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
import { Search, Shield, AlertTriangle, Activity, Lock, Users, Fingerprint } from "lucide-react"

const logs = [
    { id: "LOG-9921", time: "10:45:22", user: "admin@travel.com", action: "Updated Role", entity: "AGT-004", status: "Success", ip: "192.168.1.45" },
    { id: "LOG-9920", time: "10:32:15", user: "System", action: "Automated Backup", entity: "DB-Main", status: "Success", ip: "Internal" },
    { id: "LOG-9919", time: "09:15:02", user: "Unknown", action: "Failed Login", entity: "API-02", status: "Failed", ip: "45.22.11.90" },
    { id: "LOG-9918", time: "08:45:33", user: "finance@travel.com", action: "Exported Data", entity: "Ledger Q1", status: "Success", ip: "192.168.1.12" },
    { id: "LOG-9917", time: "08:10:05", user: "system", action: "Permission Sync", entity: "OAuth", status: "Success", ip: "Internal" },
]

export default function CompliancePage() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Compliance & Security</h2>
                    <p className="text-muted-foreground">Monitor system access, review audit logs, and manage data policies.</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Button variant="outline"><Fingerprint className="mr-2 h-4 w-4" /> Run Security Swap</Button>
                    <Button><Shield className="mr-2 h-4 w-4" /> Update Policies</Button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Security Score</CardTitle>
                        <Shield className="h-4 w-4 text-success" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-success">98/100</div>
                        <p className="text-xs text-muted-foreground mt-1">Excellent standing</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Anomalies</CardTitle>
                        <AlertTriangle className="h-4 w-4 text-warning" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-warning">2</div>
                        <p className="text-xs text-muted-foreground mt-1">Requires review</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,204</div>
                        <p className="text-xs text-muted-foreground mt-1">Across all portals</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Data Retention</CardTitle>
                        <Lock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">GDPR Compliant</div>
                        <p className="text-xs text-muted-foreground mt-1">Auto-purge active</p>
                    </CardContent>
                </Card>
            </div>

            <Tabs defaultValue="audit" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="audit">Audit Logs</TabsTrigger>
                    <TabsTrigger value="roles">Access Control</TabsTrigger>
                    <TabsTrigger value="gdpr">GDPR / CCPA</TabsTrigger>
                </TabsList>
                <TabsContent value="audit" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>System Audit Trail</CardTitle>
                            <CardDescription>Chronological record of all system activities and events.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center space-x-2 py-4">
                                <div className="relative flex-1 max-w-sm">
                                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input placeholder="Search logs by user, action..." className="pl-9" />
                                </div>
                            </div>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Time</TableHead>
                                        <TableHead>User / Identifier</TableHead>
                                        <TableHead>Action</TableHead>
                                        <TableHead>Target Entity</TableHead>
                                        <TableHead>IP Address</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {logs.map((log) => (
                                        <TableRow key={log.id}>
                                            <TableCell className="text-muted-foreground whitespace-nowrap">{log.time}</TableCell>
                                            <TableCell className="font-medium">{log.user}</TableCell>
                                            <TableCell>{log.action}</TableCell>
                                            <TableCell className="text-muted-foreground">{log.entity}</TableCell>
                                            <TableCell className="font-mono text-xs">{log.ip}</TableCell>
                                            <TableCell>
                                                <Badge variant={log.status === 'Success' ? 'success' : 'destructive'}>
                                                    {log.status}
                                                </Badge>
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
