import styled from 'styled-components'

export const Table = styled.table`
  width: 100%;
  max-width: 1024px;
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 6px;
  margin-top: 2rem;
`

export const TableHeadColumn = styled.th<{ width?: number }>`
  width: ${(props) => (props.width ? `${props.width}px` : 'auto')};
  padding: 1rem;
  text-align: left;
`
