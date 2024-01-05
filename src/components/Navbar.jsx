import React from 'react'
import styled from "styled-components"
import { FaShoppingCart } from 'react-icons/fa';
// import { useContext } from "react";
// import CartContext from "./CartContext"
// import LikedContext from "./LikedContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart} from '@fortawesome/free-regular-svg-icons';
import Center from './Center';
import { Link } from "react-router-dom"


const StyledHeader = styled.header`
  background-color: #EAEAEA;
  padding: 1rem 0;
`;

const Logo = styled.a`
  color: #101010;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 25px;

  @media screen and (max-width: 568px){
    font-size: 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledNav = styled.div`
  display: flex;
  gap: 30px;
`;


// const CartCounter = styled.span`
//   position: absolute;
//   top: -8px; 
//   right: -10px; 
//   background-color: #FFA542;
//   color: white; 
//   border-radius: 50%; 
//   padding: 3px; 
//   font-size: 12px; 
//   min-width: 15px; 
//   text-align: center; 
//   font-weight: 500;
// `

function Navbar() {
  return (
    <StyledHeader>
    <Center>
      <Wrapper>
        <Logo href={"/"}>X-MAX MOBILE</Logo>
        <StyledNav>
          <Link style={{ textDecoration: 'none', color: '#aaa', position: 'relative'}} to="/liked"><FontAwesomeIcon icon={farHeart} size="2x" /></Link>
          <Link style={{ textDecoration: 'none', color: '#aaa', position: 'relative' }} to="/cart"><FaShoppingCart size={30}/></Link>
        </StyledNav>
      </Wrapper>
    </Center>
    </StyledHeader>
  )
}

export default Navbar
