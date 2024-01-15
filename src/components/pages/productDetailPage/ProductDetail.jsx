import React from 'react'
import Center from '../Layout/Center'
import { useParams } from 'react-router-dom'

function ProductDetail() {
  const productId = useParams()

  // const [products, setProducts] = React.useState([])
  //   React.useEffect(() => {
  //       fetch("/api/vans")
  //           .then(res => res.json())
  //           .then(data => setProducts(data.products))
  //   }, [])

  return (
    <Center>
      <h1>Product id: {productId.id}</h1>
    </Center>
  )
}

export default ProductDetail
