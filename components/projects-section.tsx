"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Folder } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "E-Commerce Website",
    description: "Website e-commerce modern dengan fitur keranjang belanja, pembayaran, dan manajemen produk. Dibangun menggunakan Next.js dan Tailwind CSS.",
    tags: ["Next.js", "React", "Tailwind CSS", "Prisma"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "Aplikasi manajemen tugas dengan fitur drag-and-drop, reminder, dan kolaborasi tim. Menggunakan React dan Firebase untuk real-time updates.",
    tags: ["React", "Firebase", "TypeScript", "Framer Motion"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description: "Website portfolio personal dengan animasi smooth dan dark mode. Dibangun dengan Next.js dan Framer Motion.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    github: "#",
    demo: "#",
    featured: true,
  },
]

const otherProjects = [
  {
    title: "Weather App",
    description: "Aplikasi cuaca sederhana dengan API integration",
    tags: ["React", "API", "CSS"],
  },
  {
    title: "Blog Platform",
    description: "Platform blog dengan markdown support",
    tags: ["Next.js", "MDX", "Tailwind"],
  },
  {
    title: "Chat Application",
    description: "Real-time chat app dengan Socket.io",
    tags: ["Node.js", "Socket.io", "React"],
  },
  {
    title: "Landing Page",
    description: "Landing page untuk startup fiktif",
    tags: ["HTML", "CSS", "JavaScript"],
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">{"// 03. Projects"}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Proyek yang Pernah Dibuat
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Beberapa proyek yang telah saya kerjakan selama perjalanan belajar saya
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-6 md:p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-primary font-mono text-xs mb-2">Featured Project</p>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="icon" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">
            Proyek Lainnya
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <Folder className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-muted-foreground font-mono"
                    >
                      {tag}
                      {project.tags.indexOf(tag) !== project.tags.length - 1 && " · "}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
