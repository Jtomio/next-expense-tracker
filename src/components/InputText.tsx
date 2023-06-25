import React, { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export default function InputText({ label, ...props }: Props) {
  return (
    <label className="flex flex-col md:w-full w-10/12">
      <span>{label}</span>
      <input
        type="email"
        {...props}
        className="border border-gray-200 h-10 px-4 rounded-md focus:border-blue-300"
      />
    </label>
  )
}
