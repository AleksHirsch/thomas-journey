import { Screen } from "@/components/screen";
import { useGameContext } from "@/providers/game-provider";
import { TextProvider } from "@/providers/text-provider";

import ScreenImage from "~/images/splash.png";

export const Screen29 = () => {
  const { onContinue } = useGameContext();

  return (
    <Screen image={ScreenImage}>
      <TextProvider
        paragraphs={[
          "– A więc to wy – powiedział Paweł, leniwie głaszcząc króliczki. – Gaweł, dawno się nie widzieliśmy. A to pewnie Tomek, ten czarodziej, który szuka ratunku dla swojego psiaka.",
          "Tomek skinął głową, próbując nie zwracać uwagi na króliczki, które biegały między jego nogami i podgryzały jego buty.",
          "– Potrzebujemy rzadkich smaczków, które uratują Rafika – powiedział Tomek. – Wiem, że wy macie dostęp do wszystkiego, co rośnie w tym lesie.",
          "Paweł spojrzał na niego z lekkim uśmiechem, po czym powiedział:",
          "– To prawda, króliczki są ekspertami od smaczków. Znamy każdy liść, każdą łodyżkę w tym lesie. Ale... – tu jego ton stał się poważniejszy – nic nie ma za darmo.",
        ]}
        onFinished={onContinue}
      />
    </Screen>
  );
};
