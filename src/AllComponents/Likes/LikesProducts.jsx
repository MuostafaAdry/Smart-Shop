import React, { useEffect, useState } from "react";
import "./LikesProductes.css";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import ReactStars from 'react-stars'
import { toast } from "react-toastify";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const LikesProductes = () => {
  const [Likes, setLikes] = useState([]);

  const ShowLikes = () => {
    axios.get("http://localhost:8000/Likes").then((res) => {
      setLikes(res.data);
      // console.log(res.data)
    });
  };
  useEffect(() => {
    ShowLikes();
  }, []);
  // handel handelRemoveLike
  const handelRemoveLike = (item) => {
    const proId = item.id;
    // console.log(proId)
    fetch(`http://localhost:8000/Likes/${proId}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((res) => {
        ShowLikes();
        toast.success("You Disliked this Product");
      });
    });
  };
  const ratingChanged = (newRating) => {
    console.log(newRating)
  }
  return (
    <>
      <section>
        <Container>
          <Row>
            {Likes.map((item, index) => (
              <Col key={index} lg={3} md={6} sm={12}>
                <i
                  className="fa-solid fa-heart your-likes"
                  onClick={() => handelRemoveLike(item)}
                ></i>
                <Col>
                  <img src={item.ProductImgurl} alt="" />
                </Col>
                <ReactStars
                          count={5}
                          onChange={ratingChanged}
                          size={24}
                          color2={'#ffa500'} />

              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default LikesProductes;
