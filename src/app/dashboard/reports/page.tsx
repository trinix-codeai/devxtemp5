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
import { Input } from "@/components/ui/input"
import { FileBarChart2, Download, Search, Plus, Calendar, Filter, Clock, Save } from "lucide-react"

const savedReports = [
    { id: "RPT-01", name: "Monthly Agent Performance", schedule: "1st of Month", format: "PDF, Excel", lastRun: "Oct 1, 2024", author: "d.chen" },
    { id: "RPT-02", name: "Q3 Financial Recon", schedule: "Quarterly", format: "CSV", lastRun: "Oct 5, 2024", author: "finance_bot" },
    { id: "RPT-03", name: "Top 100 VIP Clients by LTV", schedule: "Weekly (Mon)", format: "Excel", lastRun: "Oct 21, 2024", author: "s.jenkins" },
    { id: "RPT-04", name: "Daily Booking Snapshot", schedule: "Daily (23:59)", format: "PDF", lastRun: "Yesterday", author: "system" },
]

export default function CustomReportingPage() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Custom Reporting</h2>
                    <p className="text-muted-foreground">Build, schedule, and export tailored data insights.</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Button><Plus className="mr-2 h-4 w-4" /> Create New Report</Button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Report Builder</CardTitle>
                        <CardDescription>Configure data sources and parameters for a custom export.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-4 border rounded-md p-4 bg-muted/20">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Data Source</label>
                                    <select className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
                                        <option>Master Booking Ledger</option>
                                        <option>Financial Transactions</option>
                                        <option>Agent Directory</option>
                                        <option>Customer Profiles</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Date Range</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <Input placeholder="Select range..." className="pl-9" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Columns to Include</label>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary" className="cursor-pointer">Booking ID x</Badge>
                                    <Badge variant="secondary" className="cursor-pointer">Client Name x</Badge>
                                    <Badge variant="secondary" className="cursor-pointer">Total Amount x</Badge>
                                    <Badge variant="secondary" className="cursor-pointer">Agent ID x</Badge>
                                    <Badge variant="secondary" className="cursor-pointer">Commission x</Badge>
                                    <Badge variant="outline" className="border-dashed cursor-pointer"><Plus className="h-3 w-3 mr-1" /> Add Column</Badge>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-2">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Export Format</label>
                                    <div className="flex gap-2">
                                        <Button variant="outline" size="sm" className="flex-1 bg-primary/10 border-primary text-primary">CSV</Button>
                                        <Button variant="outline" size="sm" className="flex-1">Excel</Button>
                                        <Button variant="outline" size="sm" className="flex-1">PDF</Button>
                                    </div>
                                </div>
                                <div className="flex items-end justify-end space-x-2">
                                    <Button variant="secondary" className="w-full">Preview Data</Button>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center pt-2">
                            <Button variant="outline"><Save className="mr-2 h-4 w-4" /> Save Configuration</Button>
                            <Button><Download className="mr-2 h-4 w-4" /> Generate Report</Button>
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Saved & Scheduled Reports</CardTitle>
                        <CardDescription>Templates you or your team have created.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input placeholder="Filter reports..." className="pl-9" />
                            </div>

                            <div className="space-y-3 pt-2">
                                {savedReports.map((report) => (
                                    <div key={report.id} className="group flex flex-col space-y-2 rounded-md border p-3 hover:border-primary transition-colors cursor-pointer">
                                        <div className="flex justify-between items-start">
                                            <h4 className="font-medium text-sm text-primary flex items-center">
                                                <FileBarChart2 className="mr-2 h-4 w-4 text-muted-foreground" />
                                                {report.name}
                                            </h4>
                                            <Badge variant="outline" className="text-[10px] uppercase font-mono">{report.format}</Badge>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                                            <span className="flex items-center"><Clock className="mr-1 h-3 w-3" /> {report.schedule}</span>
                                            <span className="text-right">Last: {report.lastRun}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

        </div>
    )
}
