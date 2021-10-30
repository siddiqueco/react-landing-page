import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-scroll'
import PrimaryButton from './PrimaryButton'
import logo from '../assets/img/logo.svg'

const Navigation = () => {



   return (
      <NavigationStyled>
         <div className="logo">
            <img src={logo} alt="" />
         </div>
         <ul>
            <li> <Link  to="header" spy={true} smooth={true}>Home </Link></li>
            <li><a href="">Feathures</a></li>
            <li>
               <a href="">
                  Pricing
               </a>
            </li>
         </ul>
         <PrimaryButton name='Signup' />
      </NavigationStyled>
   )
}

const NavigationStyled = styled.nav`
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
