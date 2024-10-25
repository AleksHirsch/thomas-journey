import { useState } from "react";

import { Choices } from "@/components/choices";
import { Screen } from "@/components/screen";
import { useGameContext } from "@/providers/game-provider";
import { TextProvider } from "@/providers/text-provider";

import ScreenImage from "~/images/splash.png";

const choices = [
  {
    title: "Zagrajmy w mecz! ",
    description:
      "Mały czarodziej kontra wielki ogr. Jeśli strzelisz mi gola, możesz iść dalej.",
  },
  {
    title: "Zaśpiewaj mi hymn Lecha Poznań!",
    description:
      "Jeśli trafisz we właściwe nuty, możesz liczyć na bezpieczny przejazd przez moje tereny.",
  },
  {
    title: "Podrap mnie po plecach!",
    description:
      "Jestem za duży, żeby dosięgnąć w odpowiednie miejsce, a strasznie mnie swędzi",
  },
];

export const Screen9 = () => {
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
