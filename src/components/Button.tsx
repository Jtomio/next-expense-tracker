import React, { ButtonHTMLAttributes, ReactNode } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export default function Button({ children, ...props }: Props) {
  return (
    <button
      className="bg-blue-400 h-10 px-10 text-white font-bold hover:bg-blue-200 rounded-md disabled:cursor-not-allowed disabled:bg-gray-300"
      {...props}
    >
      {children}
    </button>
  )
}
