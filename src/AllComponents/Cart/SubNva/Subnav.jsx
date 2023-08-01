import React from 'react'
import './SubNavCart.css'
import { Link } from "react-router-dom";

const Subnav = (props) => {
  return (
    <>
         <section className="SubNave">
        <div className="subnave-links-div">
          <h1 className="subnave-heading">Shop the latest trendy products</h1>
          <div className="spanandlink">
            <span className="thesepage">Your Cart/</span>
           
            <Link className="prev-page" to="/">
              Home /
            </Link>
            <Link className="prev-page" to="/Products">
              Products
            </Link>
          </div>
        </div>

        <div className="subnave-img-contain">
          <img
            className="subnave-img"
            src={props.subnaveimg}
            alt="subnave-img"
          />
        </div>
      </section>
    </>
  )
}

export default Subnav