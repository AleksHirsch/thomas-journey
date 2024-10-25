import { Screen } from "@/components/screen";
import { useGameContext } from "@/providers/game-provider";
import { TextProvider } from "@/providers/text-provider";

import ScreenImage from "~/images/splash.png";

export const Screen10 = () => {
  const { onContinue } = useGameContext();

  return (
    <Screen image={ScreenImage}>
      <TextProvider
        paragraphs={[
          "Krzysztof zadowolony z wykonanego przez Tomka zadania pozwala mu ruszyć dalej przez jego podwórko. Tomek uradowany, że takie przyjazne istoty mieszkają w lesie, odetchnął z ulgą i ruszył w dalszą podróż.",
        ]}
        onFinished={onContinue}
      />
    </Screen>
  );
};
