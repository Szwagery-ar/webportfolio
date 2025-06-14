"use client"

import { Download } from "lucide-react"
import { useState } from "react"

interface ResumeButtonProps {
  filePath: string
  className?: string
}

export function ResumeButton({ filePath, className = "" }: ResumeButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={filePath}
      download
      className={`inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 font-mono text-sm hover:bg-primary/90 transition-colors border-2 border-primary relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Download className="h-4 w-4" />
      <span>DOWNLOAD CV</span>

      {/* Animated background on hover */}
      <div
        className={`absolute inset-0 bg-secondary/20 transition-transform duration-300 ease-in-out ${
          isHovered ? "translate-y-0" : "translate-y-full"
        }`}
        aria-hidden="true"
      />
    </a>
  )
}
