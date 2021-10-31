import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import { InnerLayout } from '../styles/Layout'
import card from '../assets/img/creditcard.svg';
import active from '../assets/img/active.svg';
import inactive from '../assets/img/inactive.svg';
import check from '../assets/img/check.svg';
import checkDisabled from '../assets/img/check-disabled.svg';



const PaymentSection = () => {
   return (
      <PaymentStyled id='pricing'>
         <InnerLayout>
            <div data-aos='fade-down-right'>
               <h3 className="small-heading">
                  An exectional service, <span>at  the right price</span>
               </h3>
               <p className="c-para">Start with our free plan and switch to premium as you grow. </p>
            </div>
            <div className='card-con'>
               <Card
                  account={'Free'}
                  amount={'$0'}
                  text={'Manage your business with a simple and efficient account.'}
                  button={'Get Started'}
                  card={card}
                  active={active}
                  inactive={inactive}
                  check={check}
                  checkDis={checkDisabled}
                  text1={'10 free local transfers'}
                  text2={'Free ATM withdrawals in Dollar up to $250 per month'}
                  text3={'Free payments to other Draft accounts'}
                  text4={'Prepaid debit cards'}
                  text5={'Virtual cards'}
                  text6={'Priority 24/7 support'}
                  text7={'Exchange 24 currencies'}
                  text8={'Multi-user access'}
               />

               <Card
                  account={'Premium'}
                  amount={'$10'}
                  text={'Manage your business with a simple and efficient account.'}
                  button={'Get Started'}
                  card={card}
                  active={active}
                  inactive={inactive}
                  check={check}
                  checkDis={checkDisabled}
                  text1={'10 free local transfers'}
                  text2={'Free ATM withdrawals in Dollar up to $250 per month'}
                  text3={'Free payments to other Draft accounts'}
                  text4={'Prepaid debit cards'}
                  text5={'Virtual cards'}
                  text6={'Priority 24/7 support'}
                  text7={'Exchange 24 currencies'}
                  text8={'Multi-user access'}
               />
            </div>
         </InnerLayout>
      </PaymentStyled>
   )
}

const PaymentStyled = styled.section`
 .card-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 3rem;
        padding-top: 6.4rem;
        
        @media screen and (max-width: 689px){
          grid-template-columns: repeat(1, 1fr);
        }
    }
   p{
      text-align: center;
   }
`

export default PaymentSection
