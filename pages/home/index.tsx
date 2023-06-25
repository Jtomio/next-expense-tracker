import React, { useEffect, useState } from 'react'
import { Body, Container, Header, HeaderText } from './styles'
import {} from '.'
import { items } from '../../src/data/items'
import {
  filterListByMonth,
  getCurrentMonth,
} from '../../src/helpers/dateFilter'
import { Item } from '../../src/types/Item'
import TableArea from '../../src/components/tableArea/TableArea'

export default function Home() {
  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  return (
    <Container>
      <Header>
        <HeaderText>Sistema Financeiro</HeaderText>
      </Header>
      <Body>
        {/* Tab Items */}
        <TableArea list={filteredList} />
      </Body>
    </Container>
  )
}
