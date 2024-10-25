'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'

import { AnimatePresence } from 'framer-motion'

import { Typewriter } from '@/components/typewriter'

type TextProviderProps = {
  paragraphs: string[]
  onFinished: () => void
}

type TextContextType = {
  screenIndex: number
  onContinue: () => void
  isLast: boolean
}

const TextContext = createContext<TextContextType | null>(null)

export const TextProvider = (props: TextProviderProps) => {
  const [index, setIndex] = useState(0)

  const onContinue = useCallback(() => {
    setIndex(index + 1)
  }, [index])

  const isLast = index === props.paragraphs.length - 1

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Enter' || event.key === ' ') {
        if (isLast) {
          props.onFinished()
        } else {
          onContinue()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isLast, onContinue, props])

  return (
    <TextContext.Provider value={{ screenIndex: index, onContinue, isLast }}>
      <div
        onClick={() => {
          if (isLast) {
            props.onFinished()
          } else {
            onContinue()
          }
        }}
        className="mx-auto mb-[10vh] mt-auto min-h-14 w-2/3 bg-black/50 p-4"
      >
        <AnimatePresence mode="wait">
          {props.paragraphs.map((paragraph, i) => {
            return index === i && <Typewriter key={i} text={paragraph} />
          })}
        </AnimatePresence>
      </div>
    </TextContext.Provider>
  )
}

export const useTextContext = () => {
  const context = useContext(TextContext)
  if (!context) {
    throw new Error('useText must be used within a TextProvider')
  }

  return context
}
