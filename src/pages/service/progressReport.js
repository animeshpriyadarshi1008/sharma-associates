import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { images } from "../../utils";

import ReactGA from "react-ga";
ReactGA.pageview(window.location.pathname + window.location.search);

export default class Service extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div
        className="parentContainer"
        style={{
          overflowY: "scroll",
        }}
      >
        <div className="childContainer">
          <img
            src={images.progressReport}
            alt="progressReport"
            title="progressReport"
            className="img-fluid"
          ></img>
          <div className="subContainer text-center">
            <div className="container-fluid">
              <h2 class="fontBold  blueIcon">Progress Report</h2>
            </div>
          </div>
          <Jumbotron>
            <p>
              Sharma & Associates also prepares the progress report in
              accordance with the specific need of the banks as per their
              requirements and guidelines.
            </p>
            <p>
              In order to measure the progress of the project our professionals
              visit the site, make an examination of documentary evidence
              provided by client, discuss the matter with management and seek
              further clarification if required and then prepare and furnish a
              report on progress of the project.
            </p>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
