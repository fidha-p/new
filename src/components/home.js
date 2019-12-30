import React, { useState } from "react";
import "../styles/home.css";
import imageUrl from "../assets/images/bg-002.png";
import Nav from "./Nav/Nav";
import "../styles/global.css";
import UpcomingEvents from "./upcomingEvents.js";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
      <div>
        <Nav sticky="false" transp="true" />
        <div className="row main-image center-flex">
          <div className="col l6">
            <div className="container" style={{marginLeft:100}}>
              <h1> we are </h1>
              <h1 className="main-title ">Web Enthusiasts` </h1>
              <h1 className="main-title ">Club </h1>
              <h2 className="main-text">NITK</h2>
            </div>
          </div>
          <div className="col l6">
            <img className="bg-image" width="700" src={imageUrl} />
          </div>
        </div>
        <UpcomingEvents></UpcomingEvents>
      </div>
      <div className="container">
      <h1>What we do</h1>
        <div className="row">
          <div className="col l4">
            <i class="fa fa-envelope-open" aria-hidden="true"></i>
            <p>Talks & Workshops</p>
          </div>
          <div className="col l4">
            <i class="fa fa-envelope-open" aria-hidden="true"></i>
            <p>Hackathons</p>
          </div>
          <div className="col l4">
            <i class="fa fa-envelope-open" aria-hidden="true"></i>
            <p>Mentorship</p>
          </div>
          <div className="col l4">
            <i class="far fa-file-code"></i>
            <p>Projects</p>
          </div>
         </div>
      </div>
      </div>
    );
  }
}

export default Home;
