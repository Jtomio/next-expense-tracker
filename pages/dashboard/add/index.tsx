import React from 'react'
import {
  TemplateContainer,
  TemplateContent,
  TemplateMainHeroSection,
} from '../../../src/components/templates'
import SideBarHero from '../../../src/components/SideBarHero'
import InputText from '../../../src/components/InputText'
import Button from '../../../src/components/Button'
import Link from '../../../src/components/Link'

export default function Login() {
  return (
    <TemplateContainer>
      <TemplateContent>
        <SideBarHero />
        <TemplateMainHeroSection>
          <h1 className="font-bold text-3xl">Cadastrar nova dispesa</h1>
          <form className="flex flex-col w-full gap-4 justify-center items-center">
            <InputText label="Nome" type="text" />
            <InputText label="Categoria" type="text" />
            <InputText label="Valor" type="number" />
            <Button>Entrar</Button>
          </form>
          <Link href="/register">Criar Conta</Link>
        </TemplateMainHeroSection>
      </TemplateContent>
    </TemplateContainer>
  )
}
