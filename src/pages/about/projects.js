import React, { Component } from "react";
import { Jumbotron, Table } from "react-bootstrap";
import { images } from "../../utils";
import { CardDeck, Card } from "react-bootstrap";
import ReactGA from "react-ga";
import Data from "./projectsData.json";

ReactGA.pageview(window.location.pathname + window.location.search);

export default class Projects extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  showTableBody = () => {
    return Data
      ? Data.projects.map((i) => {
          return (
            <tr className="centerText">
              <td>{i.sr}</td>
              <td>{i.prj}</td>
              <td>{i.bank}</td>
              <td>{i.cost}</td>
            </tr>
          );
        })
      : null;
  };

  showHospitalityTableBody = () => {
    return Data
      ? Data.hospitality.map((i) => {
          return (
            <tr className="centerText">
              <td>{i.sr}</td>
              <td>{i.prj}</td>
              <td>{i.bank}</td>
              <td>{i.cost}</td>
            </tr>
          );
        })
      : null;
  };

  showManufacTableBody = () => {
    return Data
      ? Data.manufacture.map((i) => {
          return (
            <tr className="centerText">
              <td>{i.sr}</td>
              <td>{i.prj}</td>
              <td>{i.type}</td>
              <td>{i.bank}</td>
              <td>{i.cost}</td>
            </tr>
          );
        })
      : null;
  };

  showTurnkeyBody = () => {
    return Data
      ? Data.trunkey.map((i) => {
          return (
            <tr className="centerText">
              <td>{i.sr}</td>
              <td>{i.borrower}</td>
              <td>{i.ins}</td>
              <td>{i.prj}</td>
            </tr>
          );
        })
      : null;
  };

  showLIETableBody = () => {
    return Data
      ? Data.LiePrj.map((i) => {
          return (
            <tr className="centerText">
              <td>{i.sr}</td>
              <td>{i.prj}</td>
              <td>{i.type}</td>
              <td>{i.bank}</td>
              <td>{i.cost}</td>
            </tr>
          );
        })
      : null;
  };

  showValuationTableBody = () => {
    return Data
      ? Data.valuation.map((i) => {
          return (
            <tr className="centerText">
              <td>{i.sr}</td>
              <td>{i.prj}</td>
              <td>{i.type}</td>
              <td>{i.bank}</td>
              <td>{i.cost}</td>
            </tr>
          );
        })
      : null;
  };

  showProgressReportBody = () => {
    return Data
      ? Data.progressReport.map((i) => {
          return (
            <tr className="centerText">
              <td>{i.sr}</td>
              <td>{i.borrower}</td>
              <td>{i.ins}</td>
              <td>{i.bank}</td>
            </tr>
          );
        })
      : null;
  };

  showTEV = () => {
    return (
      <CardDeck className="marginTop">
        <Card border="dark">
          <Card.Body>
            <Card.Title>
              <span className="boldText blueIcon">
                TECHNO-ECONOMIC VIABILITY (TEV) PROJECTS UNDERTAKEN
              </span>
              <p>&nbsp;</p>
              <p>
                Sharma & Associates has carried out Techno Economic Feasibility
                of the number of projects for various Banks. Some of the Project
                appraisal works undertaken in last few years are as under-
              </p>
            </Card.Title>
            <p className="marginTop10">
              <ul class="fa-ul">
                <li>
                  <i class="fas fa-li  fa-arrow-circle-right blueArrow"></i>
                  Real Estate Projects:
                </li>
                <p>&nbsp;</p>
                <Table responsive striped bordered hover>
                  <thead style={{ fontWeight: "bold", textAlign: "center" }}>
                    <tr>
                      <th>Sr. No.</th>
                      <th>Borrower/Project</th>
                      <th>Bank Name</th>
                      <th>Project Cost (Rs. in Crores)</th>
                    </tr>
                  </thead>
                  <tbody style={{ backgroundColor: "white" }}>
                    {this.showTableBody()}
                  </tbody>
                </Table>
                <p>&nbsp;</p>
                <li>
                  <i class="fas fa-li  fa-arrow-circle-right blueArrow"></i>
                  Hospitality Industry Projects:
                </li>
                <p>&nbsp;</p>

                <Table responsive striped bordered hover>
                  <thead style={{ fontWeight: "bold", textAlign: "center" }}>
                    <tr>
                      <th>Sr. No.</th>
                      <th>Borrower/Project</th>
                      <th>Bank Name</th>
                      <th>Project Cost (Rs. in Crores)</th>
                    </tr>
                  </thead>
                  <tbody style={{ backgroundColor: "white" }}>
                    {this.showHospitalityTableBody()}
                  </tbody>
                </Table>
                <p>&nbsp;</p>
                <li>
                  <i class="fas fa-li  fa-arrow-circle-right blueArrow"></i>
                  Manufacturing/ other Industrial Projects:
                </li>
                <p>&nbsp;</p>
                <Table responsive striped bordered hover>
                  <thead style={{ fontWeight: "bold", textAlign: "center" }}>
                    <tr>
                      <th>Sr. No.</th>
                      <th>Borrower/Project</th>
                      <th>Industry</th>
                      <th>Bank Name</th>
                      <th>Project Cost (Rs. in Crores)</th>
                    </tr>
                  </thead>
                  <tbody style={{ backgroundColor: "white" }}>
                    {this.showManufacTableBody()}
                  </tbody>
                </Table>
              </ul>
            </p>
          </Card.Body>
        </Card>
      </CardDeck>
    );
  };

  showLIE = () => {
    return (
      <CardDeck>
        <Card border="dark">
          <Card.Body>
            <Card.Title>
              <span className="boldText blueIcon">
                L.I.E. PROJECTS UNDERTAKEN
              </span>
              <p>&nbsp;</p>
              <p>
                Sharma & Associates has monitored various projects as Lender’s
                Engineers and presents true and fair view of the projects under
                implementation. Some of the L E assignments undertaken in the
                last few years are as under-
              </p>
            </Card.Title>
            <Table responsive striped bordered hover>
              <thead style={{ fontWeight: "bold", textAlign: "center" }}>
                <tr>
                  <th>Sr. No.</th>
                  <th>Borrower/Project</th>
                  <th>Industry</th>
                  <th>Name of Lender</th>
                  <th>Project Cost (Rs. in Crores)</th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: "white" }}>
                {this.showLIETableBody()}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </CardDeck>
    );
  };

  showValuation = () => {
    return (
      <CardDeck>
        <Card border="dark">
          <Card.Body>
            <Card.Title>
              <span className="boldText blueIcon">VALUATION REPORTS</span>
              <p>&nbsp;</p>
              <p>
                Sharma & Associates has carried out various Valuation Reports
                for various Banks. Some of the Valuation works undertaken in
                last few years are as under -
              </p>
            </Card.Title>
            <Table responsive striped bordered hover>
              <thead style={{ fontWeight: "bold", textAlign: "center" }}>
                <tr>
                  <th>Sr. No.</th>
                  <th>Name of Organisation</th>
                  <th>Industry</th>
                  <th>Name of Lender</th>
                  <th>Amount (Rs. in Lakhs)</th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: "white" }}>
                {this.showValuationTableBody()}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </CardDeck>
    );
  };

  showTurnkey = () => {
    return (
      <CardDeck>
        <Card border="dark">
          <Card.Body>
            <Card.Title>
              <span className="boldText blueIcon">
                TURNKEY PROJECTS EXECUTED
              </span>
              <p>&nbsp;</p>
              <p>
                Apart from the above, Sharma & Associates has experience of
                execution of the various projects on turn-key basis. Some of the
                Projects executed on turnkey basis are as under -
              </p>
            </Card.Title>
            <Table responsive striped bordered hover>
              <thead style={{ fontWeight: "bold", textAlign: "center" }}>
                <tr>
                  <th>Sr. No.</th>
                  <th>Borrowers</th>
                  <th>Institution/Station</th>
                  <th>Project</th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: "white" }}>
                {this.showTurnkeyBody()}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </CardDeck>
    );
  };

  progressReport = () => {
    return (
      <CardDeck>
        <Card border="dark">
          <Card.Body>
            <Card.Title>
              <span className="boldText blueIcon">
                PROGRESS REPORT / CERTIFICATES
              </span>
              <p>&nbsp;</p>
              <p>
                Besides, above Sharma & Associates has provided the progress
                report/ certificates in accordance with the specific need of the
                banks as per their requirements and guidelines.
              </p>
            </Card.Title>
            <Table responsive striped bordered hover>
              <thead style={{ fontWeight: "bold", textAlign: "center" }}>
                <tr>
                  <th>Sr. No.</th>
                  <th>Borrowers</th>
                  <th>Industry</th>
                  <th>Bank</th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: "white" }}>
                {this.showTurnkeyBody()}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </CardDeck>
    );
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
            src={images.projectsNew}
            alt="Projects"
            title="Projects"
            className="img-fluid"
          ></img>
          <div className="subContainer text-center">
            <div className="container-fluid">
              <h2 class="fontBold  blueIcon">Project Undertaken</h2>
            </div>
          </div>

          <Jumbotron>
            <p>
              <h5 className="h5 centerText">
                Sharma & Associates has carried out number of projects. Some of
                the Project appraisal works undertaken in last few years are as
                under.
              </h5>
            </p>

            <p>
              {this.showTEV()}
              <p>&nbsp;</p>
              {this.showLIE()}
              <p>&nbsp;</p>
              {this.showValuation()}
              <p>&nbsp;</p>
              {this.showTurnkey()}
              <p>&nbsp;</p>
              {this.progressReport()}
              <p>&nbsp;</p>
            </p>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
