import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Lproduct.css";
import axios from "axios";
import ReactStars from 'react-stars'
import { Link, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Lproduct = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/SimilarProducr").then((res) => {
      setProducts(res.data);
      // console.log(res.data);
    });
  }, []);

  // handel heart event

  const handelLikes = (Product) => {
    const ProductId = Product.id;
    const ProductImgurl = Product.imgurl;
    const ProductHeart = { ProductId, ProductImgurl };
    axios
      .post(`http://localhost:8000/Likes`, ProductHeart)
      .then((res) => {
        toast.success("You Added thes Product in Your Likes");
      })
      .catch((err) => {
        toast.error(err);
      });

    // console.log(ProductHeart)
  };
  const ratingChanged = (newRating) => {
    console.log(newRating)
  }
  return (
    <>
      <section className="sec-lproduct">
        <Container>
          <h1 className="product-tittle">Latest Products</h1>
          <Row>
            {Products.map((Product, index) => (
              <Col key={index} className="product-card" lg={3} md={6} sm={12}>
                <i
                  className="fa-regular fa-heart like"
                  onClick={() => handelLikes(Product)}
                ></i>
                <Col className="img-container">
                  <Link to="/Products">
                    <img className="img" src={Product.imgurl} alt="imgurl" />
                  </Link>
                </Col>

                <Col className="card-inpf">
                  <span className="cord-price">{Product.price}L.E</span>
                  <ReactStars
                          count={5}
                          onChange={ratingChanged}
                          size={24}
                          color2={'#ffa500'} />
                </Col>

                <Col className="card-inpf">
                  <span className="cord-price">25$</span>
                 

                  <Col className="sizes">
                    <Col>
                      <span className="size-kind">M</span>
                      <span className="size-kind">X</span>
                      <span className="size-kind">XL</span>
                      <span className="size-kind">XX</span>
                    </Col>
                  </Col>
                </Col>
                <h6 className="card-name">{Product.ProductName}</h6>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Lproduct;
