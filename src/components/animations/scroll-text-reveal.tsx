import { useEffect, useRef } from "react"

type ScrollTextRevealProps = {
  children: string
  className?: string
  tag?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
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
  const textRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const element = textRef.current

    if (!element) {
      return
    }

    const originalText = element.textContent ?? ""
    const wordWrapper = document.createElement("span")
    const wordTokens = originalText.match(/\S+|\s+/g) ?? []
    const wordSpans: HTMLSpanElement[] = []

    wordWrapper.style.display = "inline"

    element.textContent = ""

    wordTokens.forEach((token) => {
      if (/^\s+$/.test(token)) {
        wordWrapper.appendChild(document.createTextNode(token))
        return
      }

      const word = document.createElement("span")

      word.textContent = token
      word.style.display = "inline-block"
      word.style.willChange = "transform, filter, opacity"
      word.style.transform = "translate3d(120%, 0, 0)"
      word.style.filter = "blur(12px)"
      word.style.opacity = "0"

      wordWrapper.appendChild(word)
      wordSpans.push(word)
    })

    element.appendChild(wordWrapper)

    let animation: { scrollTrigger?: { kill: () => void }; kill: () => void } | undefined
    let cancelled = false

    void import("gsap").then(async ({ gsap }) => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")

      if (cancelled) {
        return
      }

      gsap.registerPlugin(ScrollTrigger)

      animation = gsap.to(wordSpans, {
        scrollTrigger: {
          trigger: element,
          start: "top 82%",
          once: !repeat,
          toggleActions: repeat ? "play none none reverse" : "play none none none",
        },
        xPercent: -120,
        filter: "blur(0px)",
        opacity: 1,
        duration: 0.55,
        ease: "power3.out",
        delay,
        clearProps: "filter",
        stagger: 0.05,
      })
    })

    return () => {
      cancelled = true
      animation?.scrollTrigger?.kill()
      animation?.kill()
      element.textContent = originalText
    }
  }, [children, delay, repeat])

  return (
    <Tag ref={textRef as React.RefObject<HTMLParagraphElement>} className={className}>
      {children}
    </Tag>
  )
}