import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout'
import avatar1 from '../assets/img/avatar1.svg'
import avatar2 from '../assets/img/avatar2.svg'
import avatar3 from '../assets/img/avatar3.svg'
import avatar4 from '../assets/img/avatar4.svg'
import avatar5 from '../assets/img/avatar5.svg'
import messaging from '../assets/img/conversation.svg'
import bgCircles from '../assets/img/circleBg.svg';

const MessagingSection = () => {
   return (
      <MessageStyle>
         <InnerLayout>
            <div className='message-con'>
               <div className="left-items">
                  <h2 data-aos='fade-right' className="secondary-heading">
                     We support you in 5 diffrent language
                  </h2>
                  <p className='left-para'>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quisquam nam quibusdam, culpa aperiam perspiciatis modi inventore porro temporibus illum. Voluptatibus culpa quasi molestiae provident reprehenderit iure dicta ipsum est.
                  </p>
                  <div className='images-con'>
                     <img src={avatar1} alt="" className='image-1' />
                     <img src={avatar2} alt="" className='image-2' />
                     <img src={avatar3} alt="" className='image-3' />
                     <img src={avatar4} alt="" className='image-4' />
                     <img src={avatar5} alt="" className='image-5' />
                     <p>&nbsp; +23</p>
                  </div>
                  <img src={bgCircles} className="bgCircle" alt="" />
               </div>
               <div className="right-items">
                  <img src={messaging} alt="" />
                  <img src={bgCircles} alt="" className="bgCircle" />
               </div>
            </div>
         </InnerLayout>
      </MessageStyle>
   )
}

const MessageStyle = styled.section`
   .message-con{
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      @media screen and (max-width: 1347px){
            grid-template-columns: repeat(1, 1fr);
      }

      .left-items{
         position: relative;
         padding-right: 2rem;
         .left-para{
            padding: 1.6rem 0;
         }
         .images-con{
            display: flex;
            align-items: center;
            .image-2,.image-3,.image-4,.image-5{
               margin-left: -18px;
            }
         }
         .bgCircle{
            position: absolute;
            top: -7%;
            left: -10%;
            z-index: -1;
        }
      }
      .right-items{
         position: relative;
         img{
            padding-left: 2rem;
         }
         .bgCircle{
            position: absolute;
            bottom: -7%;
            right: 0;
            z-index: -1;
        }
      }
   }
`

export default MessagingSection
