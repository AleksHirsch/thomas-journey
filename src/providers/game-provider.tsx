"use client";

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

import { AnimatePresence } from "framer-motion";

import { Screen1 } from "@/app/game/screens/screen1";
import { Screen2 } from "@/app/game/screens/screen2";
import { Screen3 } from "@/app/game/screens/screen3";
import { Screen4 } from "@/app/game/screens/screen4";
import { Screen5 } from "@/app/game/screens/screen5";
import { Screen6 } from "@/app/game/screens/screen6";
import { Screen7 } from "@/app/game/screens/screen7";
import { Screen8 } from "@/app/game/screens/screen8";
import { Screen9 } from "@/app/game/screens/screen9";
import { Screen10 } from "@/app/game/screens/screen10";
import { Screen11 } from "@/app/game/screens/screen11";
import { Screen12 } from "@/app/game/screens/screen12";
import { Screen13 } from "@/app/game/screens/screen13";
import { Screen14 } from "@/app/game/screens/screen14";
import { Screen15 } from "@/app/game/screens/screen15";
import { Screen16 } from "@/app/game/screens/screen16";
import { Screen17 } from "@/app/game/screens/screen17";
import { Screen18 } from "@/app/game/screens/screen18";
import { Screen19 } from "@/app/game/screens/screen19";
import { Screen20 } from "@/app/game/screens/screen20";
import { Screen21 } from "@/app/game/screens/screen21";
import { Screen22 } from "@/app/game/screens/screen22";
import { Screen23 } from "@/app/game/screens/screen23";
import { Screen24 } from "@/app/game/screens/screen24";
import { Screen25 } from "@/app/game/screens/screen25";
import { Screen26 } from "@/app/game/screens/screen26";
import { Screen27 } from "@/app/game/screens/screen27";
import { Screen28 } from "@/app/game/screens/screen28";
import { Screen29 } from "@/app/game/screens/screen29";

type GameContextType = {
  screenIndex: number;
  onContinue: () => void;
  isLast: boolean;
  choices: number[];
  addChoice: (choice: number) => void;
};

const screens = [
  Screen1,
  Screen2,
  Screen3,
  Screen4,
  Screen5,
  Screen6,
  Screen7,
  Screen8,
  Screen9,
  Screen10,
  Screen11,
  Screen12,
  Screen13,
  Screen14,
  Screen15,
  Screen16,
  Screen17,
  Screen18,
  Screen19,
  Screen20,
  Screen21,
  Screen22,
  Screen23,
  Screen24,
  Screen25,
  Screen26,
  Screen27,
  Screen28,
  Screen29,
];

const GameContext = createContext<GameContextType | null>(null);

export const GameProvider = () => {
  const [index, setIndex] = useState(0);
  const [choices, setChoices] = useState<number[]>([]);
  const { push } = useRouter();

  const addChoice = (choice: number) => {
    setChoices([...choices, choice]);
  };

  const isLast = index === screens.length - 1;

  const onContinue = () => {
    if (isLast) {
      push("/end");
      return;
    }
    setIndex(index + 1);
  };

  return (
    <GameContext.Provider
      value={{ screenIndex: index, onContinue, isLast, choices, addChoice }}
    >
      <AnimatePresence mode="wait">
        {screens.map((Screen, i) => {
          return index === i && <Screen key={i} />;
        })}
      </AnimatePresence>
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }

  return context;
};
