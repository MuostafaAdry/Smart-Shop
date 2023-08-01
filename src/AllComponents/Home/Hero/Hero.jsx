import React from "react";
import "./hero.css";

import { Container, Row, Col } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
// Parallax
const Hero = (props) => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <>
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  spaceBetween={30}
                  effect={"fade"}
                  navigation={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[EffectFade, Navigation, Pagination]}
                  className="mySwiper"
                >
                  <div
                    slot="container-start"
                    className="parallax-bg"
                    data-swiper-parallax="-23%"
                  ></div>

                  <SwiperSlide className="slider1">
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <Col className="slider-img-contain">
                          <img
                            className="Ellipse2-img"
                            src={props.Ellipse2}
                            alt="Ellipse2"
                          />
                          <img
                            className="Ellipse3-img"
                            src={props.Ellipse3}
                            alt="Ellipse3"
                          />
                          <img
                            className="slider-img"
                            src={props.slider1}
                            alt="slider1img"
                          />
                        </Col>
                      </Col>

                      <Col lg={6} md={6} sm={12}>
                        <Col className="hero-info">
                          <p className="tittle">International Women's Brands</p>
                          <h1 className="heading">Latest Women's Clothing</h1>
                          <p className="tittle">International Women's Brands</p>
                          <Link to='/Products'> 
                          
                          <button className="hero-btn">Discover Now</button>
                          </Link>
                         
                        </Col>
                      </Col>
                    </Row>
                  </SwiperSlide>

                  <SwiperSlide className="slider2">
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <Col className="slider-img-contain">
                          <img
                            className="Ellipse2-img"
                            src={props.Ellipse2}
                            alt="Ellipse2"
                          />
                          <img
                            className="Ellipse3-img"
                            src={props.Ellipse3}
                            alt="Ellipse3"
                          />
                          <img
                            className="slider-img2"
                            src={props.slider2}
                            alt="slider1img"
                          />
                        </Col>
                      </Col>
                    </Row>
                  </SwiperSlide>

                  <SwiperSlide className="slider3">
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <Col className="slider-img-contain">
                          <img
                            className="Ellipse2-img"
                            src={props.Ellipse2}
                            alt="Ellipse2"
                          />
                          <img
                            className="Ellipse3-img"
                            src={props.Ellipse3}
                            alt="Ellipse3"
                          />
                          <img
                            className="slider-img3"
                            src={props.slider3}
                            alt="slider1img"
                          />
                        </Col>
                      </Col>
                    </Row>
                  </SwiperSlide>
                </Swiper>
              </>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Hero;
