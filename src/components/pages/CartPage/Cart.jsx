import React, {useContext} from 'react'
import Center from '../Layout/Center'
import EmptyCart from '../../icons/EmptyCart'
import styled from 'styled-components'
import CartContext from '../../contexts/CartContext'
import CartWithQuantity from '../HomePage/CartWithQuantity'
import PlusIcon from '../../icons/PlusIcon'
import MinusIcon from '../../icons/MinusIcon'
import CartProductContainer from './CartProductContainer'


const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 61px auto 127px;
`

const Title = styled.h1`
  color: #101010;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: 'Montserrat';
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 30px 0 0;

  @media (max-width: 1100px) {
    font-size: 25px;
  }

  @media (max-width: 800px) {
    color: #101010;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }
`

const SubTitle = styled.p`
  color: #838383;
  font-family: 'Montserrat';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 1100px) {
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`

const StyledButton = styled.button`
  border: 0;
  width: 540px;
  height: 65px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #101010;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);

  /* @media (max-width: 1100px) {
    width: 440px;
    height: 65px;
  } */

  @media (max-width: 600px) {
    width: 350px;
    height: 65px;
  }
`

const StyledLink = styled.a`
  text-decoration: none;
  color: #FFF;
  text-align: center;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const StyledTitle = styled.h2`
  font-size: 1.5rem;
  margin: 20px 0 20px 0;
  font-family: 'Montserrat';
`

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  @media screen and (max-width: 600px){
    grid-template-columns: 1fr;
  }
`

const TotalPriceContainer = styled.div`
  margin: 0 0 0 auto;
  width: 348.98px;
  height: 114px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #FFF;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.10);
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 962px) {
    width: 250px;
  }
  
  @media screen and (max-width: 780px) {
    width: 230px;
  }

  @media screen and (max-width: 600px){
    margin: 0;
    width: 330px;
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
    width: 300px;
  }
`

const TotalDescription = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 22px;
  `

const SummaryText = styled.h4`
  color: #000;
  font-family: 'Montserrat';
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const TotalPrice = styled.p`
  color: #000;
  font-family: 'Montserrat';
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const SubmitButtonText = styled.a`
  /* width: 348.98px;
  height: 65px; */
  padding: 24px 0;
  /* flex-shrink: 0; */
  border-radius: 20px;
  background: #101010;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
  border: 0;
  cursor: pointer;
  color: #FFF;
  text-align: center;
  font-family: 'Montserrat';
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration: none;

  @media screen and (min-width: 600px){
    font-size: 15px;
  }
`

const ProductsGrid = styled.div`
  /* margin: 10[px]; */
  `

function Cart() {
  const {cartProducts} = useContext(CartContext)
  return (
    <Center>
      {/* <CartContainer>
        <EmptyCart width='350px' height='250px' />
        <Title>Корзина пуста</Title>
        <SubTitle>Но это никогда не поздно исправить :)</SubTitle>
        <StyledButton><StyledLink href='/'>В каталог товаров</StyledLink></StyledButton>
      </CartContainer> */}
      
      <StyledTitle>Корзина</StyledTitle>
      <StyledContainer>
        <ProductsGrid>
          <CartProductContainer 
            imgSrc={'https://olcha.uz/image/700x700/products/2021-09-24/apple-iphone-13-pro-256gb-25274-0.jpeg'}
            qty={1}
            title={'Apple Iphone 13 Pro'}
            price={1200}/>

          <CartProductContainer 
            imgSrc={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9cQb_JMm8e8cWWeG0U-OHcxt4UoKVqOUQkw&usqp=CAU'}
            qty={1}
            title={'Apple Iphone 13 Pro'}
            price={1200}/>

          <CartProductContainer 
            imgSrc={'https://olcha.uz/image/700x700/products/2019-10-14/apple-iphone-11-128gb-yellow-10471-0.jpeg'}
            qty={1}
            title={'Apple Iphone 13 Pro'}
            price={1200}/>

          <CartProductContainer 
            imgSrc={'https://olcha.uz/image/700x700/products/2019-10-14/apple-iphone-11-128gb-yellow-10471-0.jpeg'}
            qty={1}
            title={'Apple Iphone 13 Pro'}
            price={1200}/>
  
        </ProductsGrid>
        
        <TotalPriceContainer>
          <TotalDescription>
            <SummaryText>ИТОГО</SummaryText>
            <TotalPrice>1200$</TotalPrice>
          </TotalDescription>
          <SubmitButtonText href='/cart'>
            Перейти к оформлению
          </SubmitButtonText>

        </TotalPriceContainer>

      </StyledContainer>
    </Center>
  )
}

export default Cart
