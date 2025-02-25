import React, { Component } from "react";
import carrerImg from "../../assets/carrerNew.jpg";
import { Jumbotron } from "react-bootstrap";
import { images } from "../../utils";
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
            src={images.careerClipArt}
            alt="About company"
            title="About company"
            className="img-fluid "
          ></img>
          <div className="subContainer text-center">
            <div className="container-fluid">
              <h2 class="fontBold  blueIcon">Why Sharma And Associates</h2>
            </div>
          </div>

          <Jumbotron>
            <p>
              Sharma & Associates attracts, develops and retains outstanding
              professionals at all levels of the organization who contribute to
              our culture of teamwork, collegiality and innovation. We invest
              substantial time and resources to recruiting, training, staffing,
              reviewing, and mentoring of our professionals to prepare them for
              future leadership roles.
            </p>
            <p>
              At Sharma & Associates, you will find challenging opportunities in
              an environment that recognizes and rewards exceptional
              performance. We seek experienced individuals capable of delivering
              a wide range of value-added services to our clients around the
              world, while helping them to confront today’s critical issues head
              on. Sharma &　Associates is a part of a global network of
              professional services firms, with a consistent standard of service
              delivery and commitment to quality.
            </p>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
