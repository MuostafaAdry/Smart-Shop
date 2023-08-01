import React from 'react'
import SubNav from '../AllComponents/SingleProductDetails/SubNav/SubNav'
import BuyNow from '../AllComponents/SingleProductDetails/BuyNow/BuyNow'
import AddComment from '../AllComponents/SingleProductDetails/AddComment/AddComment'

const SingleProductDetails = () => {
  return (
    <>
    <SubNav
    subnaveimg='\images\Untitled design .png'
    />
    <BuyNow
    maindrees='\images\maindrees.png'
    smalldrees1='\images\smalldrees1.png'
    smalldrees2='\images\smalldrees2.png'
    smalldrees3='\images\smalldrees3.png'
    smalldrees4='\images\smalldrees4.png'
    smalldrees5='\images\smalldrees5.png'
    />

    <AddComment/>
    
    </>
  )
}

export default SingleProductDetails