import { useState } from "react";

import { Choices } from "@/components/choices";
import { Screen } from "@/components/screen";
import { useGameContext } from "@/providers/game-provider";
import { TextProvider } from "@/providers/text-provider";

import ScreenImage from "~/images/splash.png";

const choices = [
  {
    title: "Zgodzić się na taniec i zapłacić Marcinowi",
    description:
      "W ten sposób zobaczy pokaz leprechauna i może rzeczywiście dowie się, gdzie rosną rzadkie smaczki.",
  },
  {
    title: "Spławić Marcina i powiedzieć, że nie ma czasu na jego sztuczki",
    description: "Tomek musi się spieszyć do Rafcia",
  },
  {
    title: "Zaproponować Marcinowi wspólny taniec",
    description:
      "Tomek mógłby spróbować zatańczyć razem z leprechaunem wtedy szczęście się podwoi, prawda?",
  },
];

export const Screen13 = () => {
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
            "Tomek westchnął, wiedząc, że nie ma innego wyjścia. Krzysztof kontynuował:",
          ]}
          onFinished={() => setChoicesVisible(true)}
        />
      )}
    </Screen>
  );
};
