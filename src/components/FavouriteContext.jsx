import {createContext, useEffect, useState} from "react";

const LikedContext = createContext({});

export function LikedContextProvider({children}) {
  const [likedProducts, setLikedProducts] = useState(JSON.parse(localStorage.getItem('liked')) || []);

  useEffect(() => {
    if(likedProducts?.length > 0){
      localStorage.setItem('liked', JSON.stringify(likedProducts))
    }
  }, [likedProducts])

  function addLikedProduct(productId){
    setLikedProducts(prev => [...prev, productId])
  }

  function removeLikedProduct(productId) {
    const updatedLiked = likedProducts.filter((id) => id !== productId);
    setLikedProducts(updatedLiked);
    localStorage.setItem('liked', JSON.stringify(updatedLiked));
  }

  
  return (
  <LikedContext.Provider value={{likedProducts, setLikedProducts, addLikedProduct, removeLikedProduct}}>
  {children}</LikedContext.Provider>
);
}

export default LikedContext;