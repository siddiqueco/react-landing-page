import React from 'react'
import styled from 'styled-components'
import PrimaryButton from './PrimaryButton'
import logo from '../assets/img/logo.svg'

const Navigation = () => {
   return (
      <NavigationStyled>
         <div className="logo">
            <img src={logo} alt="" />
         </div>
         <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Feathures</a></li>
            <li><a href="">Pricing</a></li>
         </ul>
         <PrimaryButton name='Signup'/>
      </NavigationStyled>
   )
}

const NavigationStyled= styled.nav`
   display: flex;
   justify-content: space-between;
   align-items: center;
   
   ul{
      display: flex;
      justify-content: space-between;
      width: 40%;
   }
`

export default Navigation
