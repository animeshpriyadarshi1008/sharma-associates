import React, { Component } from "react";
import carrerImg from "../../assets/carrerNew.jpg";
import { Jumbotron } from "react-bootstrap";
import { images } from "../../utils";

import { MDBIcon } from "mdbreact";
import DropZone from "../../components/dropZone/dropZone";
import ReactGA from "react-ga";

ReactGA.pageview(window.location.pathname + window.location.search);

export default class Career extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div
        className="parentContainer"
        style={{
          backgroundImage: `url(${carrerImg})`,
          overflowY: "scroll",
        }}
      >
        <div className="childContainer">
          <img
            src={images.ApplyJob}
            alt="About company"
            title="About company"
            className="img-fluid "
          ></img>
          <div className="subContainer text-center">
            <div className="container-fluid">
              <h2 class="fontBold  blueIcon">
                Apply Now @ Sharma And Associates
              </h2>
            </div>
          </div>
          <br />
          <Jumbotron>
            <p>
              Upload Your resume now OR email us at &nbsp;
              <span className="  h-100 blueIcon boldText">
                <MDBIcon icon="envelope" className="pr-2" />
                <a href="mailto:contact@sharmaassociate.co.in">
                  <span className="blueIcon">
                    contact@sharmaassociate.co.in
                  </span>
                </a>
              </span>
            </p>

            <p>
              We have an inside track on the best banking and financial services
              jobs available. Whether you specialise is investment management
              jobs, private equity jobs, boutique fund raiser or advisor jobs,
              hedge fund jobs or jobs in retail banks.
            </p>

            <p>
              <DropZone />
            </p>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
