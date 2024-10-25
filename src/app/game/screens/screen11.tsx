import { Screen } from "@/components/screen";
import { useGameContext } from "@/providers/game-provider";
import { TextProvider } from "@/providers/text-provider";

import ScreenImage from "~/images/splash.png";

export const Screen11 = () => {
  const { onContinue } = useGameContext();

  return (
    <Screen image={ScreenImage}>
      <TextProvider
        paragraphs={[
          "Droga wydawała się wręcz sielankowa: delikatny wietrzyk, szum drzew, śpiew ptaków.",
          "Tomek szedł dalej przez Pijacki Las, rozmyślając o Rafciu, kiedy nagle z krzaków wyskoczył leprechaun, uśmiechając się szeroko i ukazując swoje złote zęby.",
        ]}
        onFinished={onContinue}
      />
    </Screen>
  );
};
