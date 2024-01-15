import React, {useState, useContext} from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import CartWithQuantity from './CartWithQuantity';
import CartContext from '../../contexts/CartContext';
import LikedContext from '../../contexts/FavouriteContext';
import { Link } from 'react-router-dom';

const StyledHeart = styled(FontAwesomeIcon)`
  position: absolute;
  top: 15px;
  right: 15px;
  /* color: #ccc; */
  cursor: pointer;
  user-select: none;
  width: 2rem;
  z-index: 4;

  &:hover,
  &.active {
    color: red; 
    user-select: none;

  }

  &.noactive {
    color: #ccc; 
  }
`;

const Card = styled.div`
  position: relative;
  border-radius: 15px;
  transition: box-shadow 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  height: max-content;

  img {
    /* max-width: 100%; */
    max-height: 100%;
  }

  &:hover {
    -webkit-box-shadow: 0px 3px 5px -3px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 3px 5px -3px rgba(0,0,0,0.75);
    box-shadow: 0px 3px 5px -3px rgba(0,0,0,0.75);
    transition: box-shadow 0.3s ease-in-out;
  }

  @media (max-width: 480px) {
    img {
      /* height: auto;  */
    }

    Title {
      font-size: 22px;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  


  &:hover {
    transform: scale(1.05);
  }
`;

const WhiteBox = styled.div`
  background-color: white;
  padding: 20px; 
  height: 280px;
  width: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  border-radius: 15px;
  

  img{
    max-width: 300px;
    max-height: 400px;
  }

  @media (max-width: 1100px) {
    height: 250px;
  }

  @media (max-width: 800px) {
    height: 250px;
  }

  @media (max-width: 600px) {
    height: 300px;
  }
;

`

const Title = styled.h2`
  font-weight: normal;
  font-size: 1rem;
  margin: 0;
`

const DescStyle = styled.div`
  margin-top: 10px;
  padding: 10px;
`

const PriceRow = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 5px;
`

const Price = styled.div`
  font-size: 1rem;
  font-weight: bold;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`

function ProductCard({ id, title, price, imgUrl }) {
  const { addProduct, removeProduct } = useContext(CartContext);
  const { addLikedProduct, removeLikedProduct } = useContext(LikedContext);
  
  const [isHeartActive, setIsHeartActive] = useState(false); // State for heart active state

  const handleHeartClick = () => {
    const newIsHeartActive = !isHeartActive;
    setIsHeartActive(newIsHeartActive);

    if (newIsHeartActive) {
      addLikedProduct(id);
    } else {
      removeLikedProduct(id);
    }
  };

  const handleCartClick = (action) => {
    if (action === 'increment') {
      addProduct(id);
    } else if (action === 'decrement') {
      removeProduct(id);
    }
  };

  return (
    <Card>
      <WhiteBox>
      <StyledHeart
      size="2x"
      icon={faHeart} // Use the heart icon from Font Awesome
      className={isHeartActive ? "active" : "noactive"}
      onClick={handleHeartClick}
    />
        <StyledLink to={`/products/${id}`}>
          <Image src={imgUrl} alt="product-image"></Image>
        </StyledLink>
      </WhiteBox>
      <DescStyle>
        <StyledLink to={`/products/${id}`}>
          <Title>{title}</Title>
        </StyledLink>
        <PriceRow>
          <Price>
            {Math.round(price).toLocaleString('en-US').replace(/,/g, ' ')} сум
          </Price>
          <CartWithQuantity onClick={handleCartClick} />
        </PriceRow>
      </DescStyle>
    </Card>
  )
}

export default ProductCard
