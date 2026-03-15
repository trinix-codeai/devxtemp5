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
import { ArrowUpRight, ArrowDownRight, Download, Filter } from "lucide-react"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts"

const cashFlowData = [
    { name: 'Jan', in: 4000, out: 2400 },
    { name: 'Feb', in: 3000, out: 1398 },
    { name: 'Mar', in: 2000, out: 9800 },
    { name: 'Apr', in: 2780, out: 3908 },
    { name: 'May', in: 1890, out: 4800 },
    { name: 'Jun', in: 2390, out: 3800 },
    { name: 'Jul', in: 3490, out: 4300 },
];

const transactions = [
    { id: "TX-1029", date: "2024-03-20 14:30", description: "B2C Booking #BK-9021", amount: "$1,250.00", type: "Credit", status: "Completed" },
    { id: "TX-1028", date: "2024-03-20 10:15", description: "Supplier Payout - Marriott", amount: "-$4,500.00", type: "Debit", status: "Pending" },
    { id: "TX-1027", date: "2024-03-19 16:45", description: "B2B Agent Commission", amount: "-$350.00", type: "Debit", status: "Completed" },
    { id: "TX-1026", date: "2024-03-19 09:20", description: "Corporate Block Booking", amount: "$8,400.00", type: "Credit", status: "Completed" },
    { id: "TX-1025", date: "2024-03-18 11:10", description: "Refund Request #RF-221", amount: "-$150.00", type: "Debit", status: "Processing" },
]

export default function FinancialCenterPage() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Financial Control Center</h2>
                <div className="flex items-center space-x-2">
                    <Button variant="outline"><Filter className="mr-2 h-4 w-4" /> Filter</Button>
                    <Button><Download className="mr-2 h-4 w-4" /> Export Report</Button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$124,562.00</div>
                        <p className="text-xs text-muted-foreground flex items-center text-success mt-1">
                            <ArrowUpRight className="mr-1 h-3 w-3" /> +12.5% from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Pending Payables</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-warning">$45,231.00</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            12 invoices due this week
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Aging Receivables</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-error">$12,040.00</div>
                        <p className="text-xs text-muted-foreground flex items-center text-error mt-1">
                            <ArrowUpRight className="mr-1 h-3 w-3" /> +4.2% from last month
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Cash Flow Projection</CardTitle>
                        <CardDescription>Inflows vs Outflows for the next 6 months</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={cashFlowData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} fontSize={12} />
                                    <YAxis axisLine={false} tickLine={false} fontSize={12} tickFormatter={(v) => `$${v / 1000}k`} />
                                    <Tooltip cursor={{ fill: 'transparent' }} />
                                    <Legend iconType="circle" />
                                    <Bar dataKey="in" name="Inflow" fill="var(--color-success)" radius={[4, 4, 0, 0]} />
                                    <Bar dataKey="out" name="Outflow" fill="var(--color-error)" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Transactions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-8">
                            {transactions.slice(0, 4).map((tx) => (
                                <div key={tx.id} className="flex items-center">
                                    <div className={`mr-4 rounded-full p-2 ${tx.type === 'Credit' ? 'bg-success/20 text-success' : 'bg-error/20 text-error'}`}>
                                        {tx.type === 'Credit' ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                                    </div>
                                    <div className="space-y-1 flex-1">
                                        <p className="text-sm font-medium leading-none">{tx.description}</p>
                                        <p className="text-sm text-muted-foreground">{tx.date}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-medium text-sm">{tx.amount}</div>
                                        <Badge variant="outline" className="mt-1 text-[10px] h-4 py-0">
                                            {tx.status}
                                        </Badge>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>All Transactions Ledger</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>ID</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {transactions.map((tx) => (
                                <TableRow key={tx.id}>
                                    <TableCell className="text-muted-foreground">{tx.date}</TableCell>
                                    <TableCell className="font-medium text-primary cursor-pointer hover:underline">{tx.id}</TableCell>
                                    <TableCell>{tx.description}</TableCell>
                                    <TableCell>
                                        <Badge variant={tx.status === 'Completed' ? 'success' : tx.status === 'Pending' ? 'warning' : 'secondary'}>
                                            {tx.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className={`text-right font-medium ${tx.type === 'Credit' ? 'text-success' : ''}`}>
                                        {tx.amount}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
