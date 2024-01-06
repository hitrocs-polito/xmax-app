import { useState } from 'react';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

const CartContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  right: 0;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const QuantityButton = styled.button`
  background-color: #eee;
  border: none;
  margin: 0 2px;
  cursor: pointer;
`;

const CartCounter = styled.span`
  background-color: #FFA542;
  color: white;
  border-radius: 50%;
  padding: 1px 6px;
  font-size: 20px;
  min-width: 15px;
  text-align: center; 
  font-weight: 500;
  user-select: none;
`


function CartWithQuantity({onClick}) {
  const [quantity, setQuantity] = useState(1);
  const [showCart, setShowCart] = useState(true);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    onClick('increment');
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
      onClick('decrement');
    }else{
      setShowCart(!showCart)
      onClick('toggle');
      onClick('decrement')
    }
  };

  const toggleCart = () => {
    setShowCart(!showCart);
    onClick('increment');
  };

  return (
    <CartContainer>
      {showCart ? (
        <FaShoppingCart size={30} color="#FFA542" onClick={toggleCart} />
      ) : (
        <QuantityControl>
          <QuantityButton onClick={handleDecrement}>
            <CartCounter>–</CartCounter>
          </QuantityButton>
          <div>{quantity}</div>
          <QuantityButton onClick={handleIncrement}>
            <CartCounter>+</CartCounter>
          </QuantityButton>
        </QuantityControl>
      )}
    </CartContainer>
  );
}

export default CartWithQuantity;
