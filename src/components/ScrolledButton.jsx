import React, { useState } from 'react'
import styled from 'styled-components'

const ScrolledButton = () => {

   const [show, setShow] = useState(false)

   const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 400) {
         setShow(true)
      }
      else if (scrolled <= 400) {
         setShow(false)
      }
   };

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      });
   };

   window.addEventListener('scroll', toggleVisible);

   return (
      <Button onClick={scrollToTop} style={{display: show ? 'inline': 'none'}}>
         <i className="fas fa-arrow-circle-up"></i>
      </Button>
   )
}

const Button = styled.button`
   position: fixed; 
   right: 3%;
   bottom: 40px;
   z-index: 1;
   cursor: pointer;
   color: var(--accent-pink);
   background: transparent;
   outline: none;
   border: none;
   &:hover{
      color: var(--purple-primary);
   }
   i{
      font-size: 2rem;
   }
`

export default ScrolledButton
