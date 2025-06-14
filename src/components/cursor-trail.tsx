"use client"

import { useEffect, useState } from "react"

interface CursorTrailProps {
  color?: string
  size?: number
  trailLength?: number
}

export function CursorTrail({ color = "#00DBD8", size = 8, trailLength = 10 }: CursorTrailProps) {
  const [trails, setTrails] = useState<{ x: number; y: number; opacity: number }[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    // Only run on client
    setIsActive(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useEffect(() => {
    if (!isActive) return

    const interval = setInterval(() => {
      setTrails((prev) => {
        // Add new position to the beginning
        const newTrails = [{ x: mousePosition.x, y: mousePosition.y, opacity: 1 }, ...prev.slice(0, trailLength - 1)]

        // Update opacity for each trail
        return newTrails.map((trail, index) => ({
          ...trail,
          opacity: 1 - index / trailLength,
        }))
      })
    }, 50)

    return () => clearInterval(interval)
  }, [mousePosition, trailLength, isActive])

  if (!isActive) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {trails.map((trail, index) => (
        <div
          key={index}
          className="absolute rounded-none mix-blend-difference"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            width: `${size * (1 - index / trailLength)}px`,
            height: `${size * (1 - index / trailLength)}px`,
            opacity: trail.opacity,
            backgroundColor: color,
            transform: "translate(-50%, -50%)",
            transition: "opacity 0.2s ease",
          }}
        />
      ))}
    </div>
  )
}
