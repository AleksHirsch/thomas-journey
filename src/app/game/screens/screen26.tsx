import { Screen } from "@/components/screen";
import { useGameContext } from "@/providers/game-provider";
import { TextProvider } from "@/providers/text-provider";

import ScreenImage from "~/images/splash.png";

const results = [
  [
    "Idąc wzdłuż morza lawy, Tomek i Gaweł czuli jak zaczyna im burczeć w brzuchach.",
    "- Chyba pora na małe co nieco - powiedział Gaweł, wyjmując kiełbaskę z kieszeni i nabijając ją na patyk.",
    "Będziesz ją tutaj piekł? - zapytał Tomek z niedowierzaniem",
    "Tak - odpowiedział Gaweł otwierając zakupione wcześniej piwerko i wyciągając nogi nad brzegiem lawy",
    "No dobra - powiedział entuzjastycznie Tomek, siadając obok i otwierając piwerko",
  ],
  [
    "Wędrując przez pole kwiatów, Tomek i Gaweł czuli się jak w bajce. Kwiaty falowały na wietrze, ptaszki śpiewały, a słońce świeciło nad ich głowami.",
    "– Aż chce się hopsać! – zawołał Tomek, na co Gaweł od razu odpowiedział energicznym skokiem.",
    "I tak zaczęli wesoło hopsać jak Shrek i Fiona wśród kwiatów, a każde ich podskoczenie wzbudzało śmiech i euforię. W tle pojawili się sprzedawcy z broszurami, którzy patrzyli na nich z niedowierzaniem, ale Tomek i Gaweł nic sobie z tego nie robili.",
  ],
  [
    "Gęsty las otoczył ich niczym tajemniczy labirynt. Z każdej strony słychać było szelest liści i chichot ukrytych stworzeń. W końcu Tomek i Gaweł natknęli się na grupkę potworów grających w karty przy ognisku.",
    "– Masz jakieś czwórki? – zapytał jeden z potworów.",
    "– Nie, ale mam króle... – odpowiedział inny.",
    "Potwory spojrzały na nich obojętnie.",
    "Gracie? - zapytał pierwszy z potworów.",
    "Gramy! - odpowiedzieli oboje.",
    "Kilka godzin później bohaterowie uznali, że chyba czas na nich i udali się w dalszą podróż.",
  ],
];

export const Screen26 = () => {
  const { onContinue, choices } = useGameContext();

  const choice = choices[4];

  const result = results[choice];

  return (
    <Screen image={ScreenImage}>
      <TextProvider paragraphs={result} onFinished={onContinue} />
    </Screen>
  );
};
