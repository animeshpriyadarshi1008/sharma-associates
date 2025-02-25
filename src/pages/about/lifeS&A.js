import React, { Component } from "react";
import { Jumbotron, CardColumns, Card } from "react-bootstrap";
import { images } from "../../utils";

export default class Life extends Component {
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
            src={images.life}
            alt="life"
            title="life"
            className="img-fluid"
          ></img>
          <div className="subContainer text-center">
            <div className="container-fluid">
              <h2 class="fontBold  blueIcon">Life @ Sharma & Associates</h2>
            </div>
          </div>
          <Jumbotron>
            <h4 className="blueIcon boldText leftText">Festival celebration</h4>
            <p>
              <CardColumns className="marginTop">
                <Card border="dark">
                  <Card.Body>
                    <Card.Img variant="top" src={images.holi} />
                  </Card.Body>
                </Card>
                <Card border="dark">
                  <Card.Body>
                    <Card.Img variant="top" src={images.party} />
                  </Card.Body>
                </Card>
                <Card border="dark">
                  <Card.Body>
                    <Card.Img variant="top" src={images.rangoli} />
                  </Card.Body>
                </Card>
              </CardColumns>
            </p>
            <h4 className="blueIcon boldText leftText">Industry visit</h4>
            <p>
              <CardColumns className="marginTop">
                <Card border="dark">
                  <Card.Body>
                    <Card.Img variant="top" src={images.steel} />
                  </Card.Body>
                </Card>
                <Card border="dark">
                  <Card.Body>
                    <Card.Img variant="top" src={images.mill} />
                  </Card.Body>
                </Card>
                <Card border="dark">
                  <Card.Body>
                    <Card.Img variant="top" src={images.construction} />
                  </Card.Body>
                </Card>
                <Card border="dark">
                  <Card.Body>
                    <Card.Img variant="top" src={images.boiler} />
                  </Card.Body>
                </Card>
                <Card border="dark">
                  <Card.Body>
                    <Card.Img variant="top" src={images.fan} />
                  </Card.Body>
                </Card>
                <Card border="dark">
                  <Card.Body>
                    <Card.Img variant="top" src={images.waterfall} />
                  </Card.Body>
                </Card>
              </CardColumns>
            </p>
            <h4 className="blueIcon boldText leftText">Conference</h4>
            <p>
              <CardColumns className="marginTop">
                <Card border="dark">
                  <Card.Body>
                    <Card.Img variant="top" src={images.conference} />
                  </Card.Body>
                </Card>
              </CardColumns>
            </p>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
