import { Screen } from "@/components/screen";
import { useGameContext } from "@/providers/game-provider";
import { TextProvider } from "@/providers/text-provider";

import ScreenImage from "~/images/splash.png";

export const Screen12 = () => {
  const { onContinue } = useGameContext();

  return (
    <Screen image={ScreenImage}>
      <TextProvider
        paragraphs={[
          "To był Marcin, znany w okolicy z tego, że zawsze miał coś na sprzedaż.",
          "– Hej, czarodzieju! – zawołał Marcin – Słyszałem, że szukasz rzadkich smaczków! Ale mam dla ciebie lepszą ofertę.",
          "Co powiesz na pokaz tańca mojego ludu? Tylko dla ciebie! W zamian poproszę o... niewielką zapłatę.",
          "Tomek spojrzał na leprechauna z niedowierzaniem. Marcin wyglądał jakby przyjechał z innej bajki. Marcin kontynuował:",
          "– Wiesz, my leprechauni jesteśmy świetnymi tancerzami! Taki taniec może przynieść szczęście, a ja obiecuję, że na końcu tańca powiem ci, gdzie znajdziesz rzadkie smaczki, które szukasz!",
        ]}
        onFinished={onContinue}
      />
    </Screen>
  );
};
