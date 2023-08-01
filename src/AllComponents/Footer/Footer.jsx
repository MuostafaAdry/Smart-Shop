import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <section className="footer">
        <Container>
          <Col className="footer-links">
            <Row >
              <Col lg={3} md={3} sm={6}>
                <Link
                  className="footer-link
              "
                  to="/"
                >
                  Home
                </Link>
              </Col>

              <Col lg={3} md={3} sm={6}>
                <Link className="footer-link" to="/Products">
                  Products
                </Link>
              </Col>

              <Col lg={3} md={3} sm={6}>
                <Link
                  className="footer-link
              "
                  to="/Services"
                >
                  Services
                </Link>
              </Col>

              <Col lg={3} md={3} sm={6}>
                <Link
                  className="footer-link
              "
                  to="/AboutUs"
                >
                  AboutUs
                </Link>
              </Col>
            </Row>
          </Col>

          <Col className="socialmeadia">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-whatsapp"></i>
          </Col>

          <h1 className="footer-heading">Stay connected</h1>
        </Container>
      </section>
    </>
  );
};

export default Footer;
