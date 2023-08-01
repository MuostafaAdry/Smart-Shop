import React from 'react'
import Hero from '../AllComponents/Home/Hero/Hero'
import Services from '../AllComponents/Home/Services/Services'
import Lproduct from '../AllComponents/Home/LatestProduct/Lproduct'
import Time from '../AllComponents/Home/Time/Time'
import Category from '../AllComponents/Home/Category/Category'


const Home = () => {
  return (
    <>
   
        
        <Hero 
        slider1='/images/Ellipse 1.png'
        slider2='\images\Frame 110.png'
        slider3='\images\Frame 111.png'
        Ellipse2 ='\images\Ellipse 2.png'
        Ellipse3 ='\images\Ellipse 3.png'
        
        />
        <Services
        grop1='\images\Group 8955.png'
        grop2='\images\Group 8956.png'
        grop3='\images\Group 8957.png'
        grop4='\images\Group 8958.png'
        baner1='\images\baner1.png'
        baner2='\images\baner2.png'
        
        />
        <Lproduct/>
        <Time duration={10 *24 *60 *60 *1000}
        timebaner1='\images\c1.png'
        timebaner2='\images\c3.png'
        
        />
        <Category
        brand1='\images\brand2.png'
        brand2='\images\brand1.png'
        brand3='\images\brand3.png'
        brand4='\images\brand4.png'
        baner1='\images\Frame 110.png'
        baner2='\images\Frame 112.png'
        baner3='\images\Frame 111.png'
        />
        
    </>
  )
}

export default Home