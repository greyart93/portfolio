import Social_Links from "@/constants/Social_Links";
import { motion } from "motion/react";

function Footer() {
    return (
        <motion.footer className="w-full pt-14 text-center text-sm text-gray-500 dark:text-gray-400" animate={{filter: ['blur(10px)', 'blur(0px)'], opacity: [0, 1], y:[20,0]}} transition={{delay: 1.5}}>
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
                <div className="pt-5 pb-2">
                    Made with ❤️ by Saud Mullaji.
                </div>
        </motion.footer>
    );
}
export default Footer;