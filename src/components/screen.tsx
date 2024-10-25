import { PropsWithChildren } from 'react'
import Image, { StaticImageData } from 'next/image'

import { motion } from 'framer-motion'

export const Screen = (props: PropsWithChildren<{ image: StaticImageData }>) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="flex min-h-dvh flex-col"
    >
      <Image src={props.image} alt="Screen 1" fill className="-z-10 object-cover" />
      {props.children}
    </motion.section>
  )
}
