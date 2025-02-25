import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { images } from "../../utils";

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
          <img src={images.CE} alt="CE" title="CE" className="img-fluid"></img>
          <Jumbotron>
            <h4 className="blueIcon boldText">
              Certificate for Chartered Engineer
            </h4>
            <p>
              Sharma & Associates is a trusted Chartered Engineers certificate
              provider that can help you obtain a CE Certificate.
            </p>

            <p>
              We provide certifications for followings business aspects:
              installation certificate, EPCG license closure, second hand plant
              & machinery, Work in-progress, Inventory, Pre-shipment inspection,
              Import of plant & machinery, cold chain projects, Certification of
              Construction Cost and Cost of Plant & Equipment, Civil & Equipment
              Certification, Certification of imported indigenous machinery for
              setting up solar power plant and bio mass plant, tool life,
              textile park, mega food park scheme and utilisation purpose. We
              have a huge list of registered Chartered Engineers associated with
              us, who carry out a thorough inspection and issue comprehensive
              reports in the required format for the Chartered Engineer
              Certificate as per the requirements of customs, banks and
              financial institutions.
            </p>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
