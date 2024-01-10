import React from 'react'
import Banner from './Banner'
import ProductsMenu from './ProductsMenu'
import { HashLoader } from 'react-spinners'

import { useState, useEffect } from 'react'

function Home() {
  

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <>
        { loading?
        <HashLoader color="#36d7b7" />
        :<>
          <Banner />
          <ProductsMenu />
        </>
      }

    </>
  )
}

export default Home
