'use client'

import { useEffect, useRef, type ReactNode } from "react"

type AnimateHeadingProps = {
  children: ReactNode
  className?: string
  tag?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div"
  delay?: number
  repeat?: boolean
}

export default function AnimateHeading({
  children,
  className = "",
  tag: Tag = "p",
  delay = 0,
  repeat = false,
}: AnimateHeadingProps) {
  const containerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const originalHTML = container.innerHTML
    const letterSpans: HTMLSpanElement[] = []

    const processTextNode = (textNode: Text): Node => {
      const text = textNode.textContent ?? ""
      const fragment = document.createDocumentFragment()

      text.split("").forEach((char) => {
        // Direct letter span (no individual mask wrappers)
        const charSpan = document.createElement("span")
        charSpan.textContent = char === " " ? "\u00A0" : char
        charSpan.style.display = "inline-block"
        charSpan.style.willChange = "transform, opacity, filter"

        fragment.appendChild(charSpan)
        letterSpans.push(charSpan)
      })

      return fragment
    }

    const processNode = (node: Node): Node => {
      if (node.nodeType === Node.TEXT_NODE) {
        return processTextNode(node as Text)
      }

      if (node.nodeType === Node.ELEMENT_NODE) {
        const clonedElement = (node as Element).cloneNode(false) as Element
        node.childNodes.forEach((child) => {
          clonedElement.appendChild(processNode(child))
        })
        return clonedElement
      }

      return node.cloneNode(true)
    }

    const fragment = document.createDocumentFragment()
    container.childNodes.forEach((child) => {
      fragment.appendChild(processNode(child))
    })

    container.replaceChildren(fragment)

    let animation: { scrollTrigger?: { kill: () => void }; kill: () => void } | undefined
    let cancelled = false

    void import("gsap").then(async ({ gsap }) => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")

      if (cancelled) return

      gsap.registerPlugin(ScrollTrigger)

      // 1:1 Match with AnimatedHeading properties
      gsap.set(letterSpans, {
        opacity: 0,
        y: -60,
        filter: "blur(10px)",
      })

      animation = gsap.to(letterSpans, {
        scrollTrigger: {
          trigger: container,
          start: "top 92%",
          once: !repeat,
          toggleActions: repeat ? "play none none reverse" : "play none none none",
        },
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power3.out",
        delay,
        stagger: {
          each: 0.04,
          from: "random",
        },
      })
    })

    return () => {
      cancelled = true
      animation?.scrollTrigger?.kill()
      animation?.kill()
      container.innerHTML = originalHTML
    }
  }, [children, delay, repeat])

  return (
    <Tag
      ref={containerRef as React.RefObject<HTMLParagraphElement>}
      className={`inline-block overflow-hidden ${className}`}
    >
      {children}
    </Tag>
  )
}