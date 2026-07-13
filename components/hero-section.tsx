"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-40" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -left-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] animate-pulse" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-mono text-sm mb-4"
            >
              {"// Hello, World! Saya"}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance"
            >
              <span className="text-primary relative">
                Rio Mahesa
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-primary/50 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-6"
            >
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-mono border border-primary/20">
                Universitas Duta Bangsa Surakarta
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 text-pretty"
            >
              Mahasiswa <span className="text-primary font-semibold">Teknik Informatika</span> yang passionate dalam membangun solusi digital dan menjelajahi dunia teknologi.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4 mb-8"
            >
              {[
                { icon: Github, href: "https://github.com/riomahesa77", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/rio-mahesa/", label: "LinkedIn" },
                { icon: Instagram, href: "https://instagram.com/rioomhs", label: "Instagram" },
                { icon: Mail, href: "#contact", label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-border hover:border-primary"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button asChild size="lg">
                <a href="#contact">
                  Hubungi Saya
                  <motion.span
                    className="ml-2 inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#projects">Lihat Karya</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/30 blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Rotating Borders */}
              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/30"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              <motion.div
                className="absolute -inset-8 rounded-full border border-accent/20"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Profile Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl bg-gradient-to-br from-primary/20 to-accent/20">
                <Image
                  src="/profile.png"
                  alt="Rio Mahesa"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Fallback initials */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-foreground/20">RM</span>
                </div>
              </div>

              {/* Floating Tech Badge */}
              <motion.div
                className="absolute -top-2 -right-2 px-3 py-1.5 rounded-full bg-card border border-border shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-xs font-mono text-primary">{"<Developer />"}</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-2 px-3 py-1.5 rounded-full bg-card border border-border shadow-lg"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span className="text-xs font-mono text-accent">UI/UX</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="h-5 w-5 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
