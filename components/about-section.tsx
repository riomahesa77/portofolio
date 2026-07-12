"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Code, Lightbulb, Target } from "lucide-react"

const highlights = [
  {
    icon: GraduationCap,
    title: "Mahasiswa Teknik Informatika",
    description: "Menempuh pendidikan S1 dengan fokus pada pengembangan perangkat lunak dan teknologi informasi.",
  },
  {
    icon: Code,
    title: "Passionate Developer",
    description: "Antusias dalam mempelajari berbagai bahasa pemrograman dan framework modern.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Senang memecahkan masalah kompleks dengan solusi yang efisien dan kreatif.",
  },
  {
    icon: Target,
    title: "Goal Oriented",
    description: "Berkomitmen untuk terus berkembang dan mencapai tujuan dalam bidang teknologi.",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tentang Saya
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Halo! Saya <span className="text-primary">Rio Mahesa</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">
              Saya adalah mahasiswa Teknik Informatika dengan NIM 230103036 yang memiliki passion dalam dunia teknologi dan pengembangan perangkat lunak. Perjalanan saya di dunia programming dimulai dari keingintahuan tentang bagaimana aplikasi dan website bekerja.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">
              Saat ini, saya fokus mempelajari berbagai teknologi modern seperti web development, mobile development, dan sedang mengeksplorasi bidang artificial intelligence. Saya percaya bahwa teknologi dapat membawa perubahan positif dalam kehidupan masyarakat.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { value: "3+", label: "Tahun Belajar" },
                { value: "10+", label: "Proyek" },
                { value: "5+", label: "Teknologi" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 rounded-lg bg-secondary/50 border border-border"
                >
                  <span className="text-2xl md:text-3xl font-bold text-primary">
                    {stat.value}
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
