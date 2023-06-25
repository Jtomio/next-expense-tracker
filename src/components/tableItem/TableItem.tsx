import { Item } from '../../types/Item'
import * as C from './styles'
import React from 'react'

type Props = {
  item: Item
}

export default function TableItem({ item }: Props) {
  return (
    <C.Tableline>
      <tr></tr>
      <tr></tr>
      <tr></tr>
      <tr></tr>
    </C.Tableline>
  )
}
