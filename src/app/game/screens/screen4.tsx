import { Screen } from "@/components/screen";
import { useGameContext } from "@/providers/game-provider";
import { TextProvider } from "@/providers/text-provider";

import ScreenImage from "~/images/screen_4.png";

export const Screen4 = () => {
  const { onContinue } = useGameContext();

  return (
    <Screen image={ScreenImage}>
      <TextProvider
        paragraphs={[
          "Tomek szybko dotarł do Pijackiego Lasu i już miał wchodzić do środka, gdy nagle z krzaków wyskoczył mężczyzna w eleganckim garniturze, z teczką w ręku i czapką z daszkiem na głowie.",
          "– Stop! Ani kroku dalej! – zawołał stanowczo urzędnik Piotrek.",
          "Tomek zdziwiony zatrzymał się, a urzędnik kontynuował:",
          "– Wstęp do Pijackiego Lasu bez odpowiedniego wniosku jest surowo zabroniony! Gdzie podpisik, wariacie?",
        ]}
        onFinished={onContinue}
      />
    </Screen>
  );
};
