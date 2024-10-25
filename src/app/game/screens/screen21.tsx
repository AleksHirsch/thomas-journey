import { Screen } from "@/components/screen";
import { useGameContext } from "@/providers/game-provider";
import { TextProvider } from "@/providers/text-provider";

import ScreenImage from "~/images/splash.png";

export const Screen21 = () => {
  const { onContinue } = useGameContext();

  return (
    <Screen image={ScreenImage}>
      <TextProvider
        paragraphs={[
          "Gaweł, z butelką w dłoni, zerknął na Tomka, a jego twarz rozjaśniła się szerokim uśmiechem.",
          "– A, w końcu się obudziłeś! – zawołał radośnie. – Jak tam, czarodzieju? Po przygodach w lesie? Mam tu coś dla ciebie! Gżdylnij sobie! – dodał, podając butelkę do Tomka.",
        ]}
        onFinished={onContinue}
      />
    </Screen>
  );
};
