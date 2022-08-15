import React from 'react'
import { RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri'

const Footer = () => (
  <div className="sticky top-0">
    <footer className="text-5xl bg-white text-black min-h-full flex flex-wrap gap-10 items-center justify-center dark:bg-black dark:text-white px-4 py-12 md:py-20">
      <a
        className="hover:text-teal-400 transition-colors"
        target="_blank"
        href="https://github.com/lawrenz1337"
        rel="noreferrer"
      >
        <RiGithubFill />
      </a>
      <a
        className="hover:text-teal-400 transition-colors"
        target="_blank"
        href="https://www.linkedin.com/in/mykhailo-diachuk-1bb078180"
        rel="noreferrer"
      >
        <RiLinkedinBoxFill />
      </a>
    </footer>
  </div>
)

export default Footer
