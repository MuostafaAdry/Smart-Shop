import React from "react";
import "./sevices.css";
import { Container, Row, Col } from "react-bootstrap";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Services = (props) => {
  return (
    <>
      <Container className="sec-services">
        <Row>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="SwiperSlide">
              <Col className="div-sevices">
                <Col className="slider-text">
                  <h6 className="slider-text-h6">Exclusive Offers</h6>
                  <p className="slider-text-p">
                    Great discounts on our products
                  </p>
                </Col>

                <Col className="slider-img">
                  <Col className="img-div">
                    <img src={props.grop1} alt="" />
                  </Col>
                </Col>
              </Col>
            </SwiperSlide>
            <SwiperSlide className="SwiperSlide">
              <Col className="div-sevices">
                <Col className="slider-text">
                  <h6 className="slider-text-h6">Exclusive Offers</h6>
                  <p className="slider-text-p">
                    Great discounts on our products
                  </p>
                </Col>

                <Col className="slider-img">
                  <Col className="img-div">
                    <img src={props.grop2} alt="" />
                  </Col>
                </Col>
              </Col>
            </SwiperSlide>
            <SwiperSlide className="SwiperSlide">
              <Col className="div-sevices">
                <Col className="slider-text">
                  <h6 className="slider-text-h6">Exclusive Offers</h6>
                  <p className="slider-text-p">
                    Great discounts on our products
                  </p>
                </Col>

                <Col className="slider-img">
                  <Col className="img-div">
                    <img src={props.grop3} alt="" />
                  </Col>
                </Col>
              </Col>
            </SwiperSlide>
            <SwiperSlide className="SwiperSlide">
              <Col className="div-sevices">
                <Col className="slider-text">
                  <h6 className="slider-text-h6">Exclusive Offers</h6>
                  <p className="slider-text-p">
                    Great discounts on our products
                  </p>
                </Col>

                <Col className="slider-img">
                  <Col className="img-div">
                    <img src={props.grop4} alt="" />
                  </Col>
                </Col>
              </Col>
            </SwiperSlide>
            <SwiperSlide className="SwiperSlide">
              <Col className="div-sevices">
                <Col className="slider-text">
                  <h6 className="slider-text-h6">Exclusive Offers</h6>
                  <p className="slider-text-p">
                    Great discounts on our products
                  </p>
                </Col>

                <Col className="slider-img">
                  <Col className="img-div">
                    <img src={props.grop1} alt="" />
                  </Col>
                </Col>
              </Col>
            </SwiperSlide>
            <SwiperSlide className="SwiperSlide">
              <Col className="div-sevices">
                <Col className="slider-text">
                  <h6 className="slider-text-h6">Exclusive Offers</h6>
                  <p className="slider-text-p">
                    Great discounts on our products
                  </p>
                </Col>

                <Col className="slider-img">
                  <Col className="img-div">
                    <img src={props.grop2} alt="" />
                  </Col>
                </Col>
              </Col>
            </SwiperSlide>
            <SwiperSlide className="SwiperSlide">
              <Col className="div-sevices">
                <Col className="slider-text">
                  <h6 className="slider-text-h6">Exclusive Offers</h6>
                  <p className="slider-text-p">
                    Great discounts on our products
                  </p>
                </Col>

                <Col className="slider-img">
                  <Col className="img-div">
                    <img src={props.grop3} alt="" />
                  </Col>
                </Col>
              </Col>
            </SwiperSlide>
            <SwiperSlide className="SwiperSlide">
              <Col className="div-sevices">
                <Col className="slider-text">
                  <h6 className="slider-text-h6">Exclusive Offers</h6>
                  <p className="slider-text-p">
                    Great discounts on our products
                  </p>
                </Col>

                <Col className="slider-img">
                  <Col className="img-div">
                    <img src={props.grop4} alt="" />
                  </Col>
                </Col>
              </Col>
            </SwiperSlide>
          </Swiper>
        </Row>
        <hr className="hr-services" />
      </Container>
<section className="sec-baner">
  <Container>
        <Row>
          <Col className="Notifications1" lg={6} md={6} sm={12}>
            <Col className="Notifications1-info">
              <h6 className="Notifications1-info-h6">Big discount</h6>
              <h3 className="Notifications1-info-h3">Girls dress</h3>
              <Link to='/Products'>
              <button className="baner-btn">Shop NOW</button>
              </Link>

            </Col>

            <Col className="Notifications1-baner">
              <img className="baner1" src={props.baner2} alt="baner1" />
            </Col>
          </Col>

          <Col className="Notifications2" lg={5} md={6} sm={12}>
            <Col className="Notifications2-info">
              <h6 className="Notifications2-info-h6">Big discount</h6>
              <h3 className="Notifications2-info-h3">Girls dress</h3>
              <Link to='/Products'>
              <button className="baner-btn">Shop NOW</button>
              </Link>
            </Col>

            <Col className="Notifications2-baner">
              <img className="baner2" src={props.baner1} alt="baner1" />
            </Col>
          </Col>

          
        </Row>
      </Container>
</section>
    
    </>
  );
};

export default Services;
