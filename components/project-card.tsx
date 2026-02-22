"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  url: string
}

export function ProjectCard({ title, description, image, url }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 200 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const offsetX = e.clientX - rect.left
    const offsetY = e.clientY - rect.top

    mouseX.set(offsetX + 20)
    mouseY.set(offsetY)
  }

  return (
    <div
      ref={cardRef}
      className="relative group p-6 "
      onMouseMove={handleMouseMove}
    >
      {/* Hover Image Preview - Follows cursor with spring animation */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            style={{ x, y }}
            className="absolute z-50 pointer-events-none w-80 h-48 rounded-lg overflow-hidden  border border-border"
          >
            <img src={image || "window.svg"} alt={title} className="w-full h-full object-cover" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card Content */}
      <div className="relative z-10">
        <h3
          className="text-xl font-semibold mb-2 cursor-pointer transition-colors duration-200 hover:text-primary inline-block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.span
            className="relative text-[16px] font-medium tracking-tight"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}

          >
            <a target="blank" href={url}>{title}</a>
            
          </motion.span>
        </h3>
        <p className="text-muted-foreground leading-relaxed text-[16px] font-normal">{description}</p>
      </div>

      {/* Subtle background glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent rounded-xl" />
      </div>
    </div>
  )
}
