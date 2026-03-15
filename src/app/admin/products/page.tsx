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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Plus, Filter, MoreHorizontal, PackageOpen } from "lucide-react"

const products = [
    { id: "PRD-1023", name: "Alpine Ski Resort Pass", category: "Activities", supplier: "Summit Tours", price: "$299", inventory: 45, status: "Active" },
    { id: "PRD-1024", name: "Maldives Water Villa", category: "Accommodation", supplier: "Seaside Resorts", price: "$1,200", inventory: 2, status: "Low Stock" },
    { id: "PRD-1025", name: "Paris City Tour", category: "Activities", supplier: "EuroTravel", price: "$85", inventory: 120, status: "Active" },
    { id: "PRD-1026", name: "London-NY First Class", category: "Flights", supplier: "British Airways", price: "$4,500", inventory: 0, status: "Out of Stock" },
    { id: "PRD-1027", name: "Rome Colosseum VIP", category: "Activities", supplier: "Italia Tours", price: "$150", inventory: 30, status: "Active" },
]

export default function ProductCatalogPage() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Product Catalog</h2>
                <div className="flex items-center space-x-2">
                    <Button><Plus className="mr-2 h-4 w-4" /> Add Product</Button>
                </div>
            </div>

            <Tabs defaultValue="all" className="space-y-4">
                <div className="flex items-center justify-between">
                    <TabsList>
                        <TabsTrigger value="all">All Products</TabsTrigger>
                        <TabsTrigger value="accommodation">Accommodation</TabsTrigger>
                        <TabsTrigger value="activities">Activities</TabsTrigger>
                        <TabsTrigger value="flights">Flights</TabsTrigger>
                    </TabsList>

                    <div className="flex items-center space-x-2">
                        <div className="relative flex-1 max-w-sm">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Search products..." className="pl-9" />
                        </div>
                        <Button variant="outline"><Filter className="mr-2 h-4 w-4" /> Filters</Button>
                    </div>
                </div>

                <TabsContent value="all" className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Products</CardTitle>
                                <PackageOpen className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">1,248</div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Low Stock Alerts</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-warning">24</div>
                            </CardContent>
                        </Card>
                    </div>

                    <Card>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Product Name</TableHead>
                                    <TableHead>Category</TableHead>
                                    <TableHead>Supplier</TableHead>
                                    <TableHead className="text-right">Price</TableHead>
                                    <TableHead className="text-right">Inventory</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="w-[50px]"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {products.map((product) => (
                                    <TableRow key={product.id}>
                                        <TableCell>
                                            <div className="font-medium">{product.name}</div>
                                            <div className="text-xs text-muted-foreground">{product.id}</div>
                                        </TableCell>
                                        <TableCell>{product.category}</TableCell>
                                        <TableCell>{product.supplier}</TableCell>
                                        <TableCell className="text-right font-medium">{product.price}</TableCell>
                                        <TableCell className="text-right">
                                            <span className={product.inventory < 10 && product.inventory > 0 ? "text-warning font-medium" : product.inventory === 0 ? "text-error font-medium" : ""}>
                                                {product.inventory}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant={product.status === 'Active' ? 'success' : product.status === 'Low Stock' ? 'warning' : 'destructive'}>
                                                {product.status}
                                            </Badge>
                                        </TableCell>
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
                </TabsContent>
                {/* Other TabsContent placeholders omitted for brevity */}
            </Tabs>
        </div>
    )
}
