import React, { useState, useEffect } from "react";
import "./Search.css";
import axios from "axios";

const Search = ({ Showsearch, setShowsearch }) => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/Products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  const [searchvalue, setsearchvalue] = useState("");
  const [filterddata, setfilterddata] = useState(Products);

  const handelinput = (e) => {
    setsearchvalue(e.target.value);
    if (!e.target.value) {
      setfilterddata(Products);
    } else {
      const searchquery = e.target.value;
      const filterdclone = [...filterddata];
      const afterfilter = filterdclone.filter((item) =>
        item.ProductName.includes(searchquery)
      );
      setfilterddata(afterfilter);
    }
  };
  return (
    <>
      <main className="main-search">
        <section className="Container-search">
          <h1
            className="close-search"
            onClick={() => {
              Showsearch && setShowsearch(false);
            }}
          >
            x
          </h1>
          <div className="search-text">
            <p className="search-heading">What are you looking for?</p>

            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              name="search-value"
              placeholder="Enter Search Value"
              className="search-fild"
              onChange={handelinput}
              value={searchvalue}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Search;
