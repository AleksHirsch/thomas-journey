'use client'

import Image from 'next/image'
import Link from 'next/link'

import SplashImage from '~/images/splash.png'

import { FadeIn } from '../components/fade-in'

export default function Home() {
  return (
    <main className="grid min-h-dvh place-items-center">
      <Image src={SplashImage} priority alt="Intro" className="-z-10 object-cover" fill />
      <FadeIn className="space-y-24">
        <h1
          className="text-center text-shadow"
          style={{
            fontSize: 'calc(16px + 16 * ((100vw - 320px) / 680))',
          }}
        >
          (Pijacka) Przygoda Tomka
        </h1>
        <div className="flex justify-center">
          <Link
            href={'/game'}
            className="bg-gray-50 p-6 text-6xl text-gray-800 transition-colors hover:bg-gray-800 hover:text-gray-50"
          >
            Start
          </Link>
        </div>
      </FadeIn>
    </main>
  )
}
