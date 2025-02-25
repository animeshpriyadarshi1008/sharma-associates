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
            src={images.FinancialServices}
            alt="FinancialServices"
            title="FinancialServices"
            className="img-fluid"
          ></img>
          <div className="subContainer text-center">
            <div className="container-fluid">
              <h2 class="fontBold  blueIcon">Financial Advisory Services</h2>
            </div>
          </div>
          <Jumbotron>
            <p>
              Sharma & Associates is one of the top leading advisory firm in the
              field of advisory on Highways, Railways, Power, Urban Development,
              Renewables, Manufacturing, Steel, Auto Ancilliary, Strategic Sale
              and Leasing and all other sectors.
            </p>
            <p>&nbsp;</p>
            <h5 className="blueIcon boldText">What We Can Do For You</h5>
            <ul class="fa-ul">
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Merger & Acquisition Advisory
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Sale of Business
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Leasing of Assets
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Services including Bid Process Management
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Financial Analysis & Planning
              </li>
            </ul>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
