import { motion } from 'framer-motion'
import React from 'react'
import { Header } from './Header'

export const Landing = () => {
  return (
    <motion.div className="bg-white h-screen w-full flex items-center justify-center dark:bg-black relative transition-colors overflow-hidden">
      <Header />
      <div className="flex items-center justify-center flex-col gap-8">
        <motion.h1 className="text-black text-2xl md:text-5xl w-fit dark:text-white transition-colors font-mono">
          hey, I&apos;m
          <span className="relative">
            <span className="text-teal-400"> lawreNz1337&nbsp;</span>
            <span
              className="after:content-[''] [font-family:monospace] after:block after:absolute after:w-2 after:h-full
after:dark:bg-white after:bg-black after:animate-cursor absolute left-0 inline-block w-full bg-white
dark:bg-black -bottom-0 -top-1 animate-type will-change-transform transition-colors after:transition-colors"
            />
          </span>
        </motion.h1>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-black dark:text-white text-2xl md:text-3xl font-sans transition-colors"
        >
          and I do
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="w-full flex items-center justify-center text-center transition-all uppercase font-Marker text-teal-400 text-6xl md:text-8xl drop-shadow-blackText dark:drop-shadow-whiteText"
        >
          frontend
        </motion.span>
      </div>
    </motion.div>
  )
}
