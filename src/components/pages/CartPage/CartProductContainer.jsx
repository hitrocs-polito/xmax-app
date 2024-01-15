import React from 'react'
import styled from 'styled-components'
import MinusIcon from '../../icons/MinusIcon'
import PlusIcon from '../../icons/PlusIcon'

const ProductContainer = styled.div`
  margin: 0 auto 20px 0;
  display: flex;
  width: 633px;
  height: 218px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #FFF;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.10);

  @media screen and (max-width: 1286px) {
    width: 550px;
  }
  
  @media screen and (max-width: 1150px) {
    width: 450px;
  }



  @media screen and (max-width: 1024px) {
    width: 400px;
  }

  @media screen and (max-width: 820px) {
    width: 350px;
    height: 180px;
  }

  @media (max-width: 600px) {
    width: 330px;
    height: 162px;

    .img{
      width: 70px;
      height: 76px;
    }
  }

  @media screen and (max-width: 430px) {
    width: 344px;
  }

  @media screen and (max-width: 400px) {
    width: 320px;
  }

  @media screen and (max-width: 380px) {
    width: 310px;
  }

  @media screen and (max-width: 365px) {
    width: 295px;
  }

`

const Img = styled.img`
  width: 147px;
  max-width: 100%;

  @media (max-width: 600px) {
    width: 70px;
    height: 76px;
    }
`

const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0 10px 5px;
  margin-right: 10px;

  @media screen and (max-width: 600px){
    padding: 15px 0;
  }
`

const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 50px 0;
  margin-right: 220px;
  @media screen and (max-width: 600px){
    padding: 0px 0 30px;
    margin-right: 0px;
  }

  @media screen and (max-width: 1286px) {
    margin-right: 150px;
  }

  @media screen and (max-width: 1150px) {
    margin-right: 100px;
  }
  
  @media screen and (max-width: 1024px) {
    margin-right: 20px;
  }
`

const ThirdColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  padding: 18px 0;
  
  @media screen and (max-width: 1024px) {
    padding-right: 30px;
  }

  @media screen and (max-width: 820px) {
    padding-bottom: 10px;
  }

  @media screen and (max-width: 600px){
    padding: 10px 0;
  }

  @media screen and (max-width: 400px) {
    padding-right: 15px;
  }

  @media screen and (min-width: 400px) {
    padding-right: 15px;
  }
`

const ProductTitle = styled.h4`
  color: #1C1C27;
  font-family: 'Montserrat';
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media screen and (max-width: 600px){
  font-size: 15px;
  }
`

const ProductPrice = styled.p`
  color: #AAA;
  font-family: 'Montserrat';
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  `

const TotalProductPrice = styled.p`
  color: #1C1C27;
  text-align: right;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;

const QuantityButton = styled.button`
  background-color: #FFF;
  border: none;
  margin: 0 2px;
  cursor: pointer;
`;

const QuantityStyle = styled.div`
  width: 1rem;
  text-align: center;
`

function CartProductContainer({imgSrc, qty, title, price}) {
  return (
    <ProductContainer>
      <FirstColumn>
        <Img src={imgSrc} alt='product_image'/>
    
        <QuantityControl>
          <QuantityButton>
              <MinusIcon />
          </QuantityButton>
          <QuantityStyle>{qty}</QuantityStyle>
          <QuantityButton>
              <PlusIcon />
          </QuantityButton>
        </QuantityControl>
      </FirstColumn>
      <SecondColumn>
        <ProductTitle style={{margin: 0}}>{title}</ProductTitle>
        <ProductPrice style={{margin: 0, marginTop: '12px'}}>{price}$</ProductPrice>
      </SecondColumn>
      <ThirdColumn>
        <a href="">
          <svg xmlns="http://www.w3.org/2000/svg" color='red' fill="none" width={'22px'} viewBox="0 0 24 24" stroke-width="1.  5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
        </a>
        <TotalProductPrice>{price * qty}$</TotalProductPrice>
      </ThirdColumn>
    </ProductContainer>
  )
}

export default CartProductContainer
