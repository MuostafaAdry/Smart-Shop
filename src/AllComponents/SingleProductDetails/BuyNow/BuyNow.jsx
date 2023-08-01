import React, { useEffect, useState } from "react";
import "./BuyNow.css";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import ReactStars from "react-stars";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const BuyNow = () => {
  const GetProduct = localStorage.getItem("EachProduct");
  //const SimilarProductid = localStorage.getItem("ProductId");
 
  // console.log(GetProduct);
  // handel product from all product 
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8000/Products/${GetProduct}`).then((res) => {
      setProducts(res.data);
    });
  }, []);

// handel product from all SimilarProducts 
// const [SimiProducts, setSimiProducts] = useState([]);
// useEffect(() => {
//   axios.get(`http://localhost:8000/SimilarProducr/${SimilarProductid}`).then((res) => {
//     setSimiProducts(res.data);
//   });
// }, []);

  // hadel color
  const [Color, setColor] = useState("");
  const handelred = (e) => {
    setColor(e.target.value);
  };
  //handel size
  const [Size, setSize] = useState("");
  const handelsize = (e) => {
    setSize(e.target.value);
  };

  //handel counter
  

  const [Counter, setCounter] = useState(0);
  const handelinc = () => {
    setCounter(Counter + 1);
  };

  const handeldec = () => {
    setCounter(Counter - 1);
   
  };
  // handel BuyNow
  const name = Products.ProductName;
  const price = Products.price;
  const id = Products.id;
  const img = Products.imgurl;
  const ProductAttribute = { Color, Size, name, price, id, img, Counter };
  const handelBuyNow = (e) => {
    e.preventDefault();
    console.log(ProductAttribute);
  };

  //handel Add To Cart
  const navigate = useNavigate();
 

  const handelAddToCart = () => {
    axios
      .post("http://localhost:8000/Cart", ProductAttribute)
      .then((res) => {
        toast.success("You Added thes Product to Cart");
      })
      .catch((err) => {
        toast.error(
          "Please add the amount from your cart! this product has already been added once."
        );
      });
    navigate("/AddToCart");
  };
 

  // const [CountCart,setCountCart]=useState(0)
  // const handelcounter=(e)=>{
  //   e.preventDefault()
  //   setCountCart(CountCart + 1)
  //   handelAddToCart()

  // }
  // localStorage.setItem("CounterCart",CountCart)

  //starss
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <>
      <section className="sec-BuyNow">
        <Container>
          
          <Row>
            <Col className="BuyNow-forDetels" lg={6} md={6} sm={12}>
              <h1 className="ProductName">{Products.ProductName}</h1>
              <h6 className="Productprice">
                <span>650 L.E</span>
                <del>{Products.price}</del>
              </h6>
              <h6 className="stars">
              <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    color2={"#ffa500"}
                  /> 
              </h6>
              <p className="product-info">
                Clothes are of a variety of types, as well as a variety of
                colors, and each of us is free to choose what he prefers.
              </p>

              <Col className="colors">
                <p className="colors-heading">colors</p>
                <Col className="color-item">
                  <label>red</label>
                  <input
                    type="radio"
                    name="red"
                    className="red"
                    onClick={handelred}
                    value="red"
                  />
                  <label>black</label>
                  <input
                    type="radio"
                    name="red"
                    onClick={handelred}
                    className="red"
                    value="black"
                  />
                  <label>blue</label>
                  <input
                    type="radio"
                    name="red"
                    onClick={handelred}
                    className="red"
                    value="blue"
                  />
                </Col>
              </Col>

              <Col className="sizes">
                <p className="sizes-heading">Sizes</p>
                <Col className="sizes-item">
                  <label>M</label>
                  <input
                    type="radio"
                    name="red"
                    className="red"
                    onClick={handelsize}
                    value="M"
                  />
                  <label>X</label>
                  <input
                    type="radio"
                    name="red"
                    className="red"
                    onClick={handelsize}
                    value="X-large"
                  />
                  <label>XX</label>
                  <input
                    type="radio"
                    name="red"
                    onClick={handelsize}
                    className="red"
                    value="XX-large"
                  />
                  <label>S</label>
                  <input
                    type="radio"
                    name="red"
                    onClick={handelsize}
                    className="red"
                    value="SMALL"
                  />
                </Col>
              </Col>
              <Col className="counter">
                <button onClick={handeldec}   className="dec">
                  -
                </button>
                <span className="quantaty">{Counter}</span>

                <button onClick={handelinc} className="inc">
                  +
                </button>
              </Col>

              <button onClick={handelAddToCart }
               className="addtocart-btn">
                Add To Cart
              </button>

              <button onClick={handelBuyNow} className="BuyNow-btn">
                BuyNow
              </button>
            </Col>

            <Col className="BuyNow-forImg" lg={6} md={6} sm={12}>
              {/* <Col className="BuyNowImg-container">
                <img src={Products.imgurl} alt="" />
              </Col> */}

              <Carousel>
                <div>
                  <img
                    src={Products.imgurl }
                    className="smallimg"
                    alt="imgurl"
                  />
                 
                  
                </div>
                <div>
                  <img
                    src={Products.imgurl}
                    className="smallimg"
                    alt="imgurl"
                  />
                </div>
                <div>
                  <img
                    src={Products.imgurl}
                    className="smallimg"
                    alt="imgurl"
                  />
                </div>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BuyNow;
