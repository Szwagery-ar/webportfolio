import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { CursorTrail } from "@/components/cursor-trail"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Brutalist Portfolio",
  description: "A modern brutalist portfolio with high contrast design",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceMono.variable} font-sans checkered-bg`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          {/* Cursor trail will only render on client side */}
          {/* <CursorTrail color="#00DBD8" size={8} trailLength={8} /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
