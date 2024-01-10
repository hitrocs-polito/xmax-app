import React from 'react'
import Center from '../Layout/Center'
import styled from 'styled-components'
import ProductCard from './ProductCard'
import phoneDatabase from '../../../assets/products'

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 20px 0 20px 0;
  font-family: 'Montserrat';
`

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  font-family: 'Montserrat';
  margin-top: 20px;

  

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

function ProductsMenu() {
  // const [filteredPhones, setFilteredPhones] = useState(phoneDatabase);


  return (
    <Center>
      <Title>Телефоны</Title>
      <ProductsGrid>
        {phoneDatabase.map(product => (
          <ProductCard key={product.id} {...product} />
        )) }
      </ProductsGrid>
    </Center>   
  )
}

export default ProductsMenu
