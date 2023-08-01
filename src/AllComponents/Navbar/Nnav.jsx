import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./nav.css";
import Search from "./IconsNav/Search/Search";
import CartNav from "./IconsNav/CartNav/CartNav";
import axios from "axios";

const Nnav = (props) => {
  const [Showsearch, setShowsearch] = useState(false);
  const [ShowCart, setShowCart] = useState(false);
 
 
  const [Data ,setData ]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:8000/Cart')
    .then((res)=>{
      setData(res.data)
    }) 
  },[Data])
 const counterCart=Data.length;
  console.log(counterCart)


  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={props.logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="navlink" to="/">
                Home
              </Link>
              <Link className="navlink" to="/Products">
                Products
              </Link>
              <Link className="navlink" id="serv">
                Services
              </Link>
              <Link className="navlink" to="/AboutUs">
                AboutUs
              </Link>
              <Link className="navlink" to="/ContactUs">
                ContactUs
              </Link>
             
            </Nav>
            <Form className="d-flex nav-form ">
              <span className="closeslider">
                <i
                  className="fa-solid fa-cart-shopping"
                  onClick={() => setShowCart(true)}
                  value={ShowCart}
                ></i>
              </span>
              <span className="CountCart">{counterCart}</span>
              <span className="heart">
                <Link to="/Likes">
                  <i className="fa-solid fa-heart NavLike"></i>
                </Link>
              </span>
              <span className="users">
                <Link to='/CreateAcount'>
                  <i className="fa-solid fa-user"></i>
                </Link>
                
              </span>
              <span className="closesearch">
                <i
                  className="fa-solid fa-magnifying-glass"
                  onClick={() => setShowsearch(true)}
                  value={Showsearch}
                ></i>
              </span>
              <Link to="/CreateAcount">
                <button className="Signin-btn">Sing in</button>
              </Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {Showsearch && (
        <Search Showsearch={Showsearch} setShowsearch={setShowsearch} />
      )}
      {ShowCart && <CartNav ShowCart={ShowCart} setShowCart={setShowCart} />}
    </>
  );
};

export default Nnav;
