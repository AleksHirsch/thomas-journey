import { Screen } from "@/components/screen";
import { useGameContext } from "@/providers/game-provider";
import { TextProvider } from "@/providers/text-provider";

import ScreenImage from "~/images/screen_3.png";

export const Screen3 = () => {
  const { onContinue } = useGameContext();

  return (
    <Screen image={ScreenImage}>
      <TextProvider
        paragraphs={[
          "Tylko jedna rzecz mogła go uratować – niezwykle rzadkie smaczki rosnące w głębi Pijackiego Lasu, gdzie drzewa szepczą tajemnicze zaklęcia, a mieszkańcy lasu...",
          "cóż, nie zawsze są trzeźwi. Tomek nie miał zbyt dużo doświadczenia w wyprawach i obawiał się co go spotka, ale jego dobre serduszko i ciągłe marudzenia pieska zmotywowało go do działania.",
          "Spakował trunki, wziął swoją różdżkę przywdział płaszcz i ruszył w drogę w stronę Pijackiego Lasu.",
        ]}
        onFinished={onContinue}
      />
    </Screen>
  );
};
