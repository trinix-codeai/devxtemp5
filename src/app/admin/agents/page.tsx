"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Plus, MoreHorizontal } from "lucide-react"

const agents = [
    {
        id: "AGT-001",
        name: "Sarah Jenkins",
        email: "sarah.j@travelos.com",
        role: "Senior Agent",
        status: "Active",
        bookingsMtd: 45,
        revenueMtd: "$125,000",
    },
    {
        id: "AGT-002",
        name: "Michael Chen",
        email: "m.chen@travelos.com",
        role: "Travel Agent",
        status: "Active",
        bookingsMtd: 32,
        revenueMtd: "$89,400",
    },
    {
        id: "AGT-003",
        name: "Emma Watson",
        email: "emma.w@travelos.com",
        role: "Travel Agent",
        status: "On Leave",
        bookingsMtd: 0,
        revenueMtd: "$0",
    },
    {
        id: "AGT-004",
        name: "James Rodriguez",
        email: "j.rodriguez@travelos.com",
        role: "Junior Agent",
        status: "Active",
        bookingsMtd: 18,
        revenueMtd: "$42,100",
    },
    {
        id: "AGT-005",
        name: "Lisa Patel",
        email: "l.patel@travelos.com",
        role: "Corporate Specialist",
        status: "Active",
        bookingsMtd: 28,
        revenueMtd: "$210,500",
    },
]

export default function AgentManagementPage() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Agent Management</h2>
                    <p className="text-muted-foreground">Manage your travel agents, view performance, and assign leads.</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Button>
                        <Plus className="mr-2 h-4 w-4" /> Add Agent
                    </Button>
                </div>
            </div>

            <div className="flex items-center space-x-2 py-4">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search agents..." className="pl-9" />
                </div>
                <Button variant="outline">Filter</Button>
                <Button variant="outline">Export</Button>
            </div>

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Agent</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Bookings (MTD)</TableHead>
                            <TableHead className="text-right">Revenue (MTD)</TableHead>
                            <TableHead className="w-[50px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {agents.map((agent) => (
                            <TableRow key={agent.id}>
                                <TableCell>
                                    <div className="flex flex-col">
                                        <span className="font-medium">{agent.name}</span>
                                        <span className="text-xs text-muted-foreground">{agent.email}</span>
                                    </div>
                                </TableCell>
                                <TableCell>{agent.role}</TableCell>
                                <TableCell>
                                    <Badge variant={agent.status === 'Active' ? 'success' : 'secondary'}>
                                        {agent.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right font-medium">{agent.bookingsMtd}</TableCell>
                                <TableCell className="text-right font-medium">{agent.revenueMtd}</TableCell>
                                <TableCell>
                                    <Button variant="ghost" size="icon">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
