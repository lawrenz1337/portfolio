import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<Props> = ({ className, ...props }: Props) => {
  return (
    <button
      className={`w-fit active:after:w-0 active:before:h-0 active:translate-x-[6px] active:translate-y-[6px] after:left-[calc(100%+2px)] after:top-[-2px] after:h-[calc(100%+4px)]
      after:w-[6px] after:transition-all before:transition-all after:skew-y-[45deg] before:skew-x-[45deg]
      before:left-[-2px] before:top-[calc(100%+2px)] before:h-[6px] before:w-[calc(100%+4px)]
      before:origin-top-left after:origin-top-left relative transition-all after:content-['']
      before:content-[''] after:absolute before:absolute before:bg-teal-400 after:bg-teal-400
      disabled:before:bg-slate-300 disabled:after:bg-slate-300 disabled:text-slate-300
      disabled:border-slate-300 disabled:bg-slate-100
      enabled:hover:bg-slate-100 enabled:active:bg-slate-200
      dark:enabled:hover:bg-gray-900
      dark:enabled:active:bg-gray-800
      flex justify-center items-center py-0 px-4 text-black font-mono text-2xl bg-white border-2
      border-black enabled:cursor-pointer select-none dark:border-white dark:bg-black dark:text-white dark:disabled:bg-slate-400 dark:disabled:text-white disabled:pointer-events-none disabled:cursor-not-allowed ${className}`}
      {...props}
    />
  )
}

export default Button
