'use client'

import Image from 'next/image'

import { FadeIn } from '@/components/fade-in'

import SplashImage from '~/images/splash.webp'

export default function Home() {
  return (
    <main className="grid min-h-dvh place-items-center">
      <Image src={SplashImage} alt="Intro" fill className="-z-10 object-cover" />
      <FadeIn className="space-y-12 text-center">
        <h1 className="text-9xl text-shadow">Koniec</h1>
        <p className="text-2xl text-shadow">Wszystkiego najlepszego Tomuś</p>
        <p className="text-2xl text-shadow">Pozdrawiam cieplutko 😚</p>
      </FadeIn>
    </main>
  )
}
