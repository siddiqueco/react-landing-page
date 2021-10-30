import React from 'react'
import styled from 'styled-components'

const SecondaryButton = ({ name }) => {
   return (
      <SecondaryButtonStyled>
         <span>{name}</span>
         
         <i className="fas fa-arrow-right"></i>
      </SecondaryButtonStyled>
   )
}

const SecondaryButtonStyled = styled.button`
   padding: 0.9rem 2rem;
   background-color: var(--dark-primary);
   border: none;
   outline: none;
   border-radius: 18px;
   color: inherit;
   font-size: 1rem;
   font-family: inherit;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: space-around;
   
   span{
      margin-right: 10px;
   }
`

export default SecondaryButton
