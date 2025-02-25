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
            src={images.stockAudit}
            alt="stockAudit"
            title="stockAudit"
            className="img-fluid"
          ></img>
          <div className="subContainer text-center">
            <div className="container-fluid">
              <h2 class="fontBold  blueIcon"> Stock Audits</h2>
            </div>
          </div>
          <Jumbotron>
            <h4 className="blueIcon boldText">Stock Audits</h4>
            <p>
              Assets e.g. Stock and physical assets such as raw materials are
              important real assets and need repeat watch. As a large number of
              companies are operating across the borders through multiple
              locations, some even with various channel partners, ensuring this
              watch is challenge. We offer our focused services to companies to
              keep them assured of their physical assets.
            </p>
            <p>
              Our special Stock Audit team follows a strict audit and reporting
              mechanism that strives for best and makes sure that each minute
              aspect of stock is evaluated and findings are reported in a
              transparent manner to levels concerned. Stock audits are also
              undertaken for banks and other financial institutions which have
              extended credit to businesses against physical goods and assets.
            </p>
            <p>
              We have big enough network throughout India for quick and
              simultaneous audits at multiple locations. We take full care to
              provide you with comprehensive and most accurate figures of
              inventories. During this audit, all the records of purchase, sale
              and movements of stock is taken carefully.
            </p>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
