import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { AiFillHome } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const onclick=()=>{
  window.scrollTo(0,50)
}
const github = () => {
  window.open("https://github.com/Vengatramanan123");
}
const LinkedIn=()=>{
  window.open("https://www.linkedin.com/in/vengat-ramanan-5989b1192")
}

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top custom-navbar-height shadow-sm">
      <div className="container-fluid">
        <span className="fw-bolder fs-4 fonts ms-4">Web-Reso</span>
        <div className=" row d-flex me-4">
          <div class=" row col-lg-12">
            <div class="col-lg-12">
              <AiFillHome class="fs-4"title="Home" onClick={onclick} style={{cursor:'pointer'}}/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <BsGithub class="fs-4" title="GitHub" onClick={github} style={{cursor:'pointer'}}/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <BsLinkedin class="fs-4" title="LinkedIn" onClick={LinkedIn} style={{cursor:'pointer'}}/>
            </div>
            <div class="col-lg-6">
             
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
