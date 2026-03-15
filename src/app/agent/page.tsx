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
import { ArrowRight, Calendar, MessageSquare, AlertCircle, Plane, Clock } from "lucide-react"

const recentBookings = [
    { id: "BK-9021", client: "Emily Chen", destination: "Tokyo, Japan", date: "Oct 15 - Oct 22", status: "Confirmed", amount: "$3,450" },
    { id: "BK-9020", client: "Robert Davis", destination: "London, UK", date: "Nov 02 - Nov 10", status: "Pending", amount: "$2,100" },
    { id: "BK-9019", client: "Sarah Miller", destination: "Cancun, Mexico", date: "Dec 20 - Dec 27", status: "Deposit Paid", amount: "$4,200" },
    { id: "BK-9018", client: "James Wilson", destination: "Paris, France", date: "Sep 05 - Sep 12", status: "Completed", amount: "$2,850" },
]

export default function AgentDashboardPage() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Agent Dashboard</h2>
                <div className="flex items-center space-x-2">
                    <Button>New Booking <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Monthly Sales</CardTitle>
                        <Plane className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$124,500</div>
                        <p className="text-xs text-muted-foreground mt-1 text-success">112% to goal</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Bookings</CardTitle>
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">42</div>
                        <p className="text-xs text-muted-foreground mt-1">Departing next 30 days</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">New Messages</CardTitle>
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">6</div>
                        <p className="text-xs text-muted-foreground mt-1 text-warning">2 require immediate attention</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
                        <AlertCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-warning">14</div>
                        <p className="text-xs text-muted-foreground mt-1">3 overdue</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Recent Bookings</CardTitle>
                        <CardDescription>Your latest sales and active trips.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>ID</TableHead>
                                    <TableHead>Client</TableHead>
                                    <TableHead>Destination</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {recentBookings.map((booking) => (
                                    <TableRow key={booking.id}>
                                        <TableCell className="font-medium text-primary">{booking.id}</TableCell>
                                        <TableCell>{booking.client}</TableCell>
                                        <TableCell>
                                            <div className="font-medium">{booking.destination}</div>
                                            <div className="text-xs text-muted-foreground">{booking.date}</div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant={booking.status === 'Confirmed' || booking.status === 'Completed' ? 'success' : booking.status === 'Pending' ? 'warning' : 'secondary'}>
                                                {booking.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right font-medium">{booking.amount}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Priority Tasks</CardTitle>
                        <CardDescription>Action items needing your attention today.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3 rounded-md border p-3 border-error/50 bg-error/5">
                                <Clock className="h-5 w-5 text-error mt-0.5" />
                                <div className="flex-1 space-y-1 text-sm">
                                    <p className="font-medium">Final Payment Due - BK-9012</p>
                                    <p className="text-muted-foreground line-clamp-1">Follow up with client regarding outstanding balance of $1,200.</p>
                                    <div className="flex gap-2 mt-2">
                                        <Button size="sm" variant="outline" className="h-7 text-xs">Call Client</Button>
                                        <Button size="sm" variant="default" className="h-7 text-xs">Mark Done</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3 rounded-md border p-3">
                                <AlertCircle className="h-5 w-5 text-warning mt-0.5" />
                                <div className="flex-1 space-y-1 text-sm">
                                    <p className="font-medium">Send Itinerary - BK-9021</p>
                                    <p className="text-muted-foreground line-clamp-1">Finalize flight arrangements and send to Emily Chen.</p>
                                    <div className="flex gap-2 mt-2">
                                        <Button size="sm" variant="outline" className="h-7 text-xs">View Booking</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3 rounded-md border p-3">
                                <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                                <div className="flex-1 space-y-1 text-sm">
                                    <p className="font-medium">Welcome Back Call</p>
                                    <p className="text-muted-foreground line-clamp-1">Call James Wilson returning from Paris today.</p>
                                    <div className="flex gap-2 mt-2">
                                        <Button size="sm" variant="outline" className="h-7 text-xs">View Profile</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
