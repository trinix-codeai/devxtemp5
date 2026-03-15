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
import { Search, Plus, Filter, MoreHorizontal, UserCog, ShieldAlert, KeyRound, MonitorSmartphone } from "lucide-react"

const users = [
  { id: "USR-001", name: "David Chen", email: "d.chen@travelos.com", role: "Super Admin", department: "IT Ops", status: "Active", lastLogin: "10 mins ago" },
  { id: "USR-002", name: "Sarah Jenkins", email: "s.jenkins@travelos.com", role: "Agent Lead", department: "Sales", status: "Active", lastLogin: "1 hour ago" },
  { id: "USR-003", name: "Michael Chang", email: "m.chang@travelos.com", role: "Finance Mgr", department: "Finance", status: "Active", lastLogin: "2 hours ago" },
  { id: "USR-004", name: "Emma Watson", email: "e.watson@travelos.com", role: "Support Agent", department: "Cust Success", status: "Locked", lastLogin: "3 days ago" },
  { id: "USR-005", name: "Alex Rodriguez", email: "a.rodriguez@travelos.com", role: "Data Analyst", department: "Analytics", status: "Inactive", lastLogin: "1 month ago" },
]

export default function UsersPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">User Administration</h2>
          <p className="text-muted-foreground">Manage internal users, roles, and access control policies.</p>
        </div>
        <div className="flex items-center space-x-2">
           <Button variant="outline"><KeyRound className="mr-2 h-4 w-4" /> Roles</Button>
           <Button><Plus className="mr-2 h-4 w-4" /> Add User</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Internal Users</CardTitle>
            <UserCog className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
             <div className="text-2xl font-bold">142</div>
             <p className="text-xs text-muted-foreground mt-1">Across all departments</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
            <MonitorSmartphone className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
             <div className="text-2xl font-bold">89</div>
             <p className="text-xs text-muted-foreground mt-1 text-success">Normal capacity</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Locked Accounts</CardTitle>
            <ShieldAlert className="h-4 w-4 text-error" />
          </CardHeader>
          <CardContent>
             <div className="text-2xl font-bold text-error">3</div>
             <p className="text-xs text-muted-foreground mt-1 text-warning">Security review required</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center space-x-2 py-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search name, email, or role..." className="pl-9" />
        </div>
        <Button variant="outline"><Filter className="mr-2 h-4 w-4" /> Filter Department</Button>
      </div>

      <Card>
         <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-xs text-muted-foreground">{user.email}</div>
                  </TableCell>
                  <TableCell>
                     <Badge variant="outline" className={user.role === 'Super Admin' ? 'border-primary text-primary bg-primary/10' : ''}>
                        {user.role}
                     </Badge>
                  </TableCell>
                  <TableCell>{user.department}</TableCell>
                  <TableCell>
                    <Badge variant={
                        user.status === 'Active' ? 'success' : 
                        user.status === 'Locked' ? 'destructive' : 'secondary'
                    }>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">{user.lastLogin}</TableCell>
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
