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
            src={images.tevReport}
            alt="tevReport"
            title="tevReport"
            className="img-fluid"
          ></img>
          <div className="subContainer text-center">
            <div className="container-fluid">
              <h2 class="fontBold  blueIcon">
                {" "}
                Techno Economic Viability (TEV){" "}
              </h2>
            </div>
          </div>
          <Jumbotron>
            <p>
              Techno Economic Viability (TEV) study of a project encompasses the
              evaluation of a project for evaluating the technical and financial
              information about the project, with relevant data about its
              technological feasibility and economic viability, into one or a
              few criteria on the basis of which the project is recommended for
              selection, modification or rejection.
            </p>
            <p>
              Techno-Economic Viability (TEV) Study evaluation is to assist
              lenders to take a view on the acceptability of the degree of risk
              involved in a project.
            </p>

            <p>
              It takes into account an analysis of technological risk, market
              risk, regulatory risk, financial risk, etc. A critical evaluation
              of these parameters is essential for a meaningful TEV study.
            </p>
            <p>&nbsp;</p>
            <h5 className="blueIcon boldText">Technical feasibility</h5>
            <ul class="fa-ul">
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Assessment of the available land in use for the project.
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Assessment of suitability and availability of infrastructure
                available for the activity of the company.
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Availability of skilled manpower.
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Assessment of existing capacity.
              </li>
            </ul>
            <p>&nbsp;</p>
            <h5 className="blueIcon boldText">Market potential</h5>
            <ul class="fa-ul">
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Present and future market scenario.
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Assessment of marketing infrastructure available.
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                The demand-supply analysis.
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Competition in field.
              </li>
            </ul>
            <p>&nbsp;</p>
            <h5 className="blueIcon boldText">Financial Viability</h5>
            <ul class="fa-ul">
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Assessment of future cash flows and profitability of the
                project.
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Financial viability of the unit based on the financial
                projections, profitability (income and costs), cash flow, IRR,
                DSCR, DP, MPBF etc.
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Conduct sensitivity analysis of the project.
              </li>
            </ul>
            <p>&nbsp;</p>
            <h5 className="blueIcon boldText">Management Capabilities</h5>
            <ul class="fa-ul">
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Assessment of management capabilities.
              </li>
            </ul>
            <p>&nbsp;</p>
            <h5 className="blueIcon boldText">SWOT Analysis</h5>
            <ul class="fa-ul">
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                SWOT analysis has been carried out to identify the key internal
                and external factors which are important for success of the
                project.
              </li>
            </ul>
            <p>&nbsp;</p>

            <h5 className="blueIcon boldText">Why Choose S & A</h5>
            <ul class="fa-ul">
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Empanelled with various Government Bodies/Authorities.
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Advisors/Consultants to Government of India on various projects.
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Associated with various industry chambers.
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Experienced teams of PSU & Government Sector Senior employees.
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Sectorial experts including Lawyers, Engineers, Technocrats,
                Architects, Chartered Accountants, Company Secretaries & MBAs.
              </li>
            </ul>
            <p>&nbsp;</p>
            <h5 className="blueIcon boldText">Experience</h5>
            <p>
              The firm has experience in various sectors including the
              following:
            </p>
            <ul class="fa-ul">
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Power
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Hydro
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Real Estate
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Hospitality
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Cold Chain
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Textiles
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Education
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Food Processing
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Spa & Resort
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Hotels
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Hospitals
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Dying & Printing
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Menthol
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Non-woven Interlining
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Snacks Manufacturing
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                OTR Tires Manufacturing
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Milk Processing
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Solar Power Project
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                CNG And PNG Gas Distribution Network
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Sugar
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Refractory Bricks and Monolithic
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Brewery
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Decorative and Industrial Laminates
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Healthcare
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Hypochlorite Calcium Chemical
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Manufacturing
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Renewable
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Highway
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Steel
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Auto Ancillary
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Transmission
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Disinvestment
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Funding
              </li>
            </ul>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
