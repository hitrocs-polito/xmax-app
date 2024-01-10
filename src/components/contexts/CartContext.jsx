import {createContext, useEffect, useState} from "react";

const CartContext = createContext({});

export function CartContextProvider({children}) {
  const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  useEffect(() => {
    if(cartProducts?.length > 0){
      localStorage.setItem('cart', JSON.stringify(cartProducts))
    }
  }, [cartProducts])

  function addProduct(productId){
    setCartProducts(prev => [...prev, productId])
  }

  function removeProduct(productId) {
    const indexToRemove = cartProducts.findIndex((id) => id === productId);
    if (indexToRemove !== -1) {
      const updatedCart = [...cartProducts];
      updatedCart.splice(indexToRemove, 1);
      setCartProducts(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  }

  return (
  <CartContext.Provider value={{cartProducts, setCartProducts, addProduct, removeProduct}}>
    {children}
  </CartContext.Provider>
);
}

export default CartContext;