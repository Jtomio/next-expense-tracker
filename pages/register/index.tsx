import React from 'react'
import InputText from '../../src/components/InputText'
import Button from '../../src/components/Button'
import Link from '../../src/components/Link'
import {
  TemplateContainer,
  TemplateContent,
  TemplateMainHeroSection,
} from '../../src/components/templates'
import SideBarHero from '../../src/components/SideBarHero'

export default function Register() {
  return (
    <TemplateContainer>
      <TemplateContent>
        <SideBarHero />
        <TemplateMainHeroSection>
          <h1 className="font-bold text-3xl">Crie sua conta</h1>
          <form className="flex flex-col w-full gap-4 justify-center items-center">
            <InputText label="Email" type="email" />
            <InputText label="Senha" type="password" />
            <Button>Criar conta</Button>
          </form>
          <Link href="/login">Já possui uma conta?</Link>
        </TemplateMainHeroSection>
      </TemplateContent>
    </TemplateContainer>
  )
}
