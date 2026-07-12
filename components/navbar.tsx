"use client"

import { motion } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"
import { Rocket } from "lucide-react"

const navItems = [
  { name: "Beranda", href: "#hero" },
  { name: "Tentang", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Kontak", href: "#contact" },
]

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50"
    >
      <nav className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <motion.a
          href="#hero"
          className="flex items-center gap-2 text-lg font-bold text-foreground"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Rocket className="h-5 w-5 text-primary" />
          <span>Rio Mahesa</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  )
}
