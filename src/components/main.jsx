import React from "react";
import { Container } from "react-bootstrap";
import { BsArrowRightShort } from "react-icons/bs";
import mainImg from '../assets/main-img.png'

function Main() {
  return (
    <div id="main">
      <Container>
        <div className="text-center">
          <h1 className="main-text-title">
            Create Amazing Digital Product
            <br />
            For Your Business
          </h1>
          <p className="main-text-desc">
            We are a professional digital agency that has been established since
            2016, we present a variety of
            <br />
            digital services that can help you solve problems in your business
          </p>
          <button className="btn button-white mt-5">
            Get Started <BsArrowRightShort className="icon-arrow-right" />
          </button>
          {/* <img src={mainImg} alt="" className="img-fluid"/> */}
        </div>
      </Container>
    </div>
  );
}

export default Main;
