import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { GhostButton, MainButton } from './templates'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'ghost'
}

export default function Button({ children, variant, ...props }: Props) {
  if (variant === 'ghost')
    return (
      <GhostButton className="" {...props}>
        {children}
      </GhostButton>
    )

  return (
    <MainButton className="" {...props}>
      {children}
    </MainButton>
  )
}
