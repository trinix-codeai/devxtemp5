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
import { Search, Plus, Filter, MoreHorizontal, Mail, Phone, MapPin, CalendarDays, Contact, Star } from "lucide-react"

const customers = [
    { id: "CLI-5921", name: "Emily Chen", type: "Leisure", tier: "VIP", email: "emily.chen@example.com", phone: "+1 (555) 123-4567", ltv: "$45,200", lastTrip: "Apr 12, 2024" },
    { id: "CLI-5922", name: "Robert Davis", type: "Corporate", tier: "Standard", email: "rdavis@techcorp.com", phone: "+1 (555) 987-6543", ltv: "$12,450", lastTrip: "Aug 05, 2024" },
    { id: "CLI-5923", name: "Sarah Miller", type: "Leisure", tier: "Premium", email: "sarah.m88@example.com", phone: "+44 7700 900077", ltv: "$28,100", lastTrip: "Jan 20, 2024" },
    { id: "CLI-5924", name: "James Wilson", type: "Leisure", tier: "Standard", email: "j.wilson99@example.com", phone: "+1 (555) 456-7890", ltv: "$4,200", lastTrip: "Sep 15, 2023" },
    { id: "CLI-5925", name: "TechCorp Inc.", type: "Group", tier: "VIP", email: "travel@techcorp.com", phone: "+1 (800) 555-CORP", ltv: "$156,000", lastTrip: "Mar 10, 2024" },
]

export default function CustomersPage() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Customer Management</h2>
                    <p className="text-muted-foreground">Directory of clients, booking histories, and VIP status.</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Button><Plus className="mr-2 h-4 w-4" /> New Client Profile</Button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">My Portfolio</CardTitle>
                        <Contact className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">342</div>
                        <p className="text-xs text-muted-foreground mt-1">Active clients managed</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">VIP Clients</CardTitle>
                        <Star className="h-4 w-4 text-warning fill-warning" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-warning">48</div>
                        <p className="text-xs text-muted-foreground mt-1">Generating 60% of revenue</p>
                    </CardContent>
                </Card>
            </div>

            <div className="flex items-center space-x-2 py-4">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search name, email, or ID..." className="pl-9" />
                </div>
                <Button variant="outline"><Filter className="mr-2 h-4 w-4" /> Filter By Tier</Button>
            </div>

            <Card>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Client Details</TableHead>
                            <TableHead>Contact Info</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Tier</TableHead>
                            <TableHead className="text-right">Lifetime Value</TableHead>
                            <TableHead className="text-right">Last Trip</TableHead>
                            <TableHead className="w-[50px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {customers.map((client) => (
                            <TableRow key={client.id}>
                                <TableCell>
                                    <div className="font-medium text-primary hover:underline cursor-pointer">{client.name}</div>
                                    <div className="text-xs text-muted-foreground mt-1">{client.id}</div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex flex-col gap-1 text-sm">
                                        <span className="flex items-center gap-2"><Mail className="h-3 w-3 text-muted-foreground" /> {client.email}</span>
                                        <span className="flex items-center gap-2"><Phone className="h-3 w-3 text-muted-foreground" /> {client.phone}</span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Badge variant="outline">{client.type}</Badge>
                                </TableCell>
                                <TableCell>
                                    <Badge variant={client.tier === 'VIP' ? 'warning' : client.tier === 'Premium' ? 'default' : 'secondary'}>
                                        {client.tier === 'VIP' && <Star className="mr-1 h-3 w-3 fill-current" />}
                                        {client.tier}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right font-medium">{client.ltv}</TableCell>
                                <TableCell className="text-right text-muted-foreground text-sm">{client.lastTrip}</TableCell>
                                <TableCell>
                                    <Button variant="ghost" size="icon">
                                        <MoreHorizontal className="h-4 w-4" />
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
