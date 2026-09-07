'use client'
import { ReactNode, useLayoutEffect, useRef } from "react"

type ScrollTextRevealProps = {
  children: ReactNode
  className?: string
  tag?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  delay?: number
  repeat?: boolean
}

export default function ScrollTextReveal2({
  children,
  className = "",
  tag: Tag = "p",
  delay = 0,
  repeat = true,
}: ScrollTextRevealProps) {
  const textRef = useRef<HTMLElement | null>(null)

  useLayoutEffect(() => {
    const element = textRef.current

    if (!element) {
      return
    }

    const originalChildren = Array.from(element.childNodes).map((node) => node.cloneNode(true))
    const textNodes: Text[] = []
    const letterSpans: HTMLSpanElement[] = []
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT)

    while (walker.nextNode()) {
      const currentNode = walker.currentNode as Text
      const parentTag = currentNode.parentElement?.tagName

      if (parentTag && ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parentTag)) {
        continue
      }

      textNodes.push(currentNode)
    }

    textNodes.forEach((node) => {
      const text = node.textContent ?? ""

      if (!text.trim()) {
        return
      }

      const fragment = document.createDocumentFragment()
      const wordTokens = text.match(/\S+|\s+/g) ?? []

      wordTokens.forEach((token) => {
        if (/^\s+$/.test(token)) {
          fragment.appendChild(document.createTextNode(token))
          return
        }

        const word = document.createElement("span")

        word.style.display = "inline-flex"
        word.style.whiteSpace = "nowrap"
        word.style.alignItems = "baseline"

        for (const character of token) {
          const letter = document.createElement("span")

          letter.textContent = character
          letter.style.display = "inline-block"
          letter.style.willChange = "opacity"
          letter.style.opacity = "0.3"
          letter.dataset.scrollTextRevealLetter = "true"

          word.appendChild(letter)
          letterSpans.push(letter)
        }

        fragment.appendChild(word)
      })

      node.parentNode?.replaceChild(fragment, node)
    })

    let animation: { scrollTrigger?: { kill: () => void }; kill: () => void } | undefined
    let cancelled = false

    void import("gsap").then(async ({ gsap }) => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")

      if (cancelled) {
        return
      }

      gsap.registerPlugin(ScrollTrigger)

      gsap.set(letterSpans, { opacity: 0.5 })

      animation = gsap.to(letterSpans, {
        opacity: 1,
        ease: "none",
        duration: 0.02,
        delay,
        stagger: 0.3,
        scrollTrigger: {
          trigger: element,
          start: "top 75%",
          end: "bottom 40%",
          scrub: true,
          once: !repeat,
        },
      })
    })

    return () => {
      cancelled = true
      animation?.scrollTrigger?.kill()
      animation?.kill()
      element.replaceChildren(...originalChildren)
    }
  }, [children, delay, repeat])

  return (
    <Tag ref={textRef as React.RefObject<HTMLParagraphElement>} className={className}>
      {children}
    </Tag>
  )
}