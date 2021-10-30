import React from 'react'
import styled from 'styled-components'
import SecondaryButton from './SecondaryButton'
import phone from '../assets/img/phone.svg'
import ring1 from '../assets/img/ring_orange.svg';
import message1 from '../assets/img/message_pink.svg';
import message2 from '../assets/img/message_blue.svg';
 
const HeaderContent = () => {
   return (
      <HeaderContentStyled>
         <div className="left-content">
            <div className="left-text-container">
               <h1 data-aos='zoom-in-right'>Smart banking for frelencers</h1>
               <p className="white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam delectus architecto sed, corrupti sint nobis cumque numquam provident molestias nemo sequi. Accusantium neque laboriosam nemo fugit fuga. At, rem sed.
               </p>
               <SecondaryButton name='Registered now' />
            </div>
         </div>
         <div className="right-content">
            <img src={phone} alt="" className="phone" />
            <img src={ring1} alt="" className="ring1" />
            <img src={message1} alt="" className="message1" />
            <img src={message2} alt="" className="message2" />
         </div>
      </HeaderContentStyled>
   )
}


// const Bounce=styled.h1`
//    animation: 3s ${keyframes`${bounce}`} infinite;
// `


const HeaderContentStyled = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   padding-top: 3rem;

   @media screen and (max-width: 700px){
        grid-template-columns: repeat(1, 1fr);
   }

   .left-content{
      display: flex;
      align-items: center;
      padding-right: 3rem;
      @media screen and (max-width: 480px){
         width: 100%;
      }

      h1{
         font-size: 4rem;
         font-weight: 600;
         @media screen and (max-width: 700px){
            font-size: 3rem;
         }
      }
      .white{
      color: #fff;
      line-height: 1.8rem;
      }
   }
   .right-content{
      position: relative;
      display: flex;
      justify-content: center;
      

      .phone{
         width: 80%;
      }
      .ring1{
            position: absolute;
            bottom: 10%;
            right: 0;
            left: auto;
            animation: move2 20s infinite;
            transition: all .4s ease-in-out;
      }
      .message1{
         position: absolute;
         top: 0;
         right: 0;
         left: auto;
         animation: move 5s infinite;
         transition: all .4s ease-in-out;
      }
      .message2{
         position: absolute;
         bottom: 15%;
         left: 0;
         transition: all .4s ease-in-out;
         animation: move 8s infinite;
         animation-delay: .5s;
         transition: all .4s ease-in-out;
         
      }
   }

    //Header Animations
    .message1{
        @keyframes move{
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(20deg) scale(1.1) translateX(10px);
            }
            100%{
                transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
            }
        }
        @keyframes move2{
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(60deg) scale(1.1) translateX(10px);
            }
            100%{
                transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
            }
        }
    }
   
`

export default HeaderContent
