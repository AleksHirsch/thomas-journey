import { useState } from 'react'

import { Choices } from '@/components/choices'
import { Screen } from '@/components/screen'
import { useGameContext } from '@/providers/game-provider'
import { TextProvider } from '@/providers/text-provider'

import ScreenImage from '~/images/splash.png'

const choices = [
  {
    title: 'Zatrzymać się i podziwiać piękno wróżka Matiego.',
    description: '',
  },
  {
    title: 'Wyjąć packę na muchy i przegonić natręta.',
    description: '',
  },
  {
    title: 'Zaprzyjaźnić się wypijając Bruderschafta',
    description: '',
  },
]

export const Screen27 = () => {
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
            'Po jakimś czasie dotarli do Wróżkowej Doliny, ostatnim przystanku dzielącym ich od terytorium Mafii Zielarzy. Wróżkowa Polana była pełna Wróżkowej Polany, pełna blasku i magii.',
            'Z każdej strony docierały do nich dźwięki delikatnej muzyki, a wszędzie wokoło latało pełno wróżek.',
            'Jedna z wróżek o imieniu Mati, w pięknej, błyszczącej sukni szczególnie zainteresowała się przybyszami i latała dookoła nich. Tomek mógł:',
          ]}
          onFinished={() => setChoicesVisible(true)}
        />
      )}
    </Screen>
  )
}
