import type { Metadata } from "next";
import { Work_Sans } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider";  
import "./globals.css";

const workSans = Work_Sans({ 
  subsets: ['latin'],
  variable: '--font-work-sans',
  preload: false,
})

export const metadata: Metadata = {
  title: "Saud Mullaji - Full Stack Engineer",
  description: "Portfolio of Saud Mullaji, a Full Stack Engineer specializing in building end-to-end applications with a focus on AI-powered tools and scalable backend systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${workSans.className} antialiased`}
      >
           <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
