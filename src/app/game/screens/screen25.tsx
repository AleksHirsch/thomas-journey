import { useState } from 'react'

import { Choices } from '@/components/choices'
import { Screen } from '@/components/screen'
import { useGameContext } from '@/providers/game-provider'
import { TextProvider } from '@/providers/text-provider'

import ScreenImage from '~/images/splash.png'

const choices = [
  {
    title: 'Morze Lawy z zimnym piwerkiem.',
    description: '',
  },
  {
    title: 'Kwiaty, ale z natrętnymi pracownikami banku.',
    description: '',
  },
  {
    title: 'Dziką trasę przez las z szansą na partyjkę pokerka.',
    description: '',
  },
]

export const Screen25 = () => {
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
            'Szybko dotarli do miejsca, gdzie ścieżki rozdzielały się w dwóch kierunkach. Na prawo prowadziła droga otoczona wulkanicznymi skałami, a w oddali słychać było bulgoczący dźwięk lawy.',
            '– Idąc tą trasą czujesz się jak kiełbaska na grillu! – zawołał Gaweł. – Ale za to na trasie sprzedają zimne piwerko!',
            'Na lewo prowadziła droga usiana kolorowymi kwiatami, które delikatnie pachniały. – A tu… – zaczął Gaweł, ale jego entuzjazm szybko opadł. – To tylko kwiatki, ale za nimi czai się grupa pracowników banku. Jak tylko zobaczą czarodzieja, będą cię namawiać do założenia konta!',
            '– Możemy też iść na szagę. Ta droga może być nieco dzika… – powiedział Gaweł, wskazując na gęstwinę. – Ale są tam potwory, które kochają grać w karty. Tylko musisz być dobry w blefowaniu!',
            'Tomek spojrzał na każdą z dróg i musiał podjąć decyzję. Którą trasę wybierze?',
          ]}
          onFinished={() => setChoicesVisible(true)}
        />
      )}
    </Screen>
  )
}
