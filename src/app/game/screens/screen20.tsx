import { Screen } from "@/components/screen";
import { useGameContext } from "@/providers/game-provider";
import { TextProvider } from "@/providers/text-provider";

import ScreenImage from "~/images/splash.png";

export const Screen20 = () => {
  const { onContinue } = useGameContext();

  return (
    <Screen image={ScreenImage}>
      <TextProvider
        paragraphs={[
          "Tomek powoli otworzył oczy, czując, jak każdy kawałek jego ciała protestuje. Był poobijany i wyraźnie miał za sobą nieprzyjemne przygody.",
          "Rozglądając się, zauważył, że leży w małej polanie otoczonej drzewami, a obok niego siedzi Gaweł, miejscowy chłop, znany z tego, że pędzi bimber w swoim domku tuż obok Pijackiego Lasu.",
        ]}
        onFinished={onContinue}
      />
    </Screen>
  );
};
