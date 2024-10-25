import { Screen } from "@/components/screen";
import { useGameContext } from "@/providers/game-provider";
import { TextProvider } from "@/providers/text-provider";

import ScreenImage from "~/images/splash.png";

export const Screen24 = () => {
  const { onContinue } = useGameContext();

  return (
    <Screen image={ScreenImage}>
      <TextProvider
        paragraphs={[
          "Po wspólnie spędzonym czasie Gaweł oferuje pomoc Tomkowi.",
          "- Znam dobrze bossa mafii zielarzy. Myślę, że oni powinni wiedzieć gdzie możesz znaleźć smaczki dla Rafika - powiedział Gaweł.",
          "- Ruszajmy zatem - odpowiedział Tomek.",
        ]}
        onFinished={onContinue}
      />
    </Screen>
  );
};
