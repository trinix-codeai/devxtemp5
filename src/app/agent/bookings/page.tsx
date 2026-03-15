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
import { Search, Plus, MapPin, CalendarDays, Plane, Bed, Hotel, ActivitySquare, ShoppingCart, Check, Sparkles } from "lucide-react"

const searchResults = [
    { id: "RES-01", type: "Hotel", name: "Grand Hyatt Tokyo", location: "Roppongi, Tokyo", dates: "Oct 15 - Oct 20", price: "$450/nt", commission: "12%" },
    { id: "RES-02", type: "Flight", name: "JL-005 (JAL)", location: "JFK -> HND", dates: "Oct 14", price: "$1,200", commission: "5%" },
    { id: "RES-03", type: "Activity", name: "Mt. Fuji Day Tour", location: "Tokyo, Japan", dates: "Oct 18", price: "$150", commission: "15%" },
]

export default function BookingsWorkspacePage() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Booking Workspace</h2>
                <div className="flex items-center space-x-2">
                    <Button variant="outline"><ShoppingCart className="mr-2 h-4 w-4" /> View Cart (2)</Button>
                    <Button><Check className="mr-2 h-4 w-4" /> Finalize Quote</Button>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2 space-y-6">
                    <Card className="border-primary/20 bg-primary/5">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle className="flex items-center gap-2"><Sparkles className="h-5 w-5 text-primary" /> AI Itinerary Assistant</CardTitle>
                                <CardDescription>Generated smart route recommendations for <span className="font-bold text-foreground italic">"Global Business Traveler"</span> profile.</CardDescription>
                            </div>
                            <Button size="sm" variant="outline" className="bg-background">Regenerate</Button>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-3 bg-card border rounded-lg hover:border-primary/50 cursor-pointer transition-colors group">
                                    <div className="flex justify-between items-start mb-2">
                                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">Route Alpha</Badge>
                                        <span className="text-sm font-bold">$1,240</span>
                                    </div>
                                    <p className="text-sm font-semibold mb-1">LHR &gt; SIN (Direct)</p>
                                    <p className="text-xs text-muted-foreground line-clamp-2">Optimized for 12h layover removal. Includes priority lounge access at SIN. 98% Client Match.</p>
                                    <div className="mt-3 flex gap-2">
                                        <Button size="sm" className="h-7 text-[10px] w-full">Add To Plan</Button>
                                    </div>
                                </div>
                                <div className="p-3 bg-card border rounded-lg hover:border-primary/50 cursor-pointer transition-colors group">
                                    <div className="flex justify-between items-start mb-2">
                                        <Badge variant="outline" className="bg-emerald-100 text-emerald-600 border-emerald-200">Luxury Stay</Badge>
                                        <span className="text-sm font-bold">$420/nt</span>
                                    </div>
                                    <p className="text-sm font-semibold mb-1">Marina Bay Sands (Suite)</p>
                                    <p className="text-xs text-muted-foreground line-clamp-2">Recommended based on previous Preferred Hotels history. Integrated with GDS bedbank.</p>
                                    <div className="mt-3 flex gap-2">
                                        <Button size="sm" className="h-7 text-[10px] w-full">Add To Plan</Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Global Search & Availability</CardTitle>
                            <CardDescription>Search across GDS, direct connects, and local bedbanks.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4">
                                <div className="flex gap-4">
                                    <div className="flex-1 space-y-2">
                                        <label className="text-sm font-medium">Destination</label>
                                        <div className="relative">
                                            <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                            <Input placeholder="City, Airport, or Landmark" className="pl-9" />
                                        </div>
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <label className="text-sm font-medium">Dates</label>
                                        <div className="relative">
                                            <CalendarDays className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                            <Input placeholder="Check-in - Check-out" className="pl-9" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-1 space-y-2">
                                        <label className="text-sm font-medium">Travelers</label>
                                        <Input placeholder="2 Adults, 0 Children" />
                                    </div>
                                    <div className="flex items-end flex-initial">
                                        <Button className="w-full sm:w-auto"><Search className="mr-2 h-4 w-4" /> Search Inventory</Button>
                                    </div>
                                </div>

                                <Tabs defaultValue="all" className="w-full mt-4">
                                    <TabsList className="w-full justify-start border-b rounded-none pb-0 bg-transparent">
                                        <TabsTrigger value="all" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none">All Types</TabsTrigger>
                                        <TabsTrigger value="flights" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"><Plane className="h-4 w-4 mr-2" /> Flights</TabsTrigger>
                                        <TabsTrigger value="hotels" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"><Hotel className="h-4 w-4 mr-2" /> Hotels</TabsTrigger>
                                        <TabsTrigger value="activities" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"><ActivitySquare className="h-4 w-4 mr-2" /> Activities</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="all" className="pt-4">
                                        <div className="space-y-4">
                                            {searchResults.map((res) => (
                                                <div key={res.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg">
                                                    <div className="flex items-start gap-4">
                                                        <div className="bg-muted p-2 rounded-md">
                                                            {res.type === 'Hotel' ? <Bed className="h-5 w-5" /> : res.type === 'Flight' ? <Plane className="h-5 w-5" /> : <ActivitySquare className="h-5 w-5" />}
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold">{res.name}</h4>
                                                            <p className="text-sm text-muted-foreground flex items-center gap-2">
                                                                <MapPin className="h-3 w-3" /> {res.location} <span className="text-border">|</span> <CalendarDays className="h-3 w-3" /> {res.dates}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="mt-4 sm:mt-0 flex flex-col sm:items-end gap-2 w-full sm:w-auto">
                                                        <div className="flex sm:flex-col items-center sm:items-end justify-between w-full">
                                                            <span className="font-bold text-lg">{res.price}</span>
                                                            <Badge variant="outline" className="text-success border-success/20 bg-success/10">{res.commission} Comm.</Badge>
                                                        </div>
                                                        <Button size="sm" className="w-full"><Plus className="mr-2 h-4 w-4" /> Add to Itinerary</Button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card className="flex flex-col h-full col-span-1">
                    <CardHeader>
                        <CardTitle>Current Itinerary</CardTitle>
                        <CardDescription>Client: Emily Chen (Profile: VIP)</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-between">
                        <div className="space-y-4">
                            <div className="relative pl-6 pb-4 border-l-2 border-muted border-dashed last:border-0 last:pb-0">
                                <div className="absolute left-[-9px] top-0 bg-background border-2 border-primary w-4 h-4 rounded-full" />
                                <h5 className="font-semibold text-sm">Oct 14, 2024</h5>
                                <div className="mt-2 p-3 bg-muted/50 rounded-md border flex justify-between items-center group">
                                    <div>
                                        <p className="font-medium text-sm flex items-center gap-1"><Plane className="h-3 w-3 text-primary" /> Flight JL-005</p>
                                        <p className="text-xs text-muted-foreground mt-1">JFK 10:00 &gt; HND 14:00 (+1)</p>
                                    </div>
                                    <span className="text-sm font-semibold">$1,200</span>
                                </div>
                            </div>
                            {/* Visual connecting line that continues */}
                            <div className="relative pl-6 pb-4 border-l-2 border-muted border-dashed last:border-0 last:pb-0">
                                <div className="absolute left-[-9px] top-0 bg-background border-2 border-primary w-4 h-4 rounded-full" />
                                <h5 className="font-semibold text-sm">Oct 15 - 20, 2024</h5>
                                <div className="mt-2 p-3 bg-muted/50 rounded-md border flex justify-between items-center group">
                                    <div>
                                        <p className="font-medium text-sm flex items-center gap-1"><Bed className="h-3 w-3 text-primary" /> Grand Hyatt Tokyo</p>
                                        <p className="text-xs text-muted-foreground mt-1">5 Nights • Diplomat Suite</p>
                                    </div>
                                    <span className="text-sm font-semibold">$2,250</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-4 border-t space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Subtotal</span>
                                <span>$3,450.00</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Taxes & Fees</span>
                                <span>$320.50</span>
                            </div>
                            <div className="flex justify-between font-bold text-lg pt-2 border-t mt-2">
                                <span>Total Due</span>
                                <span>$3,770.50</span>
                            </div>
                            <div className="flex justify-between text-sm mt-1 mb-4 text-success font-medium">
                                <span>Est. Commission</span>
                                <span>$345.00</span>
                            </div>
                            <Button className="w-full mt-4">Send Quote to Client</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

        </div>
    )
}
