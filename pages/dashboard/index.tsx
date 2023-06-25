import React from 'react'
import { TemplateContainer } from '../../src/components/templates'
import Button from '../../src/components/Button'
import DashboardCard from '../../src/components/DashboardCard'
// import { Router } from 'next/router'

export default function Dashboard() {
  const cards = [
    {
      id: 1,
      title: 'Cartão Crédito Samsung',
      category: 'Cartões',
      price: 547,
    },
    {
      id: 2,
      title: 'Cartão Crédito Nubank',
      category: 'Cartões',
      price: 247,
    },
    {
      id: 1,
      title: 'Cartão Crédito C6',
      category: 'Cartões',
      price: 3547,
    },
    {
      id: 1,
      title: 'Condomínio',
      category: 'Residencial',
      price: 487,
    },
  ]

  // const handleNavToAddExpanse = () => {
  //   Router.push('/dashboard/add')
  // }

  return (
    <TemplateContainer>
      <header className="w-full max-w-screen-lg flex justify-between items-center h-1/6">
        <span className="font-bold text-2xl">Expanse Tracker</span>
        <nav>
          <Button>Acidionar gastos</Button>
          <Button variant="ghost">Sair</Button>
        </nav>
      </header>
      <main className="w-full max-w-screen-lg h-5/6 grid grid-cols-1 lg:grid-cols-3 content-start gap-4 p-4 mb-4 rounded-md bg-blue-100">
        {cards?.map((item) => (
          <DashboardCard
            key={item.id}
            title={item.title}
            category={item.category}
            price={item.price}
          />
        ))}
      </main>
    </TemplateContainer>
  )
}
