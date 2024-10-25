'use client'

import { PropsWithChildren, useRef } from 'react'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

type FadeInProps = PropsWithChildren<React.HTMLAttributes<HTMLParagraphElement>> & {
  fromY?: number
}

export function FadeIn({ fromY, ...rest }: FadeInProps) {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!container.current) return

      const children = Array.from(container.current.children)

      gsap.to(container.current, {
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
      })

      gsap.fromTo(
        children,
        {
          opacity: 0,
          y: fromY ?? 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          stagger: 1,
        },
      )
    },
    { scope: container, dependencies: [fromY] },
  )

  return <div ref={container} style={{ opacity: 0 }} {...rest} />
}
