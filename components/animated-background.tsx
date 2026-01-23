"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  color: string
}

interface TrailPoint {
  x: number
  y: number
  age: number
  size: number
}

const PARTICLE_COLORS = [
  "rgba(59, 130, 246, 0.6)",   // blue
  "rgba(99, 102, 241, 0.5)",   // indigo
  "rgba(139, 92, 246, 0.4)",   // violet
  "rgba(168, 85, 247, 0.35)",  // purple
]

const COMET_COLORS = [
  "#3b82f6", // blue
  "#8b5cf6", // violet
  "#ec4899", // pink
  "#f97316", // orange
  "#10b981", // emerald
]

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const trailRef = useRef<TrailPoint[]>([])
  const mouseRef = useRef({ x: -100, y: -100, isMoving: false })
  const animationRef = useRef<number>()
  const lastMouseMoveRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000)
      particlesRef.current = []

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: -Math.random() * 0.5 - 0.2,
          opacity: Math.random() * 0.5 + 0.2,
          color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
        })
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const newX = e.clientX
      const newY = e.clientY
      
      mouseRef.current = { x: newX, y: newY, isMoving: true }
      lastMouseMoveRef.current = Date.now()
      
      // Add trail point
      trailRef.current.push({
        x: newX,
        y: newY,
        age: 0,
        size: 12,
      })
      
      // Limit trail length
      if (trailRef.current.length > 50) {
        trailRef.current.shift()
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current.isMoving = false
    }

    const drawParticles = () => {
      particlesRef.current.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Reset particle if it goes off screen
        if (particle.y < -10) {
          particle.y = canvas.height + 10
          particle.x = Math.random() * canvas.width
        }
        if (particle.x < -10) particle.x = canvas.width + 10
        if (particle.x > canvas.width + 10) particle.x = -10
      })
    }

    const drawCometTrail = () => {
      const trail = trailRef.current
      if (trail.length < 2) return

      // Check if mouse stopped moving
      if (Date.now() - lastMouseMoveRef.current > 100) {
        mouseRef.current.isMoving = false
      }

      // Draw trail
      for (let i = 0; i < trail.length; i++) {
        const point = trail[i]
        const progress = i / trail.length
        const alpha = progress * 0.8
        const size = point.size * progress

        // Create gradient for each point
        const colorIndex = Math.floor((i / trail.length) * COMET_COLORS.length)
        const color = COMET_COLORS[Math.min(colorIndex, COMET_COLORS.length - 1)]

        // Glow effect
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, size * 2
        )
        gradient.addColorStop(0, `${color}`)
        gradient.addColorStop(0.4, `${color}88`)
        gradient.addColorStop(1, "transparent")

        ctx.beginPath()
        ctx.arc(point.x, point.y, size * 2, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Core of the trail
        ctx.beginPath()
        ctx.arc(point.x, point.y, size * 0.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
        ctx.fill()

        // Age the point
        point.age++
      }

      // Draw comet head (bright ball)
      if (trail.length > 0 && mouseRef.current.isMoving) {
        const head = trail[trail.length - 1]
        
        // Outer glow
        const headGradient = ctx.createRadialGradient(
          head.x, head.y, 0,
          head.x, head.y, 30
        )
        headGradient.addColorStop(0, "rgba(255, 255, 255, 0.9)")
        headGradient.addColorStop(0.2, "rgba(139, 92, 246, 0.7)")
        headGradient.addColorStop(0.5, "rgba(59, 130, 246, 0.4)")
        headGradient.addColorStop(1, "transparent")

        ctx.beginPath()
        ctx.arc(head.x, head.y, 30, 0, Math.PI * 2)
        ctx.fillStyle = headGradient
        ctx.fill()

        // Inner bright core
        ctx.beginPath()
        ctx.arc(head.x, head.y, 6, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255, 255, 255, 1)"
        ctx.fill()
      }

      // Remove old trail points
      trailRef.current = trail.filter((point) => point.age < 30)
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      drawParticles()
      drawCometTrail()

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ 
        background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)",
        zIndex: 0 
      }}
    />
  )
}
