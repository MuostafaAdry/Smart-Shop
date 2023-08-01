import React from 'react'
import Cart from '../AllComponents/Cart/Cart'
import Subnav from '../AllComponents/Cart/SubNva/Subnav'
import SimilarProducts from '../AllComponents/products/SimilarProducts/SimilarProducts'

const AddToCart = () => {
  return (
    <>
    <Subnav
    subnaveimg='\images\Untitled design .png'
    />
    <Cart/>
    
    <SimilarProducts/>
    </>
  )
}

export default AddToCart