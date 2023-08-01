import React, { useEffect, useState } from "react";
import "./SimilarProducts.css";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import ReactStars from "react-stars";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import { toast } from "react-toastify";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const SimilarProducts = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("SimilarProducts.json").then((res) => {
      setProducts(res.data.Products);
    });
  }, []);

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

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


  // to buy product
  const handelproduct=(Product)=>{
    const ProductId=Product.id
    localStorage.setItem("ProductId", ProductId);
  }

  return (
    <>
      <section className="SimilarProducts">
        {/* <h1 className="SimilarProducts-heading">Similar Products</h1> */}
        <Container>
          <h1 className="SimilarProducts-heading">Similar Products</h1>
          <Row>
            <Col className="slider-SimilarProducts" lg={12} md={12} sm={12}>
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
                  375: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
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
                    <Col lg={12} md={12} sm={12}>
                      <i
                        className="fa-regular fa-heart SimilarLike"
                        onClick={() => handelLikes(Product)}
                      ></i>

                      <Col className="SimilarProducts-img">
                        <img className="img" src={Product.imgurl} alt="" 
                        onClick={()=>handelproduct(Product)}
                        />
                      </Col>
                      <Col className="priceandstarts">
                        <p className="price">{Product.price}</p>
                        <p className="stars">
                          <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            color2={"#ffa500"}
                          />
                        </p>
                      </Col>
                      <Col className="priceandname SimilarProducts-formargin">
                        <p className="price">{Product.price}</p>
                        <p className="name">{Product.ProductName}</p>
                      </Col>
                    </Col>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SimilarProducts;
