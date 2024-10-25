import { useState } from 'react'

import { Choices } from '@/components/choices'
import { Screen } from '@/components/screen'
import { useGameContext } from '@/providers/game-provider'
import { TextProvider } from '@/providers/text-provider'

import ScreenImage from '~/images/splash.png'

const choices = [
  {
    title: 'Przyjąć gżdylka, zabrać butelkę i uciec w krzaki',
    description: 'Może Michał go nie zabije',
  },
  {
    title: 'Przyjąć gżdylka i opowiedzieć Gawłowi co się stało',
    description: '',
  },
  {
    title: 'Zaśpiewać z Gawłem Szanty',
    description: '',
  },
]

export const Screen22 = () => {
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
            'Tomek spojrzał na Gawła z lekkim niedowierzaniem. Czy powinien się napić? Może to był klucz do jego kolejnych przygód, a może prosto wprost do kłopotów?',
          ]}
          onFinished={() => setChoicesVisible(true)}
        />
      )}
    </Screen>
  )
}
