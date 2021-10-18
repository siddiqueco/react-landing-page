import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout'

const ChartStats = ({ name, amount }) => {
   return (
      <ChartStatsStyled>
         <p><strong>{name}</strong></p>
         <h4>{amount}</h4>
      </ChartStatsStyled>
   )
}

const ChartStatsStyled = styled.div`
   background-color: #fff;
   border-radius: 50px;
   border: 1px solid var(--border-colour);
   height: 10rem;
   padding: 2rem;
   width: 50%;
   p{
      color: black;
   }
   h4{
      font-size: 2rem;
      color: var(--purple-primary);
   }
`

export default ChartStats
