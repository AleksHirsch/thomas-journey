"use client";

import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export const Typewriter = (props: { text: string }) => {
  const ref = useRef(null);

  useGSAP(() => {
    gsap.to(ref.current, {
      text: props.text,
      delay: 0.2,
      duration: props.text.length * 0.01,
      ease: "none",
      onComplete: () => {
        gsap.to(".continue", {
          duration: 1,
          delay: 0.5,
          opacity: 1,
        });
      },
    });
  }, [props.text]);

  return (
    <p>
      <span ref={ref} />
      <span className="continue opacity-0 block text-right">Dalej &gt;</span>
    </p>
  );
};
