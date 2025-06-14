"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"

interface GlitchTextProps {
    text: string
    className?: string
    glitchOnHover?: boolean
}

export function GlitchText({ text, className = "", glitchOnHover = false }: GlitchTextProps) {
    const [isGlitching, setIsGlitching] = useState(false)
    const [displayText, setDisplayText] = useState(text)
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    // Characters to use for glitch effect
    const glitchChars = "!<>-_\\/[]{}—=+*^?#________"

    useEffect(() => {
        if (inView && !glitchOnHover) {
            startGlitchEffect()
        }
    }, [inView, glitchOnHover])

    const startGlitchEffect = () => {
        if (isGlitching) return

        setIsGlitching(true)
        let iteration = 0
        const interval = 60

        const glitchInterval = setInterval(() => {
            setDisplayText(
                text
                    .split("")
                    .map((char, idx) => {
                        if (idx < iteration) {
                            return text[idx]
                        }
                        return glitchChars[Math.floor(Math.random() * glitchChars.length)]
                    })
                    .join(""),
            )

            if (iteration >= text.length) {
                clearInterval(glitchInterval)
                setDisplayText(text)
                setIsGlitching(false)
            }

            iteration += 1 / 3
        }, interval)

        return () => clearInterval(glitchInterval)
    }

    return (
        <span
            ref={ref}
            className={`inline-block ${className} ${glitchOnHover ? "hover:text-primary cursor-pointer" : ""}`}
            onMouseEnter={() => glitchOnHover && startGlitchEffect()}
        >
            {displayText}
        </span>
    )
}
