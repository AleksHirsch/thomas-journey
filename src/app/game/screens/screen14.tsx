import { Screen } from "@/components/screen";
import { useGameContext } from "@/providers/game-provider";
import { TextProvider } from "@/providers/text-provider";

import ScreenImage from "~/images/splash.png";

const results = [
  [
    "Gdy Tomek sięgał po sakiewkę, zauważył, że jej nie ma! Odwrócił wzrok w stronę miejsca gdzie przed chwilą był Marcin i zobaczył zgraję leprechaunów uciekających z jego sakiewką",
  ],
  [
    "Tomek obraża Marcina swoim zachowaniem:",
    "– A więc tak! – warknie Marcin, a z lasu wyłoni się jego banda leprechaunów. – Chciałeś nas zlekceważyć, czarodzieju? To teraz zapłacisz!",
    "Tomek zostaje zaatakowany przez bandę leprechaunów i okradziony ze złota.",
  ],
  [
    "Gdy razem tańczą Marcin podstawia specjalnie nogę Tomkowi, który się przewraca i zostaje zaatakowany przez leprechauny. Pobity i okradziony Tomek patrzy jak leprechauny uciekają nabijając się z niego",
  ],
];

export const Screen14 = () => {
  const { onContinue, choices } = useGameContext();

  const choice = choices[2];

  const result = results[choice];

  return (
    <Screen image={ScreenImage}>
      <TextProvider paragraphs={result} onFinished={onContinue} />
    </Screen>
  );
};
