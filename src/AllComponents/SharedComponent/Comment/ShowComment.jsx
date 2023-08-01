import axios from "axios";
import "./showcomment.css";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const ShowComment = (props) => {
  const [comments, setComments] = useState([]);

  const getComment = () => {
    axios.get(`http://localhost:8000/Commentes`).then((res) => {
      setComments(res.data);
    });
  };
  useEffect(() => {
    getComment();
  }, [comments]);

  const stars = Array(5).fill(0);
  //   const date =new Date().toLocaleTimeString()
  return (
    <>
      <section className="show-comment2">
        <Container>
          <p className="num-comment">All Comments</p>
          {comments.map((comment, index) => (
            <Row key={index}>

                 <Col className="img-deteles-photo" lg={3} md={6} sm={3}>
                <img className="user-img" src={props.userNmae} alt="" />
              </Col>
              <Col className="img-deteles-info" lg={9} md={6} sm={9}>
               <h1 className="userNmae">{comment.Name}</h1> 
                <p className="theComment">{comment.Comment}</p>
                  <Col className="Assessment-stars">
                  {stars.map((_, index) => (
                    <FaStar className="FaStar" key={index} />
                  ))}
                </Col>
              </Col>

           
              <hr />
            </Row>
          ))}
        </Container>
      </section>
    </>
  );
};

export default ShowComment;


