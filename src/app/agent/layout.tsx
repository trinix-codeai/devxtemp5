import { AppShell } from "@/components/layout/app-shell"

export default function AgentLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <AppShell portal="agent">{children}</AppShell>
}
