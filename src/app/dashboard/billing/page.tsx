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
import { Search, Download, FileText, CreditCard, DollarSign, Filter, RefreshCcw } from "lucide-react"

const invoices = [
    { id: "INV-2024-001", client: "TechCorp Inc.", status: "Paid", amount: "$12,450.00", date: "Oct 15, 2024", due: "Nov 14, 2024" },
    { id: "INV-2024-002", client: "Global Solutions Systems", status: "Overdue", amount: "$8,900.00", date: "Sep 01, 2024", due: "Oct 01, 2024" },
    { id: "INV-2024-003", client: "Sarah Miller (VIP)", status: "Pending", amount: "$4,200.00", date: "Oct 20, 2024", due: "Nov 19, 2024" },
    { id: "INV-2024-004", client: "Acme Corp Events", status: "Draft", amount: "$24,500.00", date: "-", due: "-" },
    { id: "INV-2024-005", client: "Robert Davis", status: "Paid", amount: "$2,100.00", date: "Oct 02, 2024", due: "Nov 01, 2024" },
]

export default function BillingPage() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Billing & Invoicing</h2>
                    <p className="text-muted-foreground">Manage accounts receivable, generate invoices, and track payments.</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Button variant="outline"><RefreshCcw className="mr-2 h-4 w-4" /> Sync ERP</Button>
                    <Button><FileText className="mr-2 h-4 w-4" /> Create Invoice</Button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Revenue (MTD)</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$145,231.89</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Outstanding A/R</CardTitle>
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$34,204.00</div>
                        <p className="text-xs text-muted-foreground mt-1">12 pending invoices</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Overdue Collections</CardTitle>
                        <DollarSign className="h-4 w-4 text-error" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-error">$8,900.00</div>
                        <p className="text-xs text-muted-foreground mt-1">1 invoice past due</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Draft Value</CardTitle>
                        <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$24,500.00</div>
                        <p className="text-xs text-muted-foreground mt-1">Pending approval</p>
                    </CardContent>
                </Card>
            </div>

            <div className="flex items-center space-x-2 py-4">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search invoice number, client..." className="pl-9" />
                </div>
                <Button variant="outline"><Filter className="mr-2 h-4 w-4" /> Filter Status</Button>
                <Button variant="outline"><Download className="mr-2 h-4 w-4" /> Export CSV</Button>
            </div>

            <Card>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Invoice ID</TableHead>
                            <TableHead>Client</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Issue Date</TableHead>
                            <TableHead>Due Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="w-[50px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice) => (
                            <TableRow key={invoice.id}>
                                <TableCell className="font-medium text-primary hover:underline cursor-pointer">{invoice.id}</TableCell>
                                <TableCell>{invoice.client}</TableCell>
                                <TableCell className="font-medium">{invoice.amount}</TableCell>
                                <TableCell className="text-muted-foreground">{invoice.date}</TableCell>
                                <TableCell className="text-muted-foreground">{invoice.due}</TableCell>
                                <TableCell>
                                    <Badge variant={
                                        invoice.status === 'Paid' ? 'success' :
                                            invoice.status === 'Overdue' ? 'destructive' :
                                                invoice.status === 'Pending' ? 'warning' : 'secondary'
                                    }>
                                        {invoice.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <Button variant="ghost" size="icon">
                                        <Download className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </div>
    )
}
