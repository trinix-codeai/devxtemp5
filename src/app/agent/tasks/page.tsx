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
import { CheckCircle2, Clock, CheckSquare, Plus, MoreHorizontal, CalendarIcon } from "lucide-react"

const tasks = [
    { id: "TSK-01", title: "Final Payment Reminder - BK-9012", desc: "Call Emily Chen regarding final $1,200 balance.", priority: "High", dueDate: "Today, 14:00", status: "Incomplete" },
    { id: "TSK-02", title: "Waitlist Clearance - BK-8841", desc: "Check if the overwater villa is available for the Miller family.", priority: "High", dueDate: "Today, 16:00", status: "Incomplete" },
    { id: "TSK-03", title: "Welcome Home Email", desc: "Send automated 'Welcome Home' template to the Davis group.", priority: "Normal", dueDate: "Tomorrow", status: "Incomplete" },
    { id: "TSK-04", title: "Process Refund Request", desc: "Follow up with accounting on refund for canceled flight segment.", priority: "Normal", dueDate: "Oct 25", status: "Incomplete" },
    { id: "TSK-05", title: "Send Itinerary Draft", desc: "Draft sent to VIP client for review.", priority: "Low", dueDate: "Oct 26", status: "Completed" },
]

export default function TasksPage() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Task Management</h2>
                    <p className="text-muted-foreground">Keep track of your daily action items and follow-ups.</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Button><Plus className="mr-2 h-4 w-4" /> New Task</Button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">To-Do Today</CardTitle>
                        <Clock className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">5</div>
                        <p className="text-xs text-muted-foreground mt-1 text-warning">2 High Priority</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Upcoming</CardTitle>
                        <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-muted-foreground mt-1">Next 7 days</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Completed</CardTitle>
                        <CheckSquare className="h-4 w-4 text-success" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">18</div>
                        <p className="text-xs text-muted-foreground mt-1">This week</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-4">
                    <h3 className="font-semibold text-lg flex justify-between items-center group">
                        Incomplete
                        <Badge>4</Badge>
                    </h3>
                    {tasks.filter(t => t.status === "Incomplete").map(task => (
                        <Card key={task.id} className="cursor-pointer hover:shadow-md transition-shadow">
                            <CardHeader className="p-4 pb-2">
                                <div className="flex justify-between items-start">
                                    <Badge variant={task.priority === 'High' ? 'destructive' : 'secondary'} className="mb-2">{task.priority}</Badge>
                                    <Button variant="ghost" size="icon" className="h-6 w-6 -mr-2 -mt-2"><MoreHorizontal className="h-4 w-4" /></Button>
                                </div>
                                <CardTitle className="text-base">{task.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                                <CardDescription className="line-clamp-2 mb-4">{task.desc}</CardDescription>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className={`text-xs font-medium flex items-center ${task.dueDate.includes('Today') ? 'text-error' : 'text-muted-foreground'}`}>
                                        <CalendarIcon className="mr-1 h-3 w-3" /> {task.dueDate}
                                    </span>
                                    <Button variant="outline" size="sm" className="h-7 text-xs border-dashed"><CheckCircle2 className="mr-1 h-3 w-3" /> Mark Done</Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="space-y-4">
                    <h3 className="font-semibold text-lg flex justify-between items-center group">
                        In Progress
                        <Badge variant="secondary">0</Badge>
                    </h3>
                    <div className="border-2 border-dashed border-muted rounded-lg h-32 flex items-center justify-center text-muted-foreground text-sm">
                        No tasks in progress
                    </div>
                </div>
                <div className="space-y-4 opacity-70">
                    <h3 className="font-semibold text-lg flex justify-between items-center group">
                        Completed
                        <Badge variant="secondary">1</Badge>
                    </h3>
                    {tasks.filter(t => t.status === "Completed").map(task => (
                        <Card key={task.id}>
                            <CardHeader className="p-4 pb-2">
                                <Badge variant="outline" className="mb-2 w-fit bg-success/10 text-success border-success/20">{task.priority}</Badge>
                                <CardTitle className="text-base line-through text-muted-foreground">{task.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-xs text-muted-foreground font-medium flex items-center">
                                        <CheckCircle2 className="mr-1 h-3 w-3 text-success" /> Done {task.dueDate}
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
