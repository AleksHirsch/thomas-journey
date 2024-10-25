import { useEffect, useState } from 'react'
import Image from 'next/image'

import { motion } from 'framer-motion'

import type { ScreenContent } from '@/app/game/content'
import { useGameContext } from '@/providers/game-provider'
import { TextProvider } from '@/providers/text-provider'

import SplashImage from '~/images/splash.png'

import { Choices } from './choices'

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

export const Screen = ({ content, screenId }: { content: ScreenContent; screenId: number }) => {
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
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="flex min-h-dvh flex-col"
    >
      <ImageWithFallback
        src={`/images/screen_${screenId + 1}.png`}
        alt={`Screen ${screenId + 1}`}
        fill
        className="-z-10 object-cover"
      />
      {renderContent()}
    </motion.section>
  )
}
