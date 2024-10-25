"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";

import { Typewriter } from "@/components/typewriter";

type TextProviderProps = {
  paragraphs: string[];
  onFinished: () => void;
};

type TextContextType = {
  screenIndex: number;
  onContinue: () => void;
  isLast: boolean;
};

const TextContext = createContext<TextContextType | null>(null);

export const TextProvider = (props: TextProviderProps) => {
  const [index, setIndex] = useState(0);

  const onContinue = () => {
    setIndex(index + 1);
  };

  const isLast = index === props.paragraphs.length - 1;

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Enter" || event.key === " ") {
        if (isLast) {
          props.onFinished();
        } else {
          onContinue();
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLast, onContinue, props.onFinished]);

  return (
    <TextContext.Provider value={{ screenIndex: index, onContinue, isLast }}>
      <div
        onClick={() => {
          if (isLast) {
            props.onFinished();
          } else {
            onContinue();
          }
        }}
        className="p-4 bg-black/50 min-h-14 w-2/3 mx-auto mb-[10vh] mt-auto"
      >
        <AnimatePresence mode="wait">
          {props.paragraphs.map((paragraph, i) => {
            return index === i && <Typewriter key={i} text={paragraph} />;
          })}
        </AnimatePresence>
      </div>
    </TextContext.Provider>
  );
};

export const useTextContext = () => {
  const context = useContext(TextContext);
  if (!context) {
    throw new Error("useText must be used within a TextProvider");
  }

  return context;
};
