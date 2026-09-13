import { GithubIcon } from "@/components/ui/github"; 
import { SendIcon } from "@/components/ui/send";
import { FileTextIcon } from "@/components/ui/file-text";
import { LinkedinIcon } from "@/components/ui/linkedin";

import { LeetcodeIcon, HackerrankIcon, CodepenIcon, SoloLearnIcon } from "@/components/socialIcons";

const socialLinks = [
    { url: "saud_cv.pdf", name: "Resume", icon: FileTextIcon },
    { url: "https://github.com/greyart93", name: "Github", icon: GithubIcon }, 
    { url: "https://www.linkedin.com/in/mohd-saud-mullaji-41b638380/", name: "LinkedIn", icon: LinkedinIcon },
    { url: "https://leetcode.com/u/saud07/", name: "LeetCode", icon: LeetcodeIcon },
    { url: "https://www.hackerrank.com/profile/xeadsaud", name: "HackerRank", icon: HackerrankIcon },
    { url: "https://codepen.io/greyart93", name: "CodePen", icon: CodepenIcon },
    { url: "https://www.sololearn.com/en/profile/24021563", name: "SoloLearn", icon: SoloLearnIcon },
    { url: "mailto:saudmullaji05@gmail.com", name: "Email", icon: SendIcon }
];

export default socialLinks;

