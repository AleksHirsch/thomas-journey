import { Screen } from "@/components/screen";
import { useGameContext } from "@/providers/game-provider";
import { TextProvider } from "@/providers/text-provider";

import ScreenImage from "~/images/splash.png";

const results = [
  ["Tomek postanawia stanąć do walki."],
  [
    "Tomek bierze nogi za pas i stara się jak najszybciej uciec, lecz Michał z łatwością go dogania. Tomek uświadamia sobie, że ucieczka nic nie da",
  ],
  [
    "Michał chwilę się zastanawiał, ale uznał, że nie będzie pił z kimś kto go zlekceważył. Tomek musi stanąć do walki",
  ],
];

export const Screen18 = () => {
  const { onContinue, choices } = useGameContext();

  const choice = choices[3];

  const result = results[choice];

  return (
    <Screen image={ScreenImage}>
      <TextProvider paragraphs={result} onFinished={onContinue} />
    </Screen>
  );
};
