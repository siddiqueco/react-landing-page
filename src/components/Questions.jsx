import React, { useState } from 'react'
import styled from 'styled-components'

const Questions = ({ title, description }) => {
   const [toggle, setToggle] = useState(false)

   const toggleQuestion = () => {
      setToggle(!toggle)
   }
   return (
      <QuestionStyled >
         <div  className="q-con">
            <div className="toggle-title">
               <h4>{title}</h4>
               <button onClick={toggleQuestion}>
                  <i className={`fas fa-${toggle ? 'minus' : 'plus'}`}></i>
               </button>
            </div>
            {toggle && <p>{description}</p>}
         </div>
      </QuestionStyled>
   )
}

const QuestionStyled = styled.div`
   margin-top: .5rem;
   background-color: #fff;
   margin: 1rem 0;
   padding: 1.3rem 1rem;
   border-radius: 18px;
   transition: all 5s ease-in-out;
   box-shadow: 0px 25px 50px rgba(22,25,79,0.05);
   .q-con{
      p{
         margin-top: 1rem;
         font-size: 1.3rem;
      }
      .toggle-title{
         display: flex;
         align-items: center;
         justify-content: space-between;
         transition: all 5s ease-in-out;
         h4{
            color:  #16194F;
            font-size: 1.33rem;
         }
         button{
            background: transparent;
            outline: none;
            border: none;
            cursor: pointer;
            i{
               color: #a7a4a4;
               font-size: 20px;
            }
         }
         
      }
   }
`

export default Questions
