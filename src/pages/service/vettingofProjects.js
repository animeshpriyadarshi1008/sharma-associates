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
            src={images.vettingOfProject}
            alt="vettingOfProject"
            title="vettingOfProject"
            className="img-fluid"
          ></img>
          <div className="subContainer text-center">
            <div className="container-fluid">
              <h2 class="fontBold  blueIcon">
                {" "}
                Preparation & Vetting of Cost of Projects
              </h2>
            </div>
          </div>
          <Jumbotron>
            <p>
              We pride ourselves on offering value-engineered solutions to fit
              our project requirements. From being involved in cost estimates,
              to revised cost estimates our civil and structural engineers are
              always at hand to scrutinise and monitor every detail in the
              following manner:
            </p>
            <ul class="fa-ul">
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Examination of the proposal and seeking clarifications from
                management, if any .
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Vetting of Quantity / Price variation .
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Vetting of Time Overrun.
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Preparation of brief note.
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Finalisation & Submission of report duly vetted by us.
              </li>
            </ul>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
