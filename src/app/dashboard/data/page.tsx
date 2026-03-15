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
import { Search, Database, HardDrive, RefreshCw, UploadCloud, DownloadCloud, FileJson, FileType2 } from "lucide-react"

const datasets = [
    { id: "DS-01", name: "Master Booking Ledger", records: "1.2M", size: "4.5 GB", lastSync: "10 mins ago", status: "Healthy" },
    { id: "DS-02", name: "Global Inventory Cache", records: "450K", size: "1.2 GB", lastSync: "1 hour ago", status: "Syncing" },
    { id: "DS-03", name: "Customer CRM Data", records: "85K", size: "850 MB", lastSync: "2 hours ago", status: "Healthy" },
    { id: "DS-04", name: "Historical pricing & Rates", records: "12M", size: "45 GB", lastSync: "1 day ago", status: "Warning" },
    { id: "DS-05", name: "Supplier Agreements", records: "4.2K", size: "150 MB", lastSync: "5 days ago", status: "Healthy" },
]

export default function DataRecordsPage() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Data Records Center</h2>
                    <p className="text-muted-foreground">Manage databases, data warehousing, and synchronizations.</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Button variant="outline"><UploadCloud className="mr-2 h-4 w-4" /> Import Data</Button>
                    <Button><Database className="mr-2 h-4 w-4" /> Configure Source</Button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Storage Used</CardTitle>
                        <HardDrive className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">51.7 GB</div>
                        <p className="text-xs text-muted-foreground mt-1 text-success">48.3 GB Available</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Records</CardTitle>
                        <FileJson className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">13.7M</div>
                        <p className="text-xs text-muted-foreground mt-1">Across all datasets</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Syncs</CardTitle>
                        <RefreshCw className="h-4 w-4 text-primary animate-spin-slow" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1</div>
                        <p className="text-xs text-muted-foreground mt-1">Global Inventory Cache</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">API Exports (24h)</CardTitle>
                        <DownloadCloud className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">142.5 GB</div>
                        <p className="text-xs text-muted-foreground mt-1">Bandwidth usage normal</p>
                    </CardContent>
                </Card>
            </div>

            <div className="flex items-center space-x-2 py-4">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search databases, tables..." className="pl-9" />
                </div>
            </div>

            <Card>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Dataset Name</TableHead>
                            <TableHead>System ID</TableHead>
                            <TableHead className="text-right">Record Count</TableHead>
                            <TableHead className="text-right">Data Size</TableHead>
                            <TableHead>Last Synchronized</TableHead>
                            <TableHead>Health Status</TableHead>
                            <TableHead className="w-[100px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {datasets.map((ds) => (
                            <TableRow key={ds.id}>
                                <TableCell className="font-medium text-primary hover:underline cursor-pointer flex items-center gap-2">
                                    <FileType2 className="h-4 w-4 text-muted-foreground" />
                                    {ds.name}
                                </TableCell>
                                <TableCell className="font-mono text-xs text-muted-foreground">{ds.id}</TableCell>
                                <TableCell className="text-right font-medium">{ds.records}</TableCell>
                                <TableCell className="text-right text-muted-foreground">{ds.size}</TableCell>
                                <TableCell className="text-muted-foreground text-sm">{ds.lastSync}</TableCell>
                                <TableCell>
                                    <Badge variant={
                                        ds.status === 'Healthy' ? 'success' :
                                            ds.status === 'Warning' ? 'destructive' : 'secondary'
                                    }>
                                        {ds.status === 'Syncing' && <RefreshCw className="mr-1 h-3 w-3 animate-spin" />}
                                        {ds.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <Button variant="outline" size="sm" className="text-xs">Manage</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </div>
    )
}
