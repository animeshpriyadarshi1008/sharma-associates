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
            src={images.DetailedProjectReport}
            alt="detailedProjectReport"
            title="detailedProjectReport"
            className="img-fluid"
          ></img>
          <div className="subContainer text-center">
            <div className="container-fluid">
              <h2 class="fontBold  blueIcon">Detailed Project Report</h2>
            </div>
          </div>
          <Jumbotron>
            <h4 className="blueIcon boldText"></h4>
            <p>
              A Detailed Project Report (DPR) is a vital document for any
              business that contains information pertaining to its promoters,
              business model, operations, past and projected financial
              performance. DPR is very essential as it serves as a roadmap for
              the business and provides information in an understandable format
              to outsiders wanting to know more about the business. A DPR is
              used for raising capital for a business, and for credit analysis.
              Banks and financial institutions gain an insight into the business
              through the DPR for making credit decisions.
            </p>
            <p>
              S & A has a team of professionals with extensive experience in
              preparing Detailed Project Report.
            </p>
            <h5 className="blueIcon boldText">
              A well drafted DPR will contain details about
            </h5>
            <ul class="fa-ul">
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                The promoters
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Infrastructure information
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Human capital requirement
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Business model
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Industry outlook
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                SWOT analysis
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Past financial performance
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Projected financial performance
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Key financial indicators
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                CMA Report and any other relevant information
              </li>
            </ul>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
