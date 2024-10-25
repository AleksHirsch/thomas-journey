import { Screen } from "@/components/screen";
import { useGameContext } from "@/providers/game-provider";
import { TextProvider } from "@/providers/text-provider";

import ScreenImage from "~/images/splash.png";

export const Screen16 = () => {
  const { onContinue } = useGameContext();

  return (
    <Screen image={ScreenImage}>
      <TextProvider
        paragraphs={[
          "– Ej, czarodziej! – z ciemności wyłonił się Michał, typowy łotrzyk z kapturkiem na głowie i sztyletem w ręce. - Dawaj złoto, albo... albo czekają cię kłopoty!",
          "Tomek nieco zaskoczony, ale pewny siebie odpowiedział:",
          "- Nie mam czasu na takie głupoty. Spływaj stąd zanim ci nie zrobię krzywdy! - Przecież to tylko człowiek. Z łatwością go pokonam przy użyciu magii. Już dostałem swoją nauczkę, nie dam się pokonać drugi raz - pomyślał Tomek.",
        ]}
        onFinished={onContinue}
      />
    </Screen>
  );
};
