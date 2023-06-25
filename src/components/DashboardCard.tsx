import React from 'react'
import Button from './Button'

export default function DashboardCard({ title, category, price }) {
  return (
    <div>
      <article className="bg-white h-40 p-4 shadow-md rounded-md flex flex-col justify-center gap-2 relative">
        <h2 className="font-bold text-xl">{title}</h2>
        <p className="px-2 bg-blue-200 self-start rounded-full">{category}</p>
        <p className="font-medium">{price}</p>
        <Button variant="ghost" className="absolute bottom-0 right-0 mr-2">
          Excluir
        </Button>
      </article>
    </div>
  )
}
