"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Globe, Shield, Bell, User, Building, Database, Save, Lock } from "lucide-react"

export default function AdminSettingsPage() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Global Settings</h2>
                <div className="flex items-center space-x-2">
                    <Button><Save className="mr-2 h-4 w-4" /> Save All Changes</Button>
                </div>
            </div>

            <Tabs defaultValue="general" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="general"><Building className="h-4 w-4 mr-2" /> Organization</TabsTrigger>
                    <TabsTrigger value="security"><Shield className="h-4 w-4 mr-2" /> Security</TabsTrigger>
                    <TabsTrigger value="notifications"><Bell className="h-4 w-4 mr-2" /> Notifications</TabsTrigger>
                    <TabsTrigger value="api"><Database className="h-4 w-4 mr-2" /> API & Keys</TabsTrigger>
                </TabsList>

                <TabsContent value="general" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Organization Details</CardTitle>
                            <CardDescription>Manage your company profile and default localized settings.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="org-name">Organization Name</Label>
                                    <Input id="org-name" defaultValue="TravelOS Global" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="tax-id">Tax ID / VAT Number</Label>
                                    <Input id="tax-id" defaultValue="GB 123 456 789" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="base-currency">Base Currency</Label>
                                    <select className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                                        <option>USD ($)</option>
                                        <option>EUR (€)</option>
                                        <option>GBP (£)</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="timezone">Default Timezone</Label>
                                    <select className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                                        <option>UTC (GMT+0)</option>
                                        <option>EST (GMT-5)</option>
                                        <option>PST (GMT-8)</option>
                                    </select>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="security" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Security Policies</CardTitle>
                            <CardDescription>Configure authentication and data access constraints.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/20">
                                <div className="space-y-1">
                                    <p className="font-medium">Force Multi-Factor Authentication (MFA)</p>
                                    <p className="text-sm text-muted-foreground">Require all users to use an authenticator app.</p>
                                </div>
                                <Button variant="outline" size="sm" className="bg-primary/10 text-primary border-primary">Enabled</Button>
                            </div>

                            <div className="flex items-center justify-between p-4 border rounded-lg">
                                <div className="space-y-1">
                                    <p className="font-medium">IP Whitelisting</p>
                                    <p className="text-sm text-muted-foreground">Restrict access to office IP ranges.</p>
                                </div>
                                <Button variant="outline" size="sm">Configure</Button>
                            </div>

                            <div className="space-y-2">
                                <Label>Password Rotation Policy</Label>
                                <div className="flex gap-4">
                                    <Badge variant="secondary" className="px-3 py-1">Every 90 Days</Badge>
                                    <Button variant="link" size="sm" className="h-auto p-0 text-primary">Change Policy</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="api" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>API Credentials</CardTitle>
                            <CardDescription>Manage access keys for third-party integrations.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="p-4 border rounded-lg space-y-4">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <Lock className="h-4 w-4 text-muted-foreground" />
                                        <span className="font-mono text-sm font-semibold italic">PUBLISHABLE_KEY</span>
                                    </div>
                                    <Badge variant="outline" className="text-success border-success/20 bg-success/10 font-mono text-[10px]">pk_live_492...9fb</Badge>
                                </div>
                                <div className="flex justify-between items-center bg-muted/30 p-2 rounded-md">
                                    <span className="text-xs text-muted-foreground">Created on Oct 12, 2023</span>
                                    <Button variant="ghost" size="sm" className="h-7 text-xs">Revoke Key</Button>
                                </div>
                            </div>
                            <Button variant="outline" className="w-full border-dashed"><Globe className="mr-2 h-4 w-4" /> Generate New Key-pair</Button>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
