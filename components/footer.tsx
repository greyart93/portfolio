"use client";

import Social_Links from "@/constants/Social_Links";
import { motion } from "motion/react";
import { HeartIcon } from "@/components/ui/heart";

function Footer() {
  return (
    <motion.footer
      className="w-full pt-14 pb-10 text-center text-sm text-gray-500 dark:text-gray-400"
      // Use whileInView to trigger animation when the footer enters the viewport
      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }} // once: true means it only plays the first time
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Social Links */}
      <div className="text-sm mb-2 flex flex-wrap justify-center gap-1 sm:gap-0">
        {Social_Links.map(({ url, name }, index) => (
          <a
            key={index}
            href={url}
            className="mx-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
          >
            {name}
          </a>
        ))}
      </div>

      <div className="pt-5 flex items-center justify-center gap-1">
        Made with{" "}
        {/* Wrapper span for the heart with its own pop-in animation */}
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            delay: 0.6, // Slight delay so it pops in after the footer appears
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="inline-flex"
        >
          {/* 
            With fill="currentColor" in the heart.tsx, 
            text-red-500 makes both the stroke AND the fill red. 
          */}
          <HeartIcon size={20} className="text-red-500" />
        </motion.span>
        by Saud Mullaji.
      </div>
    </motion.footer>
  );
}

export default Footer;