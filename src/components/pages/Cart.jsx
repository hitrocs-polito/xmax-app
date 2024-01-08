import React from 'react'
import Center from '../Center'
import EmptyCart from '../icons/EmptyCart'
import styled from 'styled-components'

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
`

const SubTitle = styled.p`
  color: #838383;
  font-family: 'Montserrat';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const StyledButton = styled.button`
  border: 0;
  width: 540px;
  height: 65px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #101010;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
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

function Cart() {
  return (
    <Center>
      <CartContainer>
        <EmptyCart />
        <Title>Корзина пуста</Title>
        <SubTitle>Но это никогда не поздно исправить :)</SubTitle>
        <StyledButton><StyledLink href='/'>В каталог товаров</StyledLink></StyledButton>
      </CartContainer>
      
    </Center>
  )
}

export default Cart
