import { useState } from "react";

import { Choices } from "@/components/choices";
import { Screen } from "@/components/screen";
import { useGameContext } from "@/providers/game-provider";
import { TextProvider } from "@/providers/text-provider";

import ScreenImage from "~/images/screen_5.png";

const choices = [
  {
    title: "Wyczarować podpisik.",
    description:
      "Użyć swojej czarodziejskiej mocy, by podrabiać biurokratyczny dokument. Czy urzędnik da się na to nabrać?",
  },
  {
    title: "Próbować przekupić urzędnika wódeczką.",
    description:
      "Każdy urzędnik ma swoje słabości, a w Pijackim Lesie wódka to waluta nieoceniona. Może butelczyna sprawi, że Piotrek przymknie oko na brak podpisu?",
  },
  {
    title: "Spróbować prześlizgnąć się inną drogą.",
    description:
      "Obejść las bocznymi ścieżkami, ryzykując, że po drodze wpadnie na jakiegoś jeszcze bardziej upierdliwego urzędnika… albo coś gorszego?",
  },
];

export const Screen5 = () => {
  const [choicesVisible, setChoicesVisible] = useState(false);
  const { onContinue, addChoice } = useGameContext();

  const handleChoice = (choice: number) => {
    addChoice(choice);
    onContinue();
  };

  return (
    <Screen image={ScreenImage}>
      {choicesVisible ? (
        <Choices choices={choices} onChoice={handleChoice} />
      ) : (
        <TextProvider
          paragraphs={[
            "Tomek, zdezorientowany, odpowiedział:",
            "Jaki podpisik?",
            "– No jak to jaki? Podpis ministra ds. trzeźwości na wniosku o wstęp do lasu. Bez tego ani rusz. Więc jeśli nie masz wniosku to zapraszam do urzędu, najbliższy termin za 3 tygodnie.",
            "Tomek musiał się szybko zdecydować, co zrobić. Nie mógł tyle czekać, bo Rafi by go wykończył marudzeniem. ",
          ]}
          onFinished={() => setChoicesVisible(true)}
        />
      )}
    </Screen>
  );
};
