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
            src={images.marketResearch}
            alt="marketResearch"
            title="marketResearch"
            className="img-fluid"
          ></img>
          <div className="subContainer text-center">
            <div className="container-fluid">
              <h2 class="fontBold  blueIcon">Market Research</h2>
            </div>
          </div>
          <Jumbotron>
            <p>
              No matter how small or big your business is, no matter the product
              you are introducing has never been introduced before or there are
              already a lot of competitors for you in the line, no matter you
              are beginning with a spa service or a teaching one, your business
              needs marketing research before anything else.
            </p>
            <p>
              Marketing research is a large process in which the producers,
              indirect and direct customers and users ensure to get linked
              together with the help of information that’s used to learn various
              marketing opportunities and threats. With the help of the right
              kind of marketing search teams, our company can learn about its
              SWOT – Strengths, Weaknesses, Opportunities and Threats.
            </p>
            <p>&nbsp;</p>
            <h5 className="blueIcon boldText">
              Our marketing research team can help you with
            </h5>
            <ul class="fa-ul">
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Monitoring your performance in the market.
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Learning how your product can change the life and lifestyle of
                your users.
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Explain where you product can get an increased or boosted
                demand, and why.
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Evaluate all the actions that have been taken to boost the
                marketing of your product, services or business as a whole.
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Define the opportunities that can be grabbed by your business.
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Learn ways with the help of which the threats for your business
                can be avoided.
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Solve all kinds of marketing problems.
              </li>
              <li>
                <i class="fas fa-li  fa-angle-double-right  blueArrow"></i>
                Connect you with customers in a much better and easier way.
              </li>
            </ul>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
