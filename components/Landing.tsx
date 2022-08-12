import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import { Header } from './Header'

export const Landing = () => {
  const constraintsRef = useRef(null)

  return (
    <motion.div
      className="h-screen w-full flex items-center justify-center dark:bg-black relative transition-colors"
      ref={constraintsRef}
    >
      <Header />
      <motion.h1
        drag
        dragConstraints={constraintsRef}
        className="text-5xl w-fit dark:text-white transition-colors"
      >
        Hello world!
      </motion.h1>
    </motion.div>
  )
}
