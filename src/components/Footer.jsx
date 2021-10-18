import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout'
import logo from '../assets/img/logo.svg'

const Footer = () => {
   return (
      <FooterStyled>
         <InnerLayout>
            <div className="footer-con">
               <div className="logo-con">
                  <div className="logo-wrap">
                     <img src={logo} alt="" />
                     <p>
                        Copyright @2021 LoremIpsum <br />
                        All rights reserved
                     </p>
                  </div>
               </div>
               <ul className="bottom-nav">
                  <div className="links1">
                     <li><a href="">Team</a></li>
                     <li><a href="">Press</a></li>
                     <li><a href="">Fees</a></li>
                  </div>
                  <div className="links2">
                     <li><a href="">Services</a></li>
                     <li><a href="">Press</a></li>
                     <li><a href="">Fees</a></li>
                  </div>
                  <div className="links3">
                     <li><a href="">Terms of use</a></li>
                     <li><a href="">Privacy Policy</a></li>
                     <li><a href="">Contact us</a></li>
                  </div>
               </ul>
            </div>
         </InnerLayout>
      </FooterStyled>
   )
}
const FooterStyled = styled.footer`
   padding: 0 18rem;
   background-color: #dce2f0;

   .footer-con{
      display: grid;
      grid-template-columns: repeat(2 , 1fr);
      .logo-con{
         display: flex;
         align-items: center;
         img{
            width: 90px;
         }
      }
   }
   .bottom-nav{
      display: flex;
      justify-content: space-between;

      li{
         padding: 2rem 0;
         color: #16194f;
      }
   }
`

export default Footer
