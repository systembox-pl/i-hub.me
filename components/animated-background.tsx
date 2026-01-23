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

interface GlowColor {
  r: number
  g: number
  b: number
}

interface TrailPoint {
  x: number
  y: number
  vx: number
  vy: number
  color: GlowColor
  life: number
  maxLife: number
  size: number
}

const PARTICLE_COLORS = [
  "rgba(59, 130, 246, 0.5)",
  "rgba(99, 102, 241, 0.4)",
  "rgba(139, 92, 246, 0.35)",
  "rgba(168, 85, 247, 0.3)",
]

const GLOW_COLORS: GlowColor[] = [
  { r: 236, g: 72, b: 153 },  // pink
  { r: 168, g: 85, b: 247 },  // purple
  { r: 139, g: 92, b: 246 },  // violet
  { r: 59, g: 130, b: 246 },  // blue
  { r: 249, g: 115, b: 22 },  // orange
  { r: 239, g: 68, b: 68 },   // red
  { r: 16, g: 185, b: 129 },  // emerald
]

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const trailRef = useRef<TrailPoint[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const prevMouseRef = useRef({ x: -1000, y: -1000 })
  const currentColorRef = useRef<GlowColor>({ ...GLOW_COLORS[0] })
  const targetColorRef = useRef<GlowColor>({ ...GLOW_COLORS[0] })
  const animationRef = useRef<number | null>(null)

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
      const particleCount = Math.floor((canvas.width * canvas.height) / 18000)
      particlesRef.current = []

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: -Math.random() * 0.4 - 0.1,
          opacity: Math.random() * 0.4 + 0.1,
          color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
        })
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const lerpColor = (current: GlowColor, target: GlowColor, speed: number) => {
      current.r += (target.r - current.r) * speed
      current.g += (target.g - current.g) * speed
      current.b += (target.b - current.b) * speed
    }

    const drawParticles = () => {
      for (const particle of particlesRef.current) {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.y < -10) {
          particle.y = canvas.height + 10
          particle.x = Math.random() * canvas.width
        }
        if (particle.x < -10) particle.x = canvas.width + 10
        if (particle.x > canvas.width + 10) particle.x = -10
      }
    }

    const updateAndDrawTrail = () => {
      const { x, y } = mouseRef.current
      const prevX = prevMouseRef.current.x
      const prevY = prevMouseRef.current.y

      // Calculate velocity
      const vx = x - prevX
      const vy = y - prevY
      const speed = Math.sqrt(vx * vx + vy * vy)

      // Smoothly interpolate color
      lerpColor(currentColorRef.current, targetColorRef.current, 0.03)

      // Add new trail points when mouse moves
      if (speed > 1 && x > 0 && y > 0) {
        // Random color change
        if (Math.random() < 0.02) {
          targetColorRef.current = { ...GLOW_COLORS[Math.floor(Math.random() * GLOW_COLORS.length)] }
        }

        // Add multiple points along the movement path for smoothness
        const steps = Math.ceil(speed / 5)
        for (let i = 0; i < steps; i++) {
          const t = i / steps
          const px = prevX + vx * t
          const py = prevY + vy * t

          // Add main glow point
          trailRef.current.push({
            x: px + (Math.random() - 0.5) * 20,
            y: py + (Math.random() - 0.5) * 20,
            vx: vx * 0.1 + (Math.random() - 0.5) * 1.5,
            vy: vy * 0.1 + (Math.random() - 0.5) * 1.5,
            color: { ...currentColorRef.current },
            life: 1,
            maxLife: 50 + Math.random() * 30,
            size: 80 + Math.random() * 50,
          })

          // Add secondary smaller glows for more volume
          if (Math.random() > 0.6) {
            trailRef.current.push({
              x: px + (Math.random() - 0.5) * 50,
              y: py + (Math.random() - 0.5) * 50,
              vx: (Math.random() - 0.5) * 2,
              vy: (Math.random() - 0.5) * 2,
              color: { ...currentColorRef.current },
              life: 1,
              maxLife: 35 + Math.random() * 20,
              size: 50 + Math.random() * 35,
            })
          }
        }

        // Limit trail
        while (trailRef.current.length > 150) {
          trailRef.current.shift()
        }
      }

      prevMouseRef.current = { x, y }

      // Update and draw trail points
      const trail = trailRef.current

      for (let i = trail.length - 1; i >= 0; i--) {
        const point = trail[i]

        // Update position with velocity (drift effect)
        point.x += point.vx
        point.y += point.vy

        // Slow down
        point.vx *= 0.98
        point.vy *= 0.98

        // Age the point
        point.life += 1

        const lifeRatio = 1 - point.life / point.maxLife
        if (lifeRatio <= 0) {
          trail.splice(i, 1)
          continue
        }

        const { r, g, b } = point.color
        const opacity = lifeRatio * 0.4
        const size = point.size * (0.5 + lifeRatio * 0.5)

        // Draw soft glow
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, size
        )
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${opacity})`)
        gradient.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, ${opacity * 0.6})`)
        gradient.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, ${opacity * 0.2})`)
        gradient.addColorStop(1, "transparent")

        ctx.beginPath()
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      }

      // Draw head glow at cursor if moving
      if (speed > 1 && x > 0 && y > 0) {
        const { r, g, b } = currentColorRef.current

        const headSize = 100
        const headGradient = ctx.createRadialGradient(x, y, 0, x, y, headSize)
        headGradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.5)`)
        headGradient.addColorStop(0.25, `rgba(${r}, ${g}, ${b}, 0.3)`)
        headGradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, 0.15)`)
        headGradient.addColorStop(0.8, `rgba(${r}, ${g}, ${b}, 0.03)`)
        headGradient.addColorStop(1, "transparent")

        ctx.beginPath()
        ctx.arc(x, y, headSize, 0, Math.PI * 2)
        ctx.fillStyle = headGradient
        ctx.fill()
      }

      // Always draw cursor dot
      if (x > 0 && y > 0) {
        const dotGradient = ctx.createRadialGradient(x, y, 0, x, y, 10)
        dotGradient.addColorStop(0, "rgba(220, 255, 120, 1)")
        dotGradient.addColorStop(0.4, "rgba(200, 255, 100, 0.7)")
        dotGradient.addColorStop(1, "transparent")

        ctx.beginPath()
        ctx.arc(x, y, 10, 0, Math.PI * 2)
        ctx.fillStyle = dotGradient
        ctx.fill()

        ctx.beginPath()
        ctx.arc(x, y, 3, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255, 255, 200, 1)"
        ctx.fill()
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      drawParticles()
      updateAndDrawTrail()

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("mousemove", handleMouseMove)

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
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
        zIndex: 0,
      }}
    />
  )
}
