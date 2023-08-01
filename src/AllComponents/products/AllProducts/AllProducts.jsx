import React, { useEffect, useState } from "react";

import ReactStars from 'react-stars'


import { Container, Row, Col } from "react-bootstrap";
import "./allproducts.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const AllProducts = (props) => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/Products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  const handleAddToCart = (Products) => {
    const EachProduct = Products.id;
    localStorage.setItem("EachProduct", EachProduct);
    // console.log(localStorage);
  };

  // handel heart event

  const handelLikes = (Product) => {
    const ProductId = Product.id;
    const ProductImgurl = Product.imgurl;
    const ProductHeart = { ProductId, ProductImgurl };
    axios
      .post(`http://localhost:8000/Likes`, ProductHeart)
      .then((res) => {
        toast.success("You Added this Product in Your Likes");
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  const ratingChanged = (newRating) => {
    console.log(newRating)
  } 
  return (
    <>
      <section className="allproducts" for='serv'>
        <Container>
          <Row>
            <Col className="right-aside" lg={9} md={9} sm={12}>
              <Row>
                {Products.map((Product, index) => (
                  <Col key={index} lg={4} md={4} sm={12}>
                    <i
                      className="fa-regular fa-heart likeproduct"
                      onClick={() => handelLikes(Product)}
                    ></i>
                    <Col className="contain-imgurl">
                      <img className="imgurl" src={Product.imgurl} alt="" />
                    </Col>

                    <Col className="priceandstarts">
                      <p className="price">{Product.price}L.E</p>
                    
                      
                        <ReactStars
                          count={5}
                          onChange={ratingChanged}
                          size={24}
                          color2={'#ffa500'} />
                      
                    </Col>
                    <Col className="priceandname">
                      <p className="price">{Product.price}</p>
                      <p className="name">{Product.ProductName}</p>
                    </Col>

                    <Col>
                      <Link to="/SingleProductDetails">
                        <button
                          className="addtocart-btn"
                          onClick={() => handleAddToCart(Product)}
                        >
                          add to cart
                        </button>
                      </Link>
                    </Col>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col className="aside-right" lg={3} md={3} sm={12}>
              <Col className="categores">
                <h1 className="categre-heading">
                  categores <i className="fa-solid fa-caret-left"></i>
                </h1>
                <p className="categre-items">
                  <span className="add-item">+</span>
                  <span className="item">Accessories</span>
                </p>
                <p className="categre-items">
                  <span className="add-item">+</span>
                  <span className="item">Clothes</span>
                </p>

                <p className="categre-items">
                  <span className="add-item">+</span>
                  <span className="item">Furniture</span>
                </p>
                <p className="categre-items">
                  <span className="add-item">+</span>
                  <span className="item">Shoes</span>
                </p>
                <p className="categre-items">
                  <span className="add-item">+</span>
                  <span className="item">المجوهرات</span>
                </p>
              </Col>
              <hr />

              <Col className="prices">
                <h1 className="prices-heading">
                  Price <i className="fa-solid fa-caret-left"></i>
                </h1>
                <Col>
                  <input type="range" />
                </Col>
              </Col>
              <hr />
              <Col className="sizes">
                <h1 className="sizes-heading">
                  sizes <i className="fa-solid fa-caret-left"></i>
                </h1>
                <Col>
                  <span className="size-kind">M</span>
                  <span className="size-kind">X</span>
                  <span className="size-kind">XL</span>
                  <span className="size-kind">XX</span>
                </Col>
              </Col>
              <hr />

              <Col className="colors">
                <h1 className="colors-heading">
                  colors <i className="fa-solid fa-caret-left"></i>
                </h1>
                <Col className="color-item">
                  <span className="red"></span>
                  <span className="yellew"></span>
                  <span className="blue"></span>
                  <span className="green"></span>
                </Col>
              </Col>
              <hr />

              <Col className="Branding">
                <h1 className="Branding-heading">
                  Branding <i className="fa-solid fa-caret-left"></i>
                </h1>
                <Col className="Branding-item">
                  <span className="bran-item">Zara-</span>
                  <span className="bran-item">H&M-</span>
                  <span className="bran-item">Alafreky-</span>
                  <span className="bran-item">Zara-</span>
                </Col>
              </Col>
              <hr />
              <Col className="Distinctive">
                <h3 className="Distinctive-heading">
                  Distinctive elements{" "}
                  <i className="fa-solid fa-caret-left"></i>
                </h3>

                <Col className="Distinctive-item1">
                  <Col className="Distinctive-item-detels">
                    <p className="Distinctive-name">
                      Modern blue dress for women
                    </p>
                    <span className="Distinctive-price">800L.E</span>
                  </Col>
                  <Col className="Distinctive-item-img">
                    <img src={props.Rectangle1} alt="Rectangle1" />
                  </Col>
                </Col>

                <Col className="Distinctive-item1">
                  <Col className="Distinctive-item-detels">
                    <p className="Distinctive-name">
                      Modern blue dress for women
                    </p>
                    <span className="Distinctive-price">800L.E</span>
                  </Col>
                  <Col className="Distinctive-item-img">
                    <img src={props.Rectangle2} alt="Rectangle1" />
                  </Col>
                </Col>

                <Col className="Distinctive-item1">
                  <Col className="Distinctive-item-detels">
                    <p className="Distinctive-name">
                      Modern blue dress for women
                    </p>
                    <span className="Distinctive-price">800L.E</span>
                  </Col>
                  <Col className="Distinctive-item-img">
                    <img src={props.Rectangle3} alt="Rectangle1" />
                  </Col>
                </Col>
              </Col>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AllProducts;
