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
            src={images.revivalPackage}
            alt="revivalPackage"
            title="revivalPackage"
            className="img-fluid"
          ></img>
          <div className="subContainer text-center">
            <div className="container-fluid">
              <h2 class="fontBold  blueIcon">
                {" "}
                Revival Packages to Sick Units
              </h2>
            </div>
          </div>
          <Jumbotron>
            <p>
              Sharma & Associates has strong relationships with Banks, financial
              institutions and NBFCs. The firm is engaged in conducting study of
              sick and potentially sick units and devising revival packages
              thereto.
            </p>
            <p>
              The firm has a pool of experienced professionals, Engineers,
              Chartered Accountants, MBAs, LLBs who are engaged in the services
              for several years and with experience in different industries in
              both government and private sector.
            </p>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
