import React from 'react'
import DarkModeSwitch from './DarkModeSwitch'

export const Header = () => {
  return (
    <div className="absolute px-5 lg:px-10 py-5 w-full top-0 left-0 flex justify-between items-center z-10">
      <span className="font-sans text-3xl font-bold text-black dark:text-white relative drop-shadow-text dark:drop-shadow-textDark">
        1337
      </span>
      <DarkModeSwitch />
    </div>
  )
}
