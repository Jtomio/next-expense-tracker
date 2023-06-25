import React, { AnchorHTMLAttributes, ReactNode } from 'react'
import NextLink from 'next/link'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: ReactNode
}

export default function Link({ children, href, ...props }: Props) {
  return (
    <NextLink href={href} {...props}>
      {children}
    </NextLink>
  )
}
