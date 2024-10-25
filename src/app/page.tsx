"use client";

import Image from "next/image";
import Link from "next/link";

import SplashImage from "~/images/splash.png";

import { FadeIn } from "../components/fade-in";

export default function Home() {
  return (
    <main className="grid place-items-center min-h-dvh">
      <Image
        src={SplashImage}
        alt="Intro"
        className="object-cover -z-10"
        fill
      />
      <FadeIn className="space-y-24">
        <h1 className="text-5xl text-center text-shadow">
          (Pijacka) Przygoda Tomka
        </h1>
        <div className="flex justify-center">
          <Link
            href={"/game"}
            className="p-6 bg-gray-50 text-4xl text-gray-800 hover:bg-gray-800 hover:text-gray-50 transition-colors"
          >
            Start
          </Link>
        </div>
      </FadeIn>
    </main>
  );
}
