import React from 'react'
import DarkModeSwitch from './DarkModeSwitch'

export const Header = () => {
  return (
    <div className="absolute px-5 lg:px-10 py-5 w-full top-0 left-0 flex justify-between items-center">
      <span className="dark:text-white transition-colors font-sans text-3xl font-bold">
        1337
      </span>
      <DarkModeSwitch />
    </div>
  )
}
