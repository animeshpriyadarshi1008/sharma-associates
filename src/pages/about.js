import React, { Component } from "react";
import Chart from "../components/chart/charts";
import { images } from "../utils";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";
ReactGA.pageview(window.location.pathname + window.location.search);




export default class About extends Component {
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
        <Helmet>
                <meta charSet="utf-8" />
                <title> Sharma Associates About </title>
                <meta name="keywords" content="TEV Study in Delhi,
TEV study in Noida,
TEV Study in NCR,
TEV Study in India,
Where TEV study can be done around me,
Which company do TEV study,
what is Techno Economic Viability,
Techno Economic Viability  study in Delhi,
Techno Economic Viability  best,
Techno Economic Viability  cheap,
Techno Economic Viability  experience,
Techno Economic Viability  around me,
Techno Economic Viability  near by,
From where i can get LIE Report,
What is LIE Report,
Company to assist LIE,
Company to help LIE,
From where i can get Lenders Independent Engineers  Report in Delhi,
Lenders Independent Engineers  Report in Delhi,
Lenders Independent Engineers  Report best,
Lenders Independent Engineers  Report Cheap,
Lenders Independent Engineers  Report experienced,
Lenders Independent Engineers  Report around me,
Lenders Independent Engineers  Report near by,
LIE Report in Delhi,
LIE Report  in Noida,
LIE Report  in NCR,
LIE Report  in India,
Certificate for Chartered Engineer,
Chartered Engineer Certification,
where to get Chartered Engineer Certification,
Chartered Engineer Certification around me,
Chartered Engineer Certification in Delhi,
Best Company to get Chartered Engineer Certificate,
how to become chartered engineer in india,
how to get chartered engineer certification,
can i become chartered engineer,
chartered engineer certification company,
best company to give chartered engineer certification,
Which company give chartered engineer certification,
Chartered Engineer certification cost,
Chartered Engineer Certification requirement,
Chartered Engineer Certification need,
Financial Advisory Services,
Financial Advisory Service in Delhi,
Financial Advisory Service around me,
Financial Advisory Services in NCR,
Financial Advisory Services near by,
Experienced financial advisory service in delhi,
Company to assist loan,
how to get more loans,
how to get a loan for big company,
how to get a loan for major company,
how to get loan in delhi,
how to get increased loan amount,
get more loan,
where i can get loan to setup my company,
which company can assist to get loan,
Sales of business,
Leasing of Assets" />
            </Helmet>
        <div className="childContainer">
          <img
            src={images.AboutUs}
            alt="About company"
            title="About company"
            className="img-fluid"
          ></img>
          <div className="subContainer text-center">
            <div className="container-fluid">
              <h2 class="fontBold  blueIcon">About Us</h2>
            </div>
          </div>
          <p>&nbsp;</p>
          <p>
            Sharma & Associates is a Financial Consultancy Firm serving
            customers since past two decades.Sharma & Associates has a team of
            qualified,dynamic and dedicated Professionals who have more then 21+
            years experience in Banking and Finanicial Field.
          </p>
          <p>
            S&A is associated with all premium banking and financial
            instituations and is acting as LIE, Conducting TEV,
            Valuation, Finanical Aid, Providing Certificate of Chartered
            Engineer, Empanelled Valuers, Project monitoring consultants and
            providing other services in the financial field. We advise clients
            in all aspects of finance and banking having years of expierence in
            the areas of debt, equity.
          </p>

          <p>
            Sharma & Associates also act as Estimator of projects, commercial &
            residential properties, valuers of nationalized banks, government
            approved valuers, valuers of immovable asssets, civil engineering,
            mechanical engineering & valuers of corporate houses. The Firm is
            also empanelled with the Office of The Principal Commissioner of
            Customs (Import) for Valuation of Second hand/ Old/ Used Imported
            Machinery Goods.
          </p>

          <p>
            The correspondence and registered office of the firm is Headquatered
            in Kaushambi, Ghaziabad (U.P.) with branches across all over the
            Country.
          </p>

          <p>&nbsp;</p>
          <h3 className="blueIcon">History</h3>
          <Chart />
          <p>&nbsp;</p>
          <h3 className="blueIcon">Our Strength</h3>
          <div>
            <ul class="fa-ul">
              <li>
                <i class="fas fa-li  fa-arrow-circle-right blueArrow"></i>
                Experienced professionals having 21+ years of experience in
                advising and serving clients in debt syndication and structured
                corporate finance.
              </li>
              <li>
                <i class="fas fa-li  fa-arrow-circle-right blueArrow"></i>
                Sectorial experts including Lawyers, Engineers, Technocrats,
                Architects, Chartered Accountants, Company Secretaries & MBAs.
              </li>
              <li>
                <i class="fas fa-li  fa-arrow-circle-right blueArrow"></i>
                Expertise in arranging debt at competitive rates.
              </li>
              <li>
                <i class="fas fa-li  fa-arrow-circle-right blueArrow"></i>
                Empanelled with various Government Bodies/Authorities.
              </li>
              <li>
                <i class="fas fa-li  fa-arrow-circle-right blueArrow"></i>
                Empanelled with various PSU Banks and Financial Institutions and
                other government departments.
              </li>
              <li>
                <i class="fas fa-li  fa-arrow-circle-right blueArrow"></i>
                Pan India presence with offices in Bhopal, Surat,
                Mumbai, Ahmadabad, Bareilly, Nagpur and Jaipur.
              </li>
            </ul>
          </div>
          <h4>&nbsp;</h4>

          <h3 className="blueIcon">Principal Services</h3>
          <div>
            <ul class="fa-ul">
              <li>
                <i class="fas fa-li  fa-arrow-circle-right blueArrow"></i>
                Providing CE Certificate.
              </li>
              <li>
                <i class="fas fa-li  fa-arrow-circle-right blueArrow"></i>
                Preparation of detailed Project Reports.
              </li>
              <li>
                <i class="fas fa-li  fa-arrow-circle-right blueArrow"></i>
                Carrying out Valuation and Asset Management Reports.
              </li>
              <li>
                <i class="fas fa-li  fa-arrow-circle-right blueArrow"></i>
                Carrying out Techno Economic Feasibility Studies/ Viability
                Reports.
              </li>
              <li>
                <i class="fas fa-li  fa-arrow-circle-right blueArrow"></i> Debt
                Syndication both Short Term and Long Term.
              </li>
              <li>
                <i class="fas fa-li  fa-arrow-circle-right blueArrow"></i>
                Lender Independent Engineer Services.
              </li>
              <li>
                <i class="fas fa-li  fa-arrow-circle-right blueArrow"></i>
                Carrying out technical and financial appraisals.
              </li>
              <li>
                <i class="fas fa-li  fa-arrow-circle-right blueArrow"></i>
                Study of sick and potentially sick units and devising revival
                packages thereto.
              </li>
              <li>
                <i class="fas fa-li  fa-arrow-circle-right blueArrow"></i>
                Carrying out stock audits.{" "}
              </li>
              <li>
                <i class="fas fa-li  fa-arrow-circle-right blueArrow"></i>
                Carry out proposals for Merger and Acquisition.
              </li>
            </ul>
          </div>
          <h4>&nbsp;</h4>

          <h3 className="blueIcon">Achievements</h3>
          <div>
            <ul class="fa-ul">
              <li>
                <i class="fas fa-li  fa-arrow-circle-right blueArrow"></i>
                Completed more than 100+ transactions in various sectors across
                industries.
              </li>
              <li>
                <i class="fas fa-li  fa-arrow-circle-right blueArrow"></i>
                Successfully advised on transactions within and outside India.
              </li>
              <li>
                <i class="fas fa-li  fa-arrow-circle-right blueArrow"></i>
                Industry expertise, service offerings and human capital. We
                implement our growth plans in a way that Sharma&Associates can
                consistently maintain high standards of client service and outcomes.
              </li>
              <li>
                <i class="fas fa-li  fa-arrow-circle-right blueArrow"></i>
                Actively running several cross border and domestic transactions
                in sectors like Logistics, Consumer Goods, Agri, Packaging,
                Auto, Healthcare, Real Estate, Renewable Energy, Infra etc.
              </li>
            </ul>
            <p>&nbsp;</p>
            <h3 className="blueIcon">Why Choose Sharma & Associates</h3>
            <div>
              <ul class="fa-ul">
                <li>
                  <i class="fas fa-li  fa-arrow-circle-right blueArrow"></i>
                  Empanelled with various Government Bodies/Authorities.
                </li>
                <li>
                  <i class="fas fa-li  fa-arrow-circle-right blueArrow"></i>
                  Advisors/Consultants to Government of India on various
                  projects.
                </li>
                <li>
                  <i class="fas fa-li  fa-arrow-circle-right blueArrow"></i>
                  Associated with various industry chambers.
                </li>
                <li>
                  <i class="fas fa-li  fa-arrow-circle-right blueArrow"></i>
                  Strong relationships with Banks and Financial Institutions.
                </li>
                <li>
                  <i class="fas fa-li  fa-arrow-circle-right blueArrow"></i>
                  Experienced teams of PSU & Government Sector Senior employees.
                </li>
                <li>
                  <i class="fas fa-li  fa-arrow-circle-right blueArrow"></i>
                  Sectorial experts including Lawyers, Engineers, Technocrats,
                  Architects, Chartered Accountants, Company Secretaries & MBAs.
                </li>
                <li>
                  <i class="fas fa-li  fa-arrow-circle-right blueArrow"></i>
                  Quick closure of complex and strategic transactions.
                </li>
              </ul>
            </div>
            <div className="EmptyDiv"></div>
          </div>
        </div>
      </div>
    );
  }
}
