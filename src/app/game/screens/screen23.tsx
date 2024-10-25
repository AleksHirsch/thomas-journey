import { Screen } from "@/components/screen";
import { useGameContext } from "@/providers/game-provider";
import { TextProvider } from "@/providers/text-provider";

import ScreenImage from "~/images/splash.png";

const results = [
  [
    "Gaweł patrzył w osłupieniu i pognał za Tomkiem w krzaki krzycząc moja wódeczka. Dogania Tomka i zaczynają rozmawiać o tym co ich sprowadza do lasu.",
  ],
  ["Gaweł chillował do opowieści Tomka popijając gżdylek, za gżdylkiem"],
  [
    "Kiedy rum zaszumi w głowie. Cały świat nabiera treści, Wtedy chętnie słucha człowiek. Morskich opowieści…",
  ],
];

export const Screen23 = () => {
  const { onContinue, choices } = useGameContext();

  const choice = choices[4];

  const result = results[choice];

  return (
    <Screen image={ScreenImage}>
      <TextProvider paragraphs={result} onFinished={onContinue} />
    </Screen>
  );
};
