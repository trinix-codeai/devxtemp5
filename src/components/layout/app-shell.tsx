"use client"

import { Sidebar } from "@/components/layout/sidebar"
import { Bell, Search, Menu, X } from "lucide-react"
import { PageTransition } from "./page-transition"
import { ThemeToggle } from "../theme-toggle"
import { useState } from "react"

export function AppShell({
    children,
    portal
}: {
    children: React.ReactNode
    portal: 'admin' | 'agent' | 'dashboard'
}) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <div className="flex h-screen overflow-hidden bg-background">
            {/* Desktop Sidebar */}
            <div className="hidden md:block">
                <Sidebar portal={portal} />
            </div>

            {/* Mobile Sidebar Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <div className="fixed inset-y-0 left-0 w-64 bg-card shadow-lg" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-end p-4">
                            <button onClick={() => setIsMobileMenuOpen(false)}>
                                <X className="h-6 w-6" />
                            </button>
                        </div>
                        <Sidebar portal={portal} />
                    </div>
                </div>
            )}

            <div className="flex flex-1 flex-col overflow-hidden">
                <header className="flex h-16 flex-shrink-0 items-center justify-between border-b bg-card px-4 md:px-6">
                    <div className="flex flex-1 items-center space-x-4">
                        <button
                            className="md:hidden p-2 -ml-2 hover:bg-accent rounded-md"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                        <div className="relative w-full max-w-md hidden sm:block">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <input
                                type="search"
                                placeholder="Search..."
                                className="h-9 w-full rounded-md border border-input bg-background pl-9 pr-3 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                            />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <ThemeToggle />
                        <button className="relative rounded-full p-2 hover:bg-accent">
                            <Bell className="h-5 w-5 text-muted-foreground" />
                            <span className="absolute right-1.5 top-1.5 flex h-2 w-2 rounded-full bg-error"></span>
                        </button>
                    </div>
                </header>
                <main className="flex-1 overflow-y-auto bg-muted/20">
                    <PageTransition>
                        {children}
                    </PageTransition>
                </main>
            </div>
        </div>
    )
}
