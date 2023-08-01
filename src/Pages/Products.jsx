import React from 'react'
import SubNave from '../AllComponents/products/SubNave/SubNave'
import AllProducts from '../AllComponents/products/AllProducts/AllProducts'
import SimilarProducts from '../AllComponents/products/SimilarProducts/SimilarProducts'

const Products = () => {
  return (
    <>
    
    <SubNave
    subnaveimg='\images\Untitled design .png'
    />

    <AllProducts
    Rectangle2='\images\Rectangle2.png'
    Rectangle1='\images\Rectangle1.png'
    Rectangle3='\images\Rectangle3.png'
    />
   
   <SimilarProducts/>
    
    </>
  )
}

export default Products