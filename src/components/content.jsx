import React from "react";
import Logo from "../assets/robo.gif";
import '../components/style.css'

const Content = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 img-fluid">
          <img src={Logo} alt="" className="img-fluid image-size" />
        </div>
        <div class='fw-bolder d-flex justify-content-center'>
          Hey , Here is  your AI Finder!
        </div>
        <div class='fw-light d-flex justify-content-center fs-5'>
          Let's  find some information about the world of AI.
        </div>
      </div>
    </div>
  );
};

export default Content;
