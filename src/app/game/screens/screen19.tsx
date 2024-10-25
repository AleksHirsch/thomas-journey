import { Screen } from "@/components/screen";
import { useGameContext } from "@/providers/game-provider";
import { TextProvider } from "@/providers/text-provider";

import ScreenImage from "~/images/splash.png";

export const Screen19 = () => {
  const { onContinue } = useGameContext();

  return (
    <Screen image={ScreenImage}>
      <TextProvider
        paragraphs={[
          "Nie mineło długo jak z walki Tomka z Michałem zrobiło się niemałe zbiegowisko. Pojawili się biznesmeni obstawiający wynik walki. Wśród publiczności Tomek zauważył nawet bandę leprechaunów z jego pieniędzmi.",
          "Nie zdążył się lepiej rozejrzeć, bo Michał już ruszył na niego z pięściami. Świat nagle zawirował, a potem nastała ciemność.",
        ]}
        onFinished={onContinue}
      />
    </Screen>
  );
};
