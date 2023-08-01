import React, { useState } from "react";
import "./CreateAcount.css";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const CreateAcount = (props) => {
  const [Name, setName] = useState("");
  const [Nameerror, setNameerror] = useState("");

  const [Email, setEmail] = useState("");
  const [Emailerr, setEmailerr] = useState("");

  const [Password, setPassword] = useState("");
  const [Passworderr, setPassworderr] = useState("");
  const navigate = useNavigate();

  const handelCreate = (e) => {
    e.preventDefault();
    let UserData = { Name, Email, Password };
    axios
      .post("http://localhost:8000/Users", UserData)
      .then((res) => {
        toast.success(res);
      })
      .catch((err) => {
        toast.error(err.message);
      });
    navigate("/Signin");
    console.log(UserData);

    if (Name.length > 10) {
      setNameerror(" con not enter more than 10 chars for name ");
    } else {
      if (Name === "") {
        setNameerror("enter your name");
      }
    }

    if (Password.length > 8) {
      setPassworderr(" con not enter more than 10 num ");
    }

    if (Email.length < 4) {
      setEmailerr(" con not enter more than 10 chars for email");
    }

  };

  return (
    <>
      <section className="CreateAcount">
        <Container>
          <Row>
            <Col className="sec-form" lg={6} md={6} sm={12}>
              <h1 className="form-tittle">Smart Shop</h1>
              <p className="form-heading">Create Your Acount</p>
              <form className="CreateAcount-form">
                <input
                  type="text"
                  name="your Name"
                  placeholder="Your Name"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                />
                {Nameerror && <span>{Nameerror}</span>}
                <input
                  type="email"
                  name="your Email"
                  placeholder="Your Email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {Emailerr && <span>{Emailerr}</span>}
                <input
                  type="password"
                  name="your password"
                  placeholder="Your Password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {Passworderr && <span>{Passworderr}</span>}
                {/* <Col>
                  <h1>
                    <label>Admin</label>
                    <input type="radio" name="admin" />
                  </h1>

                  <label>user</label>
                  <input type="radio" name="admin" />
                </Col> */}

                <Col className="form-btns">
                  <button
                    className="Create-btn"
                    type="submit"
                    onClick={handelCreate}
                  >
                    Create Acount
                  </button>

                  <button
                    className="sign-btn"
                    type="submit"
                    onClick={handelCreate}
                  >
                    sign in
                  </button>
                </Col>
              </form>
            </Col>

            <Col className="createAcountimg-container" lg={6} md={6} sm={12}>
              <img
                className="createAcountimg"
                src={props.createAcountimg}
                alt="createAcountimg"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CreateAcount;
