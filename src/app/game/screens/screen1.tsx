import { Screen } from "@/components/screen";
import { useGameContext } from "@/providers/game-provider";
import { TextProvider } from "@/providers/text-provider";

import ScreenImage from "~/images/screen_1.png";

export const Screen1 = () => {
  const { onContinue } = useGameContext();

  return (
    <Screen image={ScreenImage}>
      <TextProvider
        paragraphs={[
          "W odległej krainie, gdzie smoki leniwie popijają herbatę, a wróżki wesoło grają w karty, mieszkał sobie pewien czarodziej o imieniu... Tomek.",
          "Ale nie byle jaki to był czarodziej – potężniejszy niż Merlin, bardziej stylowy niż Gandalf i zdecydowanie bardziej uroczy niż kot w butach.",
        ]}
        onFinished={onContinue}
      />
    </Screen>
  );
};
