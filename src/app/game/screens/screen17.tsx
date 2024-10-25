import { useState } from 'react'

import { Choices } from '@/components/choices'
import { Screen } from '@/components/screen'
import { useGameContext } from '@/providers/game-provider'
import { TextProvider } from '@/providers/text-provider'

import ScreenImage from '~/images/splash.png'

const choices = [
  {
    title: 'Stanąć do walki!',
    description: 'Może Michał go nie zabije',
  },
  {
    title: 'Spróbować ucieczki!',
    description: '',
  },
  {
    title: 'Zaproponować Michałowi pojedynek... na picie!',
    description: '',
  },
]

export const Screen17 = () => {
  const [choicesVisible, setChoicesVisible] = useState(false)
  const { onContinue, addChoice } = useGameContext()

  const handleChoice = (choice: number) => {
    addChoice(choice)
    onContinue()
  }

  return (
    <Screen image={ScreenImage}>
      {choicesVisible ? (
        <Choices choices={choices} onChoice={handleChoice} />
      ) : (
        <TextProvider
          paragraphs={[
            '- No dobra, skoro tak... - powiedział zakładając bokserską szatę i wypijając eliksir o nazwie pięściogrom dający  +10 do siły ataku.',
            'Tomek poczuł, jak miękną mu kolana na widok Michała, który teraz emanował czystą siłą i sportową zaciętością. Miał jednak trzy opcje, jak wybrnąć z tej trudnej sytuacji:',
          ]}
          onFinished={() => setChoicesVisible(true)}
        />
      )}
    </Screen>
  )
}
