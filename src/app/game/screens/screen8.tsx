import { Screen } from "@/components/screen";
import { useGameContext } from "@/providers/game-provider";
import { TextProvider } from "@/providers/text-provider";

import ScreenImage from "~/images/splash.png";

export const Screen8 = () => {
  const { onContinue } = useGameContext();

  return (
    <Screen image={ScreenImage}>
      <TextProvider
        paragraphs={[
          "– Ooo, witaj, czarodzieju! Co cię sprowadza w te strony? – zawołał ogr, podnosząc się z wody.",
          "Tomek, trochę zbity z tropu, odpowiedział:",
          "– Eee, wędruję po Pijackim Lesie, szukam smaczków, które pomogą wyleczyć mojego pieska...",
          "Krzysztof zmarszczył brwi, jakby chciał pomóc, ale nie do końca wiedział jak.",
        ]}
        onFinished={onContinue}
      />
    </Screen>
  );
};
