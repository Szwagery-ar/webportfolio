"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
    children: ReactNode
    className?: string
    delay?: number
    direction?: "up" | "down" | "left" | "right" | "none"
}

export function AnimatedSection({ children, className = "", delay = 0, direction = "up" }: AnimatedSectionProps) {
    const { ref, isInView } = useScrollAnimation({ threshold: 0.1 })

    const getTransformValue = () => {
        switch (direction) {
            case "up":
                return "translateY(40px)"
            case "down":
                return "translateY(-40px)"
            case "left":
                return "translateX(40px)"
            case "right":
                return "translateX(-40px)"
            default:
                return "none"
        }
    }

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${className}`}
            style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "none" : getTransformValue(),
                transitionDelay: `${delay}ms`,
            }}
        >
            {children}
        </div>
    )
}
