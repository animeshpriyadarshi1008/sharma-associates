import React, { Component } from "react";
import carrerImg from "../../assets/carrerNew.jpg";
import { Table } from "react-bootstrap";
import { images } from "../../utils";
import { Link } from "react-router-dom";

import { realTimeDb } from "../../config/config.js";
import Button from "@material-ui/core/Button";
import ReactGA from "react-ga";

ReactGA.pageview(window.location.pathname + window.location.search);

export default class CurrentOpenings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      careerData: [],
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const firebaseData = realTimeDb.ref("Jobs");

    firebaseData.on("value", (snapshot) => {
      let careerFullData = snapshot.val();
      console.log(careerFullData);
      this.setState({
        careerData: careerFullData,
      });
    });
  }

  showTableBody = () => {
    const { careerData } = this.state;
    const Data = careerData;
    return Data
      ? Data.map((i) => {
          return (
            <tr>
              <td>{i.position_title}</td>
              <td>{i.domain}</td>
              <td>{i.experience}</td>
              <td>{i.location}</td>
              <td>{i.status}</td>
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
          backgroundImage: `url(${carrerImg})`,
          overflowY: "scroll",
        }}
      >
        <div className="childContainer">
          <img
            src={images.jobCurrent}
            alt="About company"
            title="About company"
            className="img-fluid "
          ></img>
          <div className="subContainer text-center">
            <div className="container-fluid">
              <h2 class="fontBold  blueIcon">Current Openings</h2>
            </div>
          </div>
          <br />
          <Table responsive striped bordered hover>
            <thead style={{ fontWeight: "bold", textAlign: "center" }}>
              <tr>
                <th>POSITION TITLE</th>
                <th>DOMAIN</th>
                <th>EXPERIENCE</th>
                <th>LOCATION</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: "white" }}>
              {this.showTableBody()}
            </tbody>
          </Table>
          <div style={{ textAlign: "center" }}>
            <Button
              variant="contained"
              size="large"
              style={{
                backgroundColor: "#1a237e",
                borderRadius: 5,
              }}
              disableElevation
            >
              <Link to="/apply">
                <span className="TextWhie">Apply Now</span>
              </Link>
            </Button>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
    );
  }
}
