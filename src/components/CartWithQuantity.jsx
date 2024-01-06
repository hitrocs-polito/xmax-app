import { useState } from 'react';
import styled from 'styled-components';
// import { FaShoppingCart } from 'react-icons/fa';

const CartContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  right: 0;
  user-select: none;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const QuantityButton = styled.button`
  background-color: #EAEAEA;
  border: none;
  margin: 0 2px;
  cursor: pointer;
`;

const CartCounter = styled.span`
  /* background-color: #FFA542; */
  /* color: white; */
  /* border-radius: 50%;
  padding: 4px 9px;
  font-size: 20px;
  min-width: 15px;
  text-align: center; 
  font-weight: 500; */
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
        <svg xmlns="http://www.w3.org/2000/svg"  onClick={toggleCart} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="orange" width={'2rem'} class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>    
        // <FaShoppingCart size={30} color="#FFA542" onClick={toggleCart} />
      ) : (
        <QuantityControl>
          <QuantityButton onClick={handleDecrement}>
            <CartCounter>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" width={'2rem'} stroke="orange" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</CartCounter>
          </QuantityButton>
          <div>{quantity}</div>
          <QuantityButton onClick={handleIncrement}>
            <CartCounter>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" width={'2rem'} stroke="orange" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </CartCounter>
          </QuantityButton>
        </QuantityControl>
      )}
    </CartContainer>
  );
}

export default CartWithQuantity;
