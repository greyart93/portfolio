"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react"
import { ExternalLinkIcon, type ExternalLinkIconHandle } from "@/components/ui/external-link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  url: string
}

export function ProjectCard({ title, description, image, url }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const iconRef = useRef<ExternalLinkIconHandle>(null)

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

  const handleCardEnter = () => {
    setIsHovered(true)
    iconRef.current?.startAnimation()
  }

  const handleCardLeave = () => {
    setIsHovered(false)
    iconRef.current?.stopAnimation()
  }

  return (
    <div
      ref={cardRef}
      // 1. REMOVED overflow-hidden and rounded-xl from here so the floating image isn't clipped
      className="relative group p-6 transition-all duration-500"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleCardEnter}
      onMouseLeave={handleCardLeave}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            style={{ x, y }}
            className="absolute z-50 pointer-events-none w-80 h-48 rounded-lg overflow-hidden border border-border hidden md:block"
          >
            <img src={image || "window.svg"} alt={title} className="w-full h-full object-cover" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-xl font-semibold cursor-pointer transition-colors duration-200 hover:text-primary inline-block">
            <motion.span
              className="relative text-[16px] font-medium tracking-tight flex items-center gap-1"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <a target="blank" href={url} className="flex items-center gap-1">
                {title}
                <ExternalLinkIcon
                  ref={iconRef}
                  size={14}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
              </a>
            </motion.span>
          </h3>
        </div>
        <p className="text-muted-foreground leading-relaxed text-[16px] font-normal">{description}</p>
      </div>

      {/* 2. Border layer now has its own rounded-xl and overflow-hidden to clip itself */}
      <div 
        className="absolute inset-0 rounded-xl border border-border/30 group-hover:border-transparent transition-colors duration-500 pointer-events-none overflow-hidden" 
      />
      
      {/* 3. Glow layer now has its own rounded-xl and overflow-hidden to clip itself */}
      <div className="absolute inset-0 opacity-20 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent rounded-xl" />
      </div>
    </div>
  )
}