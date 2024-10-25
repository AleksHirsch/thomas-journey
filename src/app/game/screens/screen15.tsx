import { Screen } from "@/components/screen";
import { useGameContext } from "@/providers/game-provider";
import { TextProvider } from "@/providers/text-provider";

import ScreenImage from "~/images/splash.png";

export const Screen15 = () => {
  const { onContinue } = useGameContext();

  return (
    <Screen image={ScreenImage}>
      <TextProvider
        paragraphs={[
          "Tomek godzi się ze stratą i rusza dalej. Nieco bardziej przybity zastanawia się nad tym co go spotkało.",
          "Został okradziony przez bandę skrzatów. Skoro skrzaty są takie niebezpieczne to co jeszcze go spotka w tym lesie. Rozmyślanie Tomka przerwał czyjś krzyk.",
        ]}
        onFinished={onContinue}
      />
    </Screen>
  );
};
