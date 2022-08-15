import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri'

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
}

export default function DarkModeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  const currentTheme = theme === 'system' ? systemTheme : theme

  useEffect(() => setMounted(true), [])

  const toggleSwitch = () => {
    let newTheme = 'dark'
    if (theme === newTheme) {
      newTheme = 'light'
    }
    setTheme(newTheme)
  }

  if (!mounted) return null

  return (
    <div
      onClick={toggleSwitch}
      className={`flex-start flex h-[50px] w-[100px] rounded-[50px] bg-zinc-100 p-[5px] shadow-inner hover:cursor-pointer dark:bg-zinc-700 ${
        currentTheme === 'light' ? 'place-content-end' : ''
      }`}
    >
      <motion.div
        className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black/90"
        layout
        transition={spring}
      >
        <motion.div whileTap={{ rotate: 360 }}>
          {currentTheme === 'light' ? (
            <RiSunFill className="h-6 w-6 text-yellow-200" />
          ) : (
            <RiMoonClearFill className="h-6 w-6 text-blue-200" />
          )}
        </motion.div>
      </motion.div>
    </div>
  )
}
