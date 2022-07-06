import ProductSlider from '../components/ProductSlider'
import Intimidator from '../components/Intimidator'
import CubCadet from '../components/CubCadet'
import Argo from '../components/Argo'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getAll = async () => {
      const { data } = await axios.get('/api/inventory')
      setProducts(data)
    }
    getAll()
  }, [])

  return (
    <>
      <ProductSlider />
      <Intimidator />
      <CubCadet />
      <Argo />
    </>
  )
}
export default Home
