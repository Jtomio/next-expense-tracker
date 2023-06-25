import React from 'react'
import Image from 'next/image'
import HeroImg from '../../src/img/imgLogin.svg'

export default function SideBarHero() {
  return (
    <aside className="flex justify-center items-center">
      <Image src={HeroImg} width={400} alt="Imagem login" />
    </aside>
  )
}
