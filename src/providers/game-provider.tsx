'use client'

import { createContext, useContext, useState } from 'react'
import { useRouter } from 'next/navigation'

import { AnimatePresence } from 'framer-motion'

import { gameContent } from '@/app/game/content'
import { Screen } from '@/components/screen'

type GameContextType = {
  screenIndex: number
  onContinue: () => void
  isLast: boolean
  choices: number[]
  addChoice: (choice: number) => void
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
      <AnimatePresence mode="popLayout">
        {gameContent.map((content, i) => {
          return index === i && <Screen key={i} content={content} screenId={i} />
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
