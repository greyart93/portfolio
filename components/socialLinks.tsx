import { motion } from "motion/react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Social_Links from "@/constants/Social_Links";

export default function SocialLinksComponent() {
  return (
    <TooltipProvider delayDuration={200}>
      <div className="flex flex-row flex-wrap gap-6 mt-6 justify-center sm:justify-start">
        {Social_Links.map(({ url, name, icon: Icon }, index) => (
          <motion.div
            key={index}
            className="relative flex items-center justify-center cursor-pointer group"
            animate={{ filter: ['blur(10px)', 'blur(0px)'], opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <Link 
                  href={url} 
                  className="flex items-center justify-center text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  aria-label={name} // Good for accessibility since there is no text
                >
                  {/* Render Icon if it exists, otherwise show a fallback (like the first letter of the name) */}
                  {Icon ? (
                    <Icon size={22} />
                  ) : (
                    <span className="text-sm font-medium">{name.charAt(0)}</span>
                  )}
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          </motion.div>
        ))}
      </div>
    </TooltipProvider>
  );
}