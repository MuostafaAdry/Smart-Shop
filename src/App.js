import React, { useState,useEffect } from "react";
import Mainpage from './Mainpage'
import ScaleLoader from "react-spinners/ScaleLoader";
import './App.css'

const App = () => 
{
  const [loder ,setloder] =useState(false);
  useEffect(()=>{
    setloder(true)
    setTimeout(() => {
      setloder(false)
    }, 500);
  },[])
  return (
    <>
    
    {/* loder={loder} */}
    {loder ? (
        <div className='ScaleLoader-div'>
          <ScaleLoader
          className='ScaleLoader'
            color={"#f87765"}
            loder="true"
            height={100}
            margin={10}
          />
        </div>
      ) : (
      
          <Mainpage/>

      )
}


    </>
  )
}

export default App