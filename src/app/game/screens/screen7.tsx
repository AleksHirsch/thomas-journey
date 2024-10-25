import { Screen } from "@/components/screen";
import { useGameContext } from "@/providers/game-provider";
import { TextProvider } from "@/providers/text-provider";

import ScreenImage from "~/images/splash.png";

export const Screen7 = () => {
  const { onContinue } = useGameContext();

  return (
    <Screen image={ScreenImage}>
      <TextProvider
        paragraphs={[
          "Tomek przedziera się z trudem przez krzaki, zwracając uwagę na odgłos chlupiącej wody i dziwnej melodii dochodzącej zza krzaków. Tomek wyjrzał lekko się wychylił, by odkryć... ogra",
          "Gigantyczny ogr o imieniu Krzysztof siedział pośrodku ogromnego bajorka, kąpiąc się w jego błotnistej wodzie, nucąc pod nosem hymn Lecha Poznań i rzucając sobie kamyczki, które lądowały z pluskiem na brzegu.",
          "Tomek zatrzymał się, nieco zaniepokojony, ale Krzysztof, dostrzegając go, natychmiast uśmiechnął się szeroko, jakby zobaczył dawno niewidzianego kolegę z trybun stadionu.",
        ]}
        onFinished={onContinue}
      />
    </Screen>
  );
};
