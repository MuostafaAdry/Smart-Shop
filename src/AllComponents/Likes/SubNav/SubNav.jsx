import React from "react";
import { Link } from "react-router-dom";
const SubNav = (props) => {
  return (
    <div>
      <section className="SubNave">
        <div className="subnave-links-div">
          <h1 className="subnave-heading">Shop the latest trendy products</h1>
          <div className="spanandlink">
            <span className="thesepage">Your Likes /</span>
            <Link className="prev-page" to="/">
              Home
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
    </div>
  );
};

export default SubNav;
