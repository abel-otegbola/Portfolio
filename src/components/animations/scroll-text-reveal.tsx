'use client'
import { useEffect, useRef, type ReactNode,  } from "react"

type ScrollTextRevealProps = {
  children: ReactNode // Accepts strings, spans, or complex HTML elements
  className?: string
  tag?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div"
  delay?: number
  repeat?: boolean
}

export default function ScrollTextReveal({
  children,
  className = "",
  tag: Tag = "p",
  delay = 0,
  repeat = false,
}: ScrollTextRevealProps) {
  const containerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Store the original HTML markup so we can easily restore on cleanup
    const originalHTML = container.innerHTML
    const wordSpans: HTMLSpanElement[] = []

    // Helper: Processes text nodes and wraps each word in reveal masks
    const processTextNode = (textNode: Text): Node => {
      const text = textNode.textContent ?? ""
      const tokens = text.match(/\S+|\s+/g) ?? []
      const fragment = document.createDocumentFragment()

      tokens.forEach((token) => {
        // Leave whitespace as raw text nodes to preserve inline spacing
        if (/^\s+$/.test(token)) {
          fragment.appendChild(document.createTextNode(token))
          return
        }

        // Outer mask wrapper: Clips overflowing text
        const mask = document.createElement("span")
        mask.style.display = "inline-block"
        mask.style.overflow = "hidden"
        mask.style.verticalAlign = "bottom"

        // Inner element: Animated word box
        const word = document.createElement("span")
        word.textContent = token
        word.style.display = "inline-block"
        word.style.willChange = "transform"

        mask.appendChild(word)
        fragment.appendChild(mask)
        wordSpans.push(word)
      })

      return fragment
    }

    // Helper: Recursively clones elements while replacing text nodes
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

    // Build wrapped DOM tree
    const fragment = document.createDocumentFragment()
    container.childNodes.forEach((child) => {
      fragment.appendChild(processNode(child))
    })

    // Clear and mount the newly structured content
    container.replaceChildren(fragment)

    let animation: { scrollTrigger?: { kill: () => void }; kill: () => void } | undefined
    let cancelled = false

    // Load GSAP dynamically
    void import("gsap").then(async ({ gsap }) => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")

      if (cancelled) return

      gsap.registerPlugin(ScrollTrigger)

      // Set initial hidden state
      gsap.set(wordSpans, { yPercent: 100 })

      animation = gsap.to(wordSpans, {
        scrollTrigger: {
          trigger: container,
          start: "top 92%",
          once: !repeat,
          toggleActions: repeat ? "play none none reverse" : "play none none none",
        },
        yPercent: 0,
        duration: 1.5,
        ease: "power3.out",
        delay,
        stagger: 0.04,
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
    <Tag ref={containerRef as React.RefObject<HTMLParagraphElement>} className={className}>
      {children}
    </Tag>
  )
}