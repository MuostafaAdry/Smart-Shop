import React, { useEffect, useState } from 'react'
import './time.css'
 import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
const Time = (props) => {
    const {duration}=props;

    const [Time,setTime]=useState(duration);

    useEffect(()=>{
        setTimeout(() => {
            setTime(Time-1000)
        }, 1000);

    },[Time])


    const getformattedTime=(millisecond)=>{
        let total_secondes=parseInt(Math.floor(millisecond/1000))
        let total_minutes=parseInt(Math.floor(total_secondes/60))
        let total_houres=parseInt(Math.floor(total_minutes/60))
        let dayes=parseInt(Math.floor(total_houres/24))

        let secondes=parseInt(total_secondes %60)
        let minutes=parseInt(total_minutes %60)
        let houres=parseInt(total_houres %24)
        return`${dayes} :${houres} :${minutes} :${secondes}`

    }
  return (
    <>
    <section className='offer-time'>
        <Container>
            <Row>
                <Col lg={3} md={2} sm={12}>
                  <Col className='img-container-time'>
                  <img className='img-baner1' src={props.timebaner1} alt="timebaner1" />
                  </Col>
                
                </Col>


              <Col className='time-container' lg={6} md={4} sm={12}>

                <p className="time-title">Biggest discount ever</p>
                <h1 className="time-heading">Latest Kids Clothing</h1>
                <h1> {getformattedTime(Time)}</h1>
                <span>Dayes</span>
                <span> Houres</span>
                <span> Minutes </span>
                <span>Secondes</span>
                <Link className='time-link' to="/Products">Shop Now</Link>
             
              </Col>

              <Col lg={3} md={2} sm={12}>
                <Col className='img-container-time'>
                <img className='img-baner2' src={props.timebaner2} alt="timebaner3" />
                </Col>
                
              </Col>
            </Row>
        </Container>

    </section>
        
    </>
  )
}

export default Time