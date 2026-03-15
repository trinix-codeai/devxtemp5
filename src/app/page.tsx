"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ShieldCheck, Users, LayoutDashboard, ArrowRight, Globe, Plane, Hotel } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"

const portals = [
  {
    name: "Admin Portal",
    description: "Executive oversight, financial control, and system configuration.",
    href: "/admin",
    icon: ShieldCheck,
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "hover:border-blue-400"
  },
  {
    name: "Agent Portal",
    description: "Sales workspace, customer CRM, and itinerary management.",
    href: "/agent",
    icon: Users,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    borderColor: "hover:border-emerald-400"
  },
  {
    name: "Data Dashboard",
    description: "System analytics, performance metrics, and reporting.",
    href: "/dashboard",
    icon: LayoutDashboard,
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    borderColor: "hover:border-purple-400"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <header className="absolute top-0 right-0 p-6">
        <ThemeToggle />
      </header>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4 mb-12 max-w-2xl relative z-10"
      >
        <div className="flex justify-center mb-6">
          <div className="bg-primary/10 p-4 rounded-3xl rotate-3 mb-4">
            <Globe className="h-12 w-12 text-primary -rotate-3" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Travel <span className="text-primary italic">Operating System</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          A decentralized workflow platform for Modern Travel Management. Select your workspace to begin.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl relative z-10"
      >
        {portals.map((portal) => (
          <motion.div key={portal.name} variants={itemVariants}>
            <Link href={portal.href} className="block group">
              <Card className={`h-full border-2 transition-all duration-300 ${portal.borderColor} group-hover:shadow-2xl group-hover:-translate-y-2 cursor-pointer bg-card/50 backdrop-blur-sm`}>
                <CardHeader>
                  <div className={`w-12 h-12 rounded-2xl ${portal.bgColor} flex items-center justify-center mb-4 transition-transform group-hover:rotate-6`}>
                    <portal.icon className={`h-6 w-6 ${portal.color}`} />
                  </div>
                  <CardTitle className="text-2xl">{portal.name}</CardTitle>
                  <CardDescription className="text-base min-h-[3rem]">
                    {portal.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-primary font-bold group-hover:gap-2 transition-all">
                    Enter Workspace <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-20 text-sm text-muted-foreground flex flex-col items-center space-y-2 opacity-50"
      >
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><Plane className="h-3 w-3" /> Real-time GDS</span>
          <span className="text-border">|</span>
          <span className="flex items-center gap-1"><Hotel className="h-3 w-3" /> Bedbank Sync</span>
          <span className="text-border">|</span>
          <span className="flex items-center gap-1"><ShieldCheck className="h-3 w-3" /> PCI-DSS Secure</span>
        </div>
        <p>© 2024 TravelOS Infrastructure</p>
      </motion.footer>
    </div>
  )
}
