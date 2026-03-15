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
import { Search, Plus, Filter, Star, Clock } from "lucide-react"

const suppliers = [
    { id: "SUP-01", name: "Marriott International", type: "Hotel Chain", rating: 4.8, contracts: 12, responseTime: "2 hours", status: "Active" },
    { id: "SUP-02", name: "Emirates Airlines", type: "Flight Carrier", rating: 4.9, contracts: 3, responseTime: "1 hour", status: "Active" },
    { id: "SUP-03", name: "Hertz Rent-A-Car", type: "Transport", rating: 4.2, contracts: 5, responseTime: "4 hours", status: "Active" },
    { id: "SUP-04", name: "Local Tours Bali", type: "Activity Provider", rating: 4.5, contracts: 2, responseTime: "12 hours", status: "Review" },
    { id: "SUP-05", name: "Seaside Resorts", type: "Boutique Hotel", rating: 3.8, contracts: 1, responseTime: "24 hours", status: "Inactive" },
]

export default function SuppliersPage() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Supplier Relationship Management</h2>
                <div className="flex items-center space-x-2">
                    <Button><Plus className="mr-2 h-4 w-4" /> Add Supplier</Button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Suppliers</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">142</div>
                        <p className="text-xs text-muted-foreground mt-1">+4 this month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Contracts</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">3,109</div>
                        <p className="text-xs text-muted-foreground mt-1">12 expiring soon</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Avg Rating</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold flex items-center">
                            4.6 <Star className="ml-1 h-5 w-5 text-warning fill-warning" />
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Avg Response Rate</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold flex items-center">
                            4.2h <Clock className="ml-2 h-5 w-5 text-muted-foreground" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="flex items-center space-x-2 py-4">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search suppliers..." className="pl-9" />
                </div>
                <Button variant="outline"><Filter className="mr-2 h-4 w-4" /> Filter By Type</Button>
            </div>

            <Card>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Supplier Name</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Rating</TableHead>
                            <TableHead className="text-right">Active Contracts</TableHead>
                            <TableHead>Response Time</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {suppliers.map((supplier) => (
                            <TableRow key={supplier.id}>
                                <TableCell>
                                    <div className="font-medium text-primary hover:underline cursor-pointer">{supplier.name}</div>
                                    <div className="text-xs text-muted-foreground">{supplier.id}</div>
                                </TableCell>
                                <TableCell>{supplier.type}</TableCell>
                                <TableCell>
                                    <div className="flex items-center">
                                        <Star className="mr-1 h-3 w-3 text-warning fill-warning" />
                                        {supplier.rating}
                                    </div>
                                </TableCell>
                                <TableCell className="text-right">{supplier.contracts}</TableCell>
                                <TableCell>{supplier.responseTime}</TableCell>
                                <TableCell>
                                    <Badge variant={supplier.status === 'Active' ? 'success' : supplier.status === 'Review' ? 'warning' : 'secondary'}>
                                        {supplier.status}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </div>
    )
}
