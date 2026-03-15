import Link from "next/link"
import { LayoutDashboard, Users, CreditCard, Box, Settings, Map, FileText, CheckSquare, Bell, Globe, ShieldCheck, Database, FileJson, Activity } from "lucide-react"

export interface SidebarItem {
    name: string
    href: string
    icon: React.ElementType
}

const adminNavigation: SidebarItem[] = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Agent Management', href: '/admin/agents', icon: Users },
    { name: 'Financials', href: '/admin/financials', icon: CreditCard },
    { name: 'Suppliers', href: '/admin/suppliers', icon: Users },
    { name: 'Products', href: '/admin/products', icon: Box },
    { name: 'Channels', href: '/admin/channels', icon: Globe },
    { name: 'Compliance', href: '/admin/compliance', icon: ShieldCheck },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
]

const agentNavigation: SidebarItem[] = [
    { name: 'Dashboard', href: '/agent', icon: LayoutDashboard },
    { name: 'Bookings', href: '/agent/bookings', icon: Map },
    { name: 'Customers', href: '/agent/customers', icon: Users },
    { name: 'Tasks', href: '/agent/tasks', icon: CheckSquare },
]

const dashboardNavigation: SidebarItem[] = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Analytics', href: '/dashboard/analytics', icon: LayoutDashboard },
    { name: 'Billing', href: '/dashboard/billing', icon: FileText },
    { name: 'Data', href: '/dashboard/data', icon: Database },
    { name: 'Users', href: '/dashboard/users', icon: Users },
    { name: 'Reports', href: '/dashboard/reports', icon: FileJson },
    { name: 'Health', href: '/dashboard/health', icon: Activity },
    { name: 'Alerts', href: '/dashboard/alerts', icon: Bell },
]

export function Sidebar({ portal }: { portal: 'admin' | 'agent' | 'dashboard' }) {
    let navigation = adminNavigation
    if (portal === 'agent') navigation = agentNavigation
    if (portal === 'dashboard') navigation = dashboardNavigation

    return (
        <div className="flex h-full w-64 flex-col border-r bg-card text-card-foreground">
            <div className="flex h-16 items-center border-b px-6">
                <span className="text-lg font-bold uppercase tracking-wider text-primary">Travel OS</span>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
                <nav className="space-y-1 px-4">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                        >
                            <item.icon className="mr-3 h-5 w-5 flex-shrink-0 text-muted-foreground group-hover:text-accent-foreground" />
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
            <div className="border-t p-4">
                <div className="flex items-center">
                    <div className="ml-3">
                        <p className="text-sm font-medium">{portal === 'admin' ? 'Admin User' : portal === 'agent' ? 'Agent User' : 'Dashboard User'}</p>
                        <p className="text-xs text-muted-foreground">View profile</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
