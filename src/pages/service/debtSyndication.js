import React, { Component } from "react";
import { Jumbotron, Table } from "react-bootstrap";
import { images } from "../../utils";
import Data from "./debtData.json";

import ReactGA from "react-ga";
ReactGA.pageview(window.location.pathname + window.location.search);

export default class Service extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  showTableBody = () => {
    return Data
      ? Data.Jobs.map((i) => {
          return (
            <tr className="centerText">
              <td>{i.sr}</td>
              <td>{i.bank}</td>
            </tr>
          );
        })
      : null;
  };

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
            src={images.DebtSyndication}
            alt="debtSyndication"
            title="debtSyndication"
            className="img-fluid"
          />
          <div className="subContainer text-center">
            <div className="container-fluid">
              <h2 class="fontBold  blueIcon">Debt Syndication</h2>
            </div>
          </div>
          <Jumbotron>
            <p>
              Sharma & Associates deals with SMEs, mid-corporate and large
              corporate clients, and aims to provide customised financing
              solutions to meet their working capital and growth finance needs.
              We understand that businesses depend on efficient utilization of
              funds and a lot depends on a well- organised funds flow system to
              keep businesses running.
            </p>

            <p>
              Sharma & Associates is one of the prominent entity in the debt
              syndication market in India with strong relationships with
              financial institutions, banks and NBFCs.We offer assistance in the
              areas of project finance, working capital and acquisition
              finance.Firm is empanelled in the following banks:
            </p>
            <p>&nbsp;</p>
            <Table responsive striped bordered hover>
              <thead style={{ fontWeight: "bold", textAlign: "center" }}>
                <tr>
                  <th>Sr. No.</th>
                  <th>Name of Bank/Institutions</th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: "white" }}>
                {this.showTableBody()}
              </tbody>
            </Table>
            <h5 className="blueIcon boldText">
              We offer the following services to clients in raising debt
            </h5>
            <ul class="fa-ul">
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Project Finance
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Working Capital Finance
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Equipment Loans
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Structured Financing
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Acquisition Funding
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Promoter Funding
              </li>
            </ul>
            <p>&nbsp;</p>
            <h5 className="blueIcon boldText">
              Why Choose Sharma & Associates?
            </h5>
            <ul class="fa-ul">
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Experienced professionals having 30+ years of experience in
                advising and serving clients in debt syndication and structured
                corporate finance
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Expertise in arranging debt at competitive rates
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Thorough understanding of the debt syndication process
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Structured Financing
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Sound understanding of requirement of lenders
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Comprehensive knowledge of lending norms
              </li>
            </ul>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
