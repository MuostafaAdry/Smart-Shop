import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Category.css";
import axios from "axios";
import ReactStars from 'react-stars'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Category = (props) => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/SimilarProducr").then((res) => {
      setProducts(res.data);
      console.log(res.data);
    });
  }, []);
  const ratingChanged = (newRating) => {
    console.log(newRating)
  }
  return (
    <>
      <section className="sec-Category">
        <Container>
          <Row>
            <Col className="slider-categry" lg={9} md={12} sm={12}>
              <Swiper
                slidesPerView={3}
                centeredSlides={false}
                slidesPerGroupSkip={3}
                grabCursor={true}
                keyboard={{
                  enabled: true,
                }}
                breakpoints={{
                  769: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                  },
                }}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                className="mySwiper"
              >
                {Products.map((Product, index1) => (
                  <SwiperSlide key={index1}>
                    <Col className="categry-card">
                      <Link to='/Products'>
                           <img
                        className="categry-slider-img"
                        src={Product.imgurl}
                        alt=""
                      />
                      </Link>
                   

                      <Col className="categry-img-info">
                        <span className="categry-price">{Product.price}L.E</span>

                        <ReactStars
                          count={5}
                          onChange={ratingChanged}
                          size={24}
                          color2={'#ffa500'} />
                      </Col>

                      <Col className="categry-card-inpf">
                        <span className="categry-img-price">25$</span>
                        <span className="categry-img-name">
                          {Product.ProductName}
                        </span>
                      </Col>
                    </Col>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>

            <Col className="allcategry" lg={3} md={6} sm={12}>
              <Col className="allcategry-container">
                <h3 className="categry-heading">Shop by Category</h3>
                <h6 className="gategry-titel">Men's</h6>
                <h6 className="gategry-titel">Women's</h6>
                <h6 className="gategry-titel">kids</h6>
                <h6 className="gategry-titel">Accessories</h6>
                <h6 className="gategry-titel">Games</h6>
              </Col>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sec-brandes">
        <Container>
          <Row>
            <Col>
              <Swiper
                slidesPerView={4}
                centeredSlides={false}
                slidesPerGroupSkip={4}
                grabCursor={true}
                keyboard={{
                  enabled: true,
                }}
                breakpoints={{
                  769: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                  },
                }}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide className="swiper-img-brans">
                  <img src={props.brand1} alt="b1" />
                </SwiperSlide>
                <SwiperSlide className="swiper-img-brans">
                  <img src={props.brand2} alt="b1" />
                </SwiperSlide>
                <SwiperSlide className="swiper-img-brans">
                  <img src={props.brand3} alt="b1" />
                </SwiperSlide>
                <SwiperSlide className="swiper-img-brans">
                  <img src={props.brand4} alt="b1" />
                </SwiperSlide>
                <SwiperSlide className="swiper-img-brans">
                  <img src={props.brand1} alt="b1" />
                </SwiperSlide>
                <SwiperSlide className="swiper-img-brans">
                  <img src={props.brand2} alt="b1" />
                </SwiperSlide>
                <SwiperSlide className="swiper-img-brans">
                  <img src={props.brand3} alt="b1" />
                </SwiperSlide>
                <SwiperSlide className="swiper-img-brans">
                  <img src={props.brand4} alt="b4" />
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sec-models">
        <Container>
          <Row>
            <Col className="brand-container" lg={4} md={4} sm={12}>
              <Col>
                <img className="model-img" src={props.baner2} alt="baner1" />
              </Col>
              <p className="brand-title">
                With the most beautiful fashion and fashion
              </p>
            </Col>

            <Col className="brand-container" lg={4} md={4} sm={12}>
              <p className="brand-title">Buy the one that makes you a check</p>
              <Col>
                <img src={props.baner1} alt="baner2" />
              </Col>
            </Col>

            <Col className="brand-container" lg={4} md={4} sm={12}>
              <Col>
                <img src={props.baner3} alt="aner3" />
              </Col>
              <p className="brand-title">
                Enjoy a dazzling atmosphere in the outings
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      
    </>
  );
};

export default Category;
