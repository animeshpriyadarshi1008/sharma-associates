import React, { Component } from "react";
import carrerImg from "../../assets/carrerNew.jpg";
import { Jumbotron } from "react-bootstrap";
import { images } from "../../utils";
import { CardDeck, Card } from "react-bootstrap";
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
            src={images.workLife}
            alt="About company"
            title="About company"
            className="img-fluid "
          ></img>
          <div className="subContainer text-center">
            <div className="container-fluid">
              <h2 class="fontBold  blueIcon">
                {" "}
                Work & Life at Sharma And Associates
              </h2>
            </div>
          </div>

          <Jumbotron>
            <p>
              Sharma And Associates is a vibrant and dynamic organization, which
              thrives on working hard but also seeks to provide ample
              opportunities for our people to enjoy themselves in the process.
              The entire firm involves itself in a variety of activities
              including sports, community and social events and this is apparent
              when you join Sharma And Associates.
            </p>
            <p>
              All through the year, numerous social events are arranged within
              your work group as well as across the firm. These events and
              activities are aimed at giving you the opportunity to interact and
              socialize with your colleagues across locations within India.
            </p>
            <p>
              Sharma And Associates provides a supportive work culture to
              employees by initiating some good policies for employee welfare.
              There is openness towards discussing new ideas and the support of
              the senior management is quite encouraging. There is respect for
              an individual and team working is valued. There is definitely a
              healthy work environment provided. There are good practices and
              initiatives that are being actioned by various disciplines that
              can be replicated across the organization.
            </p>
            <p>
              It is our ambition that everyone at Sharma And Associates should
              accomplish a personal and professional balance in their life, for
              which we also provide exciting avenues for your overall
              development.
            </p>

            <p>
              <CardDeck className="marginTop">
                <Card border="dark">
                  <Card.Body>
                    <Card.Title>
                      <span className="boldText blueIcon">
                        Career Enrichment
                      </span>
                    </Card.Title>
                    <Card.Img variant="top" src={images.greenchameleon} />
                    <p className="marginTop10">
                      Career mobility at Sharma And Associates is not just about
                      working abroad. We recognize that moving to another
                      department down the corridor can be just as beneficial as
                      moving to another country. At Sharma And Associates, you
                      have the opportunity to apply for internal vacancies to
                      assist you in maximizing your career.
                    </p>
                  </Card.Body>
                </Card>
                <Card border="dark">
                  <Card.Body>
                    <Card.Title>
                      <span className="boldText blueIcon">People Focus</span>
                    </Card.Title>
                    <Card.Img variant="top" src={images.kevin} />
                    <p className="marginTop10">
                      Life Balance – we understand it is tough to maintain the
                      right balance between your personal and professional life.
                      Hence offering our people an energetic and healthy work
                      environment improves performance and boosts employee
                      morale.
                    </p>
                  </Card.Body>
                </Card>
                <Card border="dark">
                  <Card.Body>
                    <Card.Title>
                      <span className="boldText blueIcon">Alumini Network</span>
                    </Card.Title>
                    <Card.Img variant="top" src={images.hunterRace} />
                    <p className="marginTop10">
                      One of the many reasons that you might consider working
                      for an employer would be their sphere of influence. This
                      would include many factors such as market penetration, the
                      quality, capacity, and ease of access of its intellectual
                      property, and the type of impact it has in its chosen
                      market for example.
                    </p>
                  </Card.Body>
                </Card>
              </CardDeck>
            </p>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
