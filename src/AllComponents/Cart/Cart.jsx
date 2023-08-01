import React, { useEffect, useState } from "react";
import "./cart.css";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const Cart = () => {
  const [productCart, setProductCart] = useState([]);
  const gitProduct = () => {
    axios.get("http://localhost:8000/Cart").then((res) => {
      setProductCart(res.data);
      // console.log(res.data);
    });
  };
  useEffect(() => {
    gitProduct();
  }, []);

  // handelRemoveProduct relode
  const handelRemoveProduct = (id) => {
    // const afterDelete = productCart.filter(productCart => productCart.id !== id);
    // او انت هتمسح بى فاتر هتمسح موقت فقط يعنى اول متعمل رلوود الداتا هتتظهر تانى
    // setProductCart(afterDelete)
    fetch(`http://localhost:8000/Cart/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((res) => {
        // console.log(res)
        gitProduct();
      });
    });
  };

  // handel inc & dec product cart

  const increase = (index) => {
    const cart = [...productCart];
    cart[index].Counter++;
    setProductCart(cart);
  };
  const decrease = (index) => {
    const cart = [...productCart];
    cart[index].Counter--;
    setProductCart(cart);
  };
  return (
    <>
      <section className="Your-Cart">
        <Container>
          <Row>
            <Col className="visa" lg={5} md={4} sm={12}>
              <h3 className="visa-title">Capone</h3>
              <p className="p">Enter the coupon code</p>
              <Col className="about-Coupon">
                <button className="Coupon-btn">Confirm Coupon</button>
                <input
                  type="text"
                  placeholder="coupon code"
                  className="couponCode-input"
                />
              </Col>
              <h3 className="Note">Your Note</h3>
              <textarea
                name="Note"
                className="Note-massage"
                placeholder="Add Your Note..."
                cols="60"
                rows="3"
              ></textarea>

              <Col className="total">
                <p className="total-price">500 L.E</p>
                <h5 className="total-tittle">Subtotal</h5>
              </Col>
              <Col className="total">
                <p className="total-price">500 L.E</p>
                <h5 className="total-tittle">Grand Total</h5>
              </Col>

              <p className="checkout">
                Shipping and taxes calculated at checkout
              </p>

              <Col className="pay-update">
                <button className="pay">Pay</button>
                <button className="UpdateCart">Update Cart</button>
              </Col>
            </Col>

            <Col className="products-table" lg={7} md={8} sm={12}>
              <table className="cart-table">
                <thead>
                  <tr>
                    <td className="table-heading">Total</td>
                    <td className="table-heading">Quantaty</td>
                    <td className="table-heading">Price</td>
                    <td className="table-heading">Product</td>
                    <td className="table-heading">remove</td>
                  </tr>
                </thead>

                <tbody>
                  {productCart.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <p className="Pro-Price">
                        {item.Counter * item.price} L.E
                        </p> 
                      </td>
                      <td>
                        <button
                          className="dec-btn"
                          onClick={() => {
                            if (productCart.Counter !== 1) 
                            decrease(index);
                          }}
                        >
                          -
                        </button>

                        <span className="Pro-Price">{item.Counter}</span>

                        <button
                          className="inc-btn"
                          onClick={() => {
                            increase(index);
                          }}
                        >
                          +
                        </button>
                      </td>
                      <td>
                        <p className="Pro-Price">{item.price}</p>
                      </td>

                      <td>
                        <img
                          className="productCartproductCart-img"
                          src={item.img}
                          alt="img"
                        />
                      </td>

                      <td>
                        <i
                          onClick={() => handelRemoveProduct(item.id)}
                          className="fa-solid fa-trash"
                        ></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
               
              </table>
              <Link to='/Products'>
                <button className="BackToShop">Back To Shop</button>
                </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Cart;
