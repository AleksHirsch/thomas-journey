import { Screen } from "@/components/screen";
import { useGameContext } from "@/providers/game-provider";
import { TextProvider } from "@/providers/text-provider";

import ScreenImage from "~/images/screen_6.png";

const results = [
  [
    "Piotrek nie dał się zwieść magicznym sztuczkom Tomka i kazał mu się wynosić. Tomek krążąc wzdłuż granicy lasu znalazł niestrzeżone wejście i znalazł się w gęstwinie.",
  ],
  [
    "Piotrek zgadza się na szybkiego kielona i w zamian pokazuje Tomkowi niestrzeżone wejście do lasu prowadzące przez gęste krzaki.",
  ],
  [
    "Tomek długo krąży wzdłuż lasu aż znajduje niestrzeżone wejście i wchodzi w gęste krzaki.",
  ],
];

export const Screen6 = () => {
  const { onContinue, choices } = useGameContext();

  const choice = choices[0];

  const result = results[choice];

  return (
    <Screen image={ScreenImage}>
      <TextProvider paragraphs={result} onFinished={onContinue} />
    </Screen>
  );
};
