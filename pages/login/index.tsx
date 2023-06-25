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

export default function Login() {
  return (
    <TemplateContainer>
      <TemplateContent>
        <SideBarHero />
        <TemplateMainHeroSection>
          <h1 className="font-bold text-3xl">Acesse sua conta</h1>
          <form className="flex flex-col w-full gap-4 justify-center items-center">
            <InputText label="Email" type="email" />
            <InputText label="Senha" type="password" />
            <Button>Entrar</Button>
          </form>
          <Link href="/register">Criar Conta</Link>
        </TemplateMainHeroSection>
      </TemplateContent>
    </TemplateContainer>
  )
}
