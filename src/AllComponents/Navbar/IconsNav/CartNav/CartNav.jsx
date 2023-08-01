import React, { useEffect, useState } from "react";
import "./CartNav.css";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const CartNav = ({ ShowCart, setShowCart }) => {
  const [Carts, setCarts] = useState([]);
  const gitCartProduct = () => {
    axios.get("http://localhost:8000/Cart").then((res) => {
      setCarts(res.data);
    });
  };
  useEffect(() => {
    gitCartProduct();
  }, [Carts]);

  const handelRemoveCart = (id) => {
    fetch(`http://localhost:8000/Cart/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((res) => {
        gitCartProduct();
      });
    });
  };
  return (
    <>
      <main className="main-cart">
        <section className="Container-cart">
          <h1
            className="close-cart"
            onClick={() => {
              ShowCart && setShowCart(false);
            }}
          >
            x
          </h1>
          <Container>
            {Carts.map((Cart, index) => (
              <Row className="row-cart" key={index}>
                <Col className="imgCart-remove" lg={4} md={4} sm={4}>
                  <i
                    className="fa-solid fa-trash"
                    onClick={() => handelRemoveCart(Cart.id)}
                  ></i>
                </Col>
                <Col className="imgCart-info" lg={4} md={4} sm={4}>
                  <h5 className="cart-name">{Cart.name}</h5>
                  <Col className="cart-sizeprice">
                    <span className="cart-size">{Cart.Size}</span>
                    <span className="cart-price">{Cart.price}</span>
                  </Col>
                </Col>

                <Col className="imgCart-container" lg={4} md={4} sm={4}>
                 <Link to='/AddToCart'>
                  <img className="img-Cart" src={Cart.img} alt="" />
                 </Link>
                  
                </Col>
                <hr />
              </Row>
            ))}
          </Container>

          <Col className="cart-total">
            <Link to="/AddToCart">
              <button
                onClick={() => {
                  ShowCart && setShowCart(false);
                }}
                className="cartPay-btn"
              >
                Pay
              </button>
            </Link>

            <h1 className="total">Total:1200 L.E</h1>
          </Col>
        </section>
      </main>
    </>
  );
};

export default CartNav;
