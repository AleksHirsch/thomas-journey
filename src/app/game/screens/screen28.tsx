import { Screen } from "@/components/screen";
import { useGameContext } from "@/providers/game-provider";
import { TextProvider } from "@/providers/text-provider";

import ScreenImage from "~/images/splash.png";

export const Screen28 = () => {
  const { onContinue } = useGameContext();

  return (
    <Screen image={ScreenImage}>
      <TextProvider
        paragraphs={[
          "Tomek nie zdążył wcielić swojego planu w życie, ponieważ zanim podjął decyzję, Gaweł zamachnął się i pacnął Matiego.",
          "Przeklęte robactwo!",
          "Mati poleciał daleko poza obszar lasu i wszelki słuch o nim zaginął.",
          "Następnie bohaterowie docierają na terytorium Mafii Zielarzy i udają się prosto na rozmowę z bossem, Pawłem Bujnowłosym.",
        ]}
        onFinished={onContinue}
      />
    </Screen>
  );
};
