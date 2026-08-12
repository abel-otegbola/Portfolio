import { useEffect, useRef } from "react"

type ScrollScaleOnScrollProps = {
  children: React.ReactNode
  className?: string
  innerClassName?: string
}

export default function ScrollScaleOnScroll({
  children,
  className = "",
  innerClassName = "",
}: ScrollScaleOnScrollProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const innerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const inner = innerRef.current

    if (!wrapper || !inner) {
      return
    }

    const mediaQuery = window.matchMedia("(min-width: 768px)")

    if (!mediaQuery.matches) {
      return
    }

    let trigger: { kill: () => void } | undefined
    let cancelled = false

    void import("gsap").then(async ({ gsap }) => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")

      if (cancelled) {
        return
      }

      gsap.registerPlugin(ScrollTrigger)

      gsap.set(inner, {
        scale: 1,
        y: 0,
        transformOrigin: "center center",
        willChange: "transform",
      })

      const tween = gsap.fromTo(
        inner,
        {
          scale: 1,
          y: 0,
        },
        {
          scale: 0.35,
          y: 358,
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: "center center",
            end: "+=40%",
            scrub: true,
          },
        }
      )

      trigger = tween.scrollTrigger

      return tween
    })

    return () => {
      cancelled = true
      trigger?.kill()
    }
  }, [])

  return (
    <div ref={wrapperRef} className={className}>
      <div ref={innerRef} className={innerClassName}>
        {children}
      </div>
    </div>
  )
}