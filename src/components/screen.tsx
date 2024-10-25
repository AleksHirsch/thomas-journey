import { useState } from 'react'

import { motion } from 'framer-motion'

import type { ScreenContent } from '@/app/game/content'
import { useGameContext } from '@/providers/game-provider'
import { TextProvider } from '@/providers/text-provider'

import { Choices } from './choices'

export const Screen = ({ content }: { content: ScreenContent }) => {
  const [choicesVisible, setChoicesVisible] = useState(false)
  const { onContinue, addChoice, choices } = useGameContext()

  const handleChoice = (choice: number) => {
    addChoice(choice)
    onContinue()
  }

  function renderContent() {
    if (content.results) {
      const choice = choices[choices.length - 1]

      const result = content.results[choice]

      return <TextProvider paragraphs={result} onFinished={onContinue} />
    }

    if (content.choices) {
      return choicesVisible ? (
        <Choices choices={content.choices} onChoice={handleChoice} />
      ) : (
        <TextProvider paragraphs={content.paragraphs} onFinished={() => setChoicesVisible(true)} />
      )
    }

    return <TextProvider paragraphs={content.paragraphs} onFinished={onContinue} />
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.1 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="absolute inset-0 flex min-h-dvh flex-col"
    >
      {renderContent()}
    </motion.section>
  )
}
