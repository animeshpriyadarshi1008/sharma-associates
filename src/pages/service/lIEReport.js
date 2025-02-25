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
            src={images.lieReport}
            alt="lieReport"
            title="lieReport"
            className="img-fluid"
          ></img>
          <div className="subContainer text-center">
            <div className="container-fluid">
              <h2 class="fontBold  blueIcon">
                {" "}
                Lender’s Independent Engineer’s (LIE) Report
              </h2>
            </div>
          </div>
          <Jumbotron>
            <p>
              Sharma Associates provides Lender’s independent engineer’s report
              (LIE) services to the Banks and Investors. Our team comprises of
              sectoral experts, capable of providing status report of projects,
              review and assessment including :
            </p>
            <p>
              <ul class="fa-ul">
                <li>
                  <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                  Technical design – suitability, competitiveness, reliability,
                  operating lifetime
                </li>
                <li>
                  <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                  Completion risk – interface risk permitting status envisaged
                  time table site visit
                </li>
                <li>
                  <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                  Operational risk – project contracts/parties, environmental
                  impact, insurance coverage
                </li>
                <li>
                  <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                  Estimated budget for operation and maintenance – reflection in
                  the financial model{" "}
                </li>
              </ul>
            </p>
            <p>&nbsp;</p>
            <p>
              LIE’s Technical Assessment is executed based on the information
              provided by the Company/ Lenders, management discussion and site
              visit. The technical assessment of the project is conducted
              considering the suggested/ confirmed capacity, vetting of
              estimated capital expenditure (Hard Costs), statutory requirements
              required and status and future expansion plans. Contracts placed
              with vendors /suppliers are also reviewed and salient observations
              and critical points are mentioned in the Phase I report.
            </p>

            <h5 className="blueIcon boldText">
              Lender’s Independent Engineer’s (LIE)
            </h5>
            <p>
              Lender’s Independent Engineer’s (LIE) Report refers to the
              technical due diligence report prepared by an Independent
              Engineer, also known as the Lender's Engineer and typically
              selected by the lender. Independent Engineer reviews the technical
              inputs (i.e. output, efficiency, O&M expenses, availability, etc.)
              to the financial model used by the lender and the developer/owner
              to justify the financing of the project.
            </p>
            <p>&nbsp;</p>
            <h5 className="blueIcon boldText">
              The Scope of the study includes
            </h5>
            <ul class="fa-ul">
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Review/ Vetting of the cost of the Project and comment on its
                reasonableness.
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Vetting of contracts for various works awarded by the Company
                including liquidated damages and performance guarantees therein.
                LE will also examine the reasonability of these contract prices.
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Review the necessary approvals for the construction, adequacy of
                clearances and any consent, license, approval, registration,
                permit or other authorization of any nature which is required to
                be granted by any statutory or regulatory authority or any third
                party for the construction, operation and maintenance of the
                project.
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Assessment of existing capacity.
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
