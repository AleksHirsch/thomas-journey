'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { AnimatePresence } from 'framer-motion'

import { gameContent } from '@/app/game/content'
import { Screen } from '@/components/screen'

import SplashImage from '~/images/splash.webp'

type GameContextType = {
  screenIndex: number
  onContinue: () => void
  isLast: boolean
  choices: number[]
  addChoice: (choice: number) => void
}

type ImageWithFallbackProps = React.ComponentProps<typeof Image>

const ImageWithFallback = ({ alt, src, ...props }: ImageWithFallbackProps) => {
  const [error, setError] = useState(false)

  useEffect(() => {
    setError(false)
  }, [src])

  return (
    <Image alt={alt} onError={() => setError(true)} src={error ? SplashImage : src} {...props} />
  )
}

const GameContext = createContext<GameContextType | null>(null)

export const GameProvider = () => {
  const [index, setIndex] = useState(0)
  const [choices, setChoices] = useState<number[]>([])
  const { push } = useRouter()

  const addChoice = (choice: number) => {
    setChoices([...choices, choice])
  }

  const isLast = index === gameContent.length - 1

  const onContinue = () => {
    if (isLast) {
      push('/end')
      return
    }
    setIndex(index + 1)
  }

  return (
    <GameContext.Provider value={{ screenIndex: index, onContinue, isLast, choices, addChoice }}>
      <>
        {gameContent.map((_, i) => {
          return (
            <ImageWithFallback
              key={i}
              src={`/images/screen_${i + 1}.webp`}
              alt="screen"
              loading="eager"
              fill
              className={'-z-10 object-cover transition-opacity duration-300'}
              style={{
                opacity: index === i ? 1 : 0,
              }}
            />
          )
        })}
      </>
      <AnimatePresence mode="popLayout">
        {gameContent.map((content, i) => {
          return index === i && <Screen key={i} content={content} />
        })}
      </AnimatePresence>
    </GameContext.Provider>
  )
}

export const useGameContext = () => {
  const context = useContext(GameContext)
  if (!context) {
    throw new Error('useGame must be used within a GameProvider')
  }

  return context
}
