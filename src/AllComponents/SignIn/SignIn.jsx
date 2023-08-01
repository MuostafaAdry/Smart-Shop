import React,{useState} from 'react'
import { Container, Row, Col } from "react-bootstrap";
import './SignIn.css'
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const SignIn = (props) => {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const navigate=useNavigate()

    const handelSignin = (e) => { 
        e.preventDefault();
   
    //    let UserData = { Email, Password };
    axios.get("http://localhost:8000/Users/1")
    .then((res)=>{
        toast.success("User Loged Succssefully")
        navigate('/')
    })
    .catch((err)=>{
        toast.error( `these Acount not found`)
        navigate('/CreateAcount')
    })
    setEmail('')
    setPassword('')
       
     };
   
  return (
    <>
        <section className="Signin">
        <Container>
          <Row>
            <Col className="sec-form" lg={6} md={6} sm={12}>
              <h1 className="form-tittle">Smart Shop</h1>
              <p className="form-heading">Sign in with Your Acount</p>
              <form className="Signin-form">
                <input
                  type="email"
                  name="your Email"
                  placeholder="Your Email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  name="your password"
                  placeholder="Your Password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="Create-btn" type="submit" onClick={handelSignin}>
                Signin
                </button>
              </form>
            </Col>

            <Col className="Signinimg-container" lg={6} md={6} sm={12}>
              <img
                className="Signinimg"
                src={props.Signinimg}
                alt="Signinimg"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default SignIn