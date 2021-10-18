import React from 'react'
import styled from 'styled-components'
import arrow from '../assets/img/arrow.svg'


const AnimatedButton = ({ text }) => {
   return (
      <AnimatedButtonStyled>
         {text}
         <img src={arrow} alt="" />
      </AnimatedButtonStyled>
   )
}

const AnimatedButtonStyled = styled.button`
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

   img{
      margin-left: 1rem;
      padding-left: inherit.9rem;
   }
`

export default AnimatedButton
