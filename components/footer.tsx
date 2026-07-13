"use client"

import { motion } from "framer-motion"
import { Heart, Rocket } from "lucide-react"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 px-4 border-t border-border bg-card/50"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-foreground">
            <Rocket className="h-5 w-5 text-primary" />
            <span className="font-semibold">Rio Mahesa</span>
            <span className="text-muted-foreground text-sm"> </span>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            {" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
            </motion.span>{" "}
             {new Date().getFullYear()}
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a
              href="#hero"
              className="hover:text-primary transition-colors"
            >
              Kembali ke Atas
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
