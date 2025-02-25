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
            src={images.valuation}
            alt="valuation"
            title="valuation"
            className="img-fluid"
          ></img>
          <div className="subContainer text-center">
            <div className="container-fluid">
              <h2 class="fontBold  blueIcon"> Valuation</h2>
            </div>
          </div>
          <Jumbotron>
            <p>
              Sharma & Associates is registered as an approved valuer. We have a
              dynamic team of highly qualified civil & mechanical engineers,
              MBA’s, Chartered Accountants who are here to serve you for
              valuation of your property or any other connected engineering
              services as listed below, or to buy, sell & leasing- residential,
              industrial and commercial property.
            </p>

            <p>
              Our firm is group of professionals with in-depth industrial
              experience in various faculties put together most detailed and
              analysed advisory, processing and consultancy services and
              solutions for a varied bunch of valuation, estimation and
              management consultancy requirements of domestic and international
              clients. We serve our clients as Empanelled Valuers, Project
              monitoring consultants, Estimator of projects, commercial &
              residential properties, valuers of nationalized banks, government
              approved valuers, valuers of immovable asssets, civil
              engineering,mechanical engineering & valuers of corporate houses.
            </p>

            <p>
              The core aim of our company has always been to render proper and
              true valuation reports for the purpose required after careful
              study of the case by way of application of authorized and most
              suitable method of valuation and to conduct real estate
              transactions in such a way as to develop long-term relationships
              to the benefit of our valued clients. Our firm can deliver
              valuation in any part of the country.
            </p>
            <p>&nbsp;</p>
            <h5 className="blueIcon boldText">Why Choose S & A</h5>
            <ul class="fa-ul">
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Closed many valuations in various sectors.
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                With over 20 years of combined experience we at S & A have the
                knowledge and expertise to serve clients.
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Dedicated team of sector specialists.
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Empanelled with various PSU Banks and Financial Institutions and
                other government departments.
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Pan India presence with offices across the country.
              </li>
            </ul>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
