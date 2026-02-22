"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ProjectCard } from "./project-card"
import ProjectContents from "@/constants/Project_Content"
// import Work_Experiences from "@/constants/Work_Experience"
import BlogPosts from "@/constants/Blog_Post"

const projects = ProjectContents
// const workExperiences = Work_Experiences
const blogPosts = BlogPosts

const tabs = [
  { id: "projects", label: "Projects", content: projects },
  // { id: "work", label: "Work", content: workExperiences },
  { id: "blog", label: "Blog", content: blogPosts },
]

export function AnimatedTabs() {
  const [activeTab, setActiveTab] = useState("projects")
  const tabsRef = useRef<HTMLDivElement>(null)

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content || []

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Tab List - Compact width */}
      <motion.div ref={tabsRef} className="cursor-pointer relative inline-flex items-center gap-1 p-1 bg-muted rounded-lg mb-8" animate={{ filter: ["blur(10px)", 'blur(0px)'], opacity: [0, 1], y: [20, 0] }} transition={{ duration: 0.5, delay: 0.8 }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`cursor-pointer relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
              activeTab === tab.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-background rounded-md shadow-sm"
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </motion.div>

      {/* Tab Content - Wider than tab list */}
      <div className="w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="space-y-6"
          >
            {activeContent.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.3,
                }}
              >
                <ProjectCard title={item.title} description={item.description} image={item.image} url={item.url} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
