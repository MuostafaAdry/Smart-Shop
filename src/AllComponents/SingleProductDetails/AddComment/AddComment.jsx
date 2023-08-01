import React, { useState } from "react";
import "./addcomment.css";
import ReactStars from "react-stars";

import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShowComment from "../../SharedComponent/Comment/ShowComment";
import SimilarProducts from "../../products/SimilarProducts/SimilarProducts";

import { FaStar } from "react-icons/fa";

const AddComment = () => {
  const [Stars, setStars] = useState("");
  const [Comment, setComment] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");

  const handelsubmit = (e) => {
    e.preventDefault();
    let AllFildes = { Stars, Comment, Name, Email };
    // handellApi
    axios
      .post("http://localhost:8000/Commentes", AllFildes)
      .then((res) => {
        toast.success("You Added Your Comment ");
      })
      .catch((err) => {
        toast.error(err.message);
      });
    console.log(AllFildes);
    setStars("");
    setComment("");
    setEmail("");
    setName("");
    // setImgUrl('')
  };

  // handelStars

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <>
      <section className="sec-commentes">
        <Container>
          <Row>
            <Col className="form-comment" lg={6} md={12} sm={12}>
              <form className="form-values">
                <Col className="Assessment-stars">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    color2={"#ffa500"}
                  />
                </Col>
                <input
                  type="text"
                  name="stars"
                  placeholder="Add Your Assessment"
                  className="stars"
                  value={Stars}
                  onChange={(e) => setStars(e.target.value)}
                />
                <textarea
                  name="YourComment"
                  cols="70"
                  rows="10"
                  className="YourComment"
                  placeholder="Add Your Comment..."
                  value={Comment}
                  onChange={(e) => setComment(e.target.value)}
                >
                  Add Your Comment...
                </textarea>
                <Col className="nameand-email">
                  <input
                    type="text"
                    name="YourName"
                    placeholder="YourNmae"
                    className="YourNmae"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="email"
                    name="YourEmail"
                    placeholder="YourEemail"
                    className="YourEemail"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Col>

                <button className="AddComment-btn" onClick={handelsubmit}>
                  AddComment
                </button>
              </form>
            </Col>

            <Col className="show-comment" lg={6} md={12} sm={12}>
              <ShowComment userNmae="\images\userNmae.png" />
            </Col>
          </Row>
        </Container>
      </section>

      <SimilarProducts />
    </>
  );
};

export default AddComment;
