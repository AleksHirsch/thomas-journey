import { Screen } from "@/components/screen";
import { useGameContext } from "@/providers/game-provider";
import { TextProvider } from "@/providers/text-provider";

import ScreenImage from "~/images/screen_2.png";

export const Screen2 = () => {
  const { onContinue } = useGameContext();

  return (
    <Screen image={ScreenImage}>
      <TextProvider
        paragraphs={[
          "Miał on jednak jedną wielką słabość – swojego wiernego, futrzastego przyjaciela, pieska o imieniu Rafi.",
          "Pewnego dnia, ku rozpaczy Tomka, jego ukochany piesek zachorował na bardzo rzadką, magiczną chorobę – Przewlekłe Bycie Marudą.",
        ]}
        onFinished={onContinue}
      />
    </Screen>
  );
};
