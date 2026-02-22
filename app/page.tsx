"use client"

import Link from "@/components/link"
import { ModeToggle } from "@/components/themeToggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "motion/react"
import Social_Links from "@/constants/Social_Links"
import { AnimatedTabs } from "@/components/animated-tabs"
// import { User, Settings, CreditCard, Bell } from "lucide-react"
import TabContents from "@/constants/Tab_Contents";
import Footer from "@/components/footer"
// import ContactMe from "@/components/ContactMe"

const MotionAvatar = motion.create(Avatar)


export default function Home() {
  const tabs = TabContents
  
  return (
    // Root Div
    <motion.div className={` min-h-screen flex justify-center`}>
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4"><ModeToggle /></div>
      {/* Main Div */}
      <div className=" mt-12 p-8 rounded-lg max-w-2xl text-xl" >
        {/* GitHub Avatar */}
        <MotionAvatar className={"mb-4 h-14 w-14"} animate={{ scale: [0, 1], filter: ['blur(10px)', 'blur(0px)'], opacity: [0, 1], y: [20, 0] }} transition={{ duration: 0.5, delay: 0.1 }}>
          <AvatarImage src="github_pic.png" />
          <AvatarFallback>:)</AvatarFallback>
        </MotionAvatar>
        {/* Name and Description */}
        <motion.h1 className={`text-2xl font-medium tracking-tight mb-5`} animate={{ filter: ['blur(10px)', 'blur(0px)'], opacity: [0, 1], y: [30, 0] }} transition={{ duration: 0.5, delay: 0.1 }}>Hi! I'm Saud Mullaji</motion.h1>
        
        <motion.div className="space-y-4 text-gray-700 dark:text-gray-300" animate={{ filter: ['blur(10px)', 'blur(0px)'], opacity: [0, 1], y: [20, 0] }} transition={{ duration: 0.5, delay: 0.2 }}>
          <h2>I'm a Full Stack Engineer based in Mumbai, India.</h2>
          <h2>I build end-to-end applications — from Responsive web app to scalable backend systems.</h2>
        </motion.div>

        {/* Social Links */}
        {/* <motion.div className="mt-6 flex space-x-4 text-sm font-light cursor-pointer" animate={{ filter: ['blur(10px)', 'blur(0px)'], opacity: [0, 1], y: [20, 0] }} transition={{ duration: 0.8, delay: 0.4, delayChildren: 0.4, staggerChildren: 0.2 }}>
          <Link href="Saud__Mullaji__Resume.pdf">Resume</Link>
          <Link href="https://github.com/greyart93">Github</Link>
          <Link href="https://www.linkedin.com/in/mohd-saud-mullaji-41b638380/">LinkedIn</Link>
          <Link href="https://leetcode.com/u/saud07/">LeetCode</Link>
          <Link href="https://www.hackerrank.com/profile/xeadsaud">HackerRank</Link>
          <Link href="https://www.sololearn.com/en/profile/24021563">SoloLearn</Link>
          <Link href="mailto:saudmullaji05@gmail.com">Email</Link>
        </motion.div> */}

        <div className="flex flex-row gap-4">
        {Social_Links.map(({ url, name }, index) => (
          <motion.div key={index} className="mt-6 flex space-x-4 text-sm font-light cursor-pointer" animate={{ filter: ['blur(10px)', 'blur(0px)'], opacity: [0, 1], y: [20, 0] }} transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}>
            <Link href={url}>{name}</Link>
          </motion.div>
        ))  }
        </div>

        {/* Divider */}
        <motion.hr className="my-8 border-gray-300 dark:border-gray-700" animate={{ filter: ['blur(10px)', 'blur(0px)'], opacity: [0, 1], y: [20, 0] }} transition={{ duration: 0.5, delay: 0.5 }} />
   
        {/* Tabs for Projects and Blog */}
        <AnimatedTabs />
        {/* <ContactMe /> */}
        <Footer />

      </div>
      
    </motion.div>
  )
}