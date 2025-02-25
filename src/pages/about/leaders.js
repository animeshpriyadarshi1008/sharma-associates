import React, { Component } from "react";
import carrerImg from "../../assets/carrerNew.jpg";
import { Jumbotron } from "react-bootstrap";
import { images } from "../../utils";
import { CardDeck, Card } from "react-bootstrap";
import ReactGA from "react-ga";

ReactGA.pageview(window.location.pathname + window.location.search);

export default class Leaders extends Component {
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
            src={images.Leaders}
            alt="About company"
            title="About company"
            className="img-fluid"
          ></img>
          <div className="subContainer text-center">
            <div className="container-fluid">
              <h2 class="fontBold  blueIcon">Leaders</h2>
            </div>
          </div>

          <Jumbotron>
            <p>
              <h5 className="h5 centerText">
                Leadership at Sharma & Associates is about mapping out where you
                need to go to "win" as a team or an organization; and it is
                dynamic, exciting, and inspiring.
              </h5>
            </p>

            <p>
              <CardDeck className="marginTop">
                <Card border="dark">
                  <Card.Body>
                    <Card.Title>
                      <span className="boldText blueIcon">
                        MR. SHIV MOHAN SHARMA
                      </span>
                    </Card.Title>

                    <Card.Img
                      variant="top"
                      src={images.mrShivMohan}
                      style={{
                        width: "150px",
                        height: "200px",
                      }}
                    />

                    <p className="marginTop10">
                      <span className="boldText blueIcon">
                        MR. SHIV MOHAN SHARMA,
                      </span>{" "}
                      is B. Tech (Mech. Engg.) from renowned Govind Ballabh
                      University of Agriculture & Technology, He is a{" "}
                      <span className="boldText blueIcon">
                        Chartered Engineer.
                      </span>{" "}
                      He has further completed M.I.E. from the Institute of
                      Engineers and he is an active member since 1978. He is a
                      practicing Engineer and a{" "}
                      <span className="boldText blueIcon">
                        Chartered Engineer. Govt. approved valuer under section
                        34AB of Wealth Tax Act, 1957 from the Ministry of
                        Finance, Govt. of India.
                      </span>{" "}
                      He is also an approved valuer and Fellow Member of the
                      Institute of Valuers (FIV) Life fellow of Institution of
                      Water & Environment (India) He is an independent director
                      of Independent Business Valuers Association.
                    </p>
                    <p>
                      He posses experience of about 4 decades in various fields.
                      He has undertaken several consultancy assignments and
                      project implementation on turnkey basis and have been
                      instrumental in providing consultancy for setting up a
                      varied range of projects including HDPP/Woven sacks, PVC
                      Pipes, Industrial and Decorative laminates, PVC/PU leather
                      cloth, PVC battery separators, Disposable syringes, Multi
                      Extruded/Multi-Layer Films, Injection Moulding /Blow
                      Moulding products, Craft, writing and printing paper, and
                      printed circuit Boards and Industrial laminates, solar
                      Power, Hydro Power, Thermal Power, Steel, construction
                      projects, wind mill projects, electronic projects, road
                      projects, manufacturing industries, Gas distribution,
                      textile etc.
                    </p>
                  </Card.Body>
                </Card>
                <Card border="dark">
                  <Card.Body>
                    <Card.Title>
                      <span className="boldText blueIcon">
                        MR. SADAN MOHAN MITTAL
                      </span>
                    </Card.Title>
                    <Card.Img
                      variant="top"
                      src={images.mrSadanMohan}
                      style={{
                        width: "150px",
                        height: "200px",
                      }}
                    />
                    <p className="marginTop10">
                      <span className="boldText blueIcon">
                        MR. SADAN MOHAN MITTAL
                      </span>
                      , is a{" "}
                      <span className="boldText blueIcon">
                        Chartered Engineer.
                      </span>{" "}
                      He is B. Tech (Mech. Engg.) from G. B. Pant University of
                      Agriculture and Technology, Pantnagar and graduate in
                      Industrial Engineering in 1988 from Indian Institute of
                      Industrial Engineering, Mumbai. He obtained Post Graduate
                      Diploma in Financial Management from IGNOU.
                    </p>
                    <p>
                      He has wide industrial experience of about 4 decades in
                      various companies including M/s. Steel Authority of India
                      Limited at Rourkela Steel Plant and Centre for Engineering
                      and Technology in Ranchi. He has vast knowledge and
                      experience in operation, maintenance, design of machinery
                      and project management. He also worked as in- house
                      consultant in SAIL. He also possesses an experience of
                      teaching in Financial Management. Currently working as an
                      associate with{" "}
                      <span className="boldText blueIcon">
                        Sharma & Associates.
                      </span>{" "}
                    </p>
                  </Card.Body>
                </Card>
              </CardDeck>
              <p>&nbsp;</p>
              <CardDeck>
                <Card border="dark">
                  <Card.Body>
                    <Card.Title>
                      <span className="boldText blueIcon">
                        {" "}
                        MR.NISHANT MOHAN
                      </span>
                    </Card.Title>
                    <Card.Img
                      variant="top"
                      src={images.mrNishantMohan}
                      style={{
                        width: "150px",
                        height: "200px",
                      }}
                    />
                    <p className="marginTop10">
                      <span className="boldText blueIcon">
                        MR. NISHANT MOHAN
                      </span>
                      , has done his B. Tech. and Master of Business
                      Administration.
                    </p>
                    <p>
                      He is working as an associate with{" "}
                      <span className="boldText blueIcon">
                        Sharma & Associates.
                      </span>{" "}
                      . He has wide industrial experience of about 20 years in
                      various industries including solar Power, Hydro Power,
                      Thermal Power, Steel, construction projects, wind mill
                      projects, electronic projects, road projects,
                      manufacturing industries, Gas distribution, textile etc.
                    </p>
                    <p>
                      He is playing a key role in{" "}
                      <span className="boldText blueIcon">
                        Sharma & Associates
                      </span>{" "}
                      in preparation of Techno-Economic viability study report,
                      Lender Engineer’s report, detailed project report,
                      Financial Management, valuation report, project management
                      and various other sectors.
                    </p>
                  </Card.Body>
                </Card>
                <Card border="dark">
                  <Card.Body>
                    <Card.Title>
                      <span className="boldText blueIcon">
                        MR. SANJAY PANWAR
                      </span>
                    </Card.Title>
                    <Card.Img
                      variant="top"
                      src={images.mrSanjay}
                      style={{
                        width: "150px",
                        height: "200px",
                      }}
                    />
                    <p className="marginTop10">
                      <span className="boldText blueIcon">
                        MR. SANJAY PANWAR
                      </span>
                      , B. E. (Civil) from Karnataka University, Karnataka. He
                      is a certified Chartered Engineer from The Institution of
                      Engineers. He is also registered under section 34AB of
                      Wealth Tax Act, 1957 Valuation of Immovable Properties and
                      under Insolvency and Bankruptcy Board of India (IBBI) for
                      valuation of Land & Building under NCLT. He completed his
                      material testing training at C.R.R.I
                    </p>
                    <p>
                      His professional experience includes 25 years of
                      experience in supervising project activities alongwith
                      ensuring effective resource utilisation to maximize output
                      at{" "}
                      <span className="boldText blueIcon">
                        Sharma & Associates
                      </span>{" "}
                      . He has proven excellence in executing the project from
                      excavation, foundations, substructure, superstructure,
                      finishing to final handover to client.
                    </p>
                  </Card.Body>
                </Card>
              </CardDeck>
              <p>&nbsp;</p>
              <CardDeck>
                <Card border="dark">
                  <Card.Body>
                    <Card.Title>
                      <span className="boldText blueIcon">
                        MR. PRANEET MOHAN
                      </span>
                    </Card.Title>
                    <Card.Img
                      variant="top"
                      src={images.mrPraneetMohan}
                      style={{
                        width: "150px",
                        height: "200px",
                      }}
                    />
                    <p className="marginTop10">
                      <span className="boldText blueIcon">PRANEET MOHAN</span>,
                      B. com from University of Delhi and Advanced Program in
                      International Business from Amity Business School, Noida
                      in 2003. He has completed his MBA in International
                      Business from{" "}
                      <span className="boldText blueIcon">
                        Queensland University, London
                      </span>{" "}
                      in the year 2004. He has wide industrial experience of
                      about 15 years in various industries including management,
                      textile, real estate, road project, construction project,
                      wind mill projects, power projects, CNG & PNG distribution
                      network, teaching etc.
                    </p>
                    <p>
                      Currently he is working as an associate with{" "}
                      <span className="boldText blueIcon">
                        Sharma & Associates
                      </span>{" "}
                      . He is engaged in preparation of Techno-Economic
                      viability study report, Lender Engineer’s report,
                      valuation report, detailed project report, loan
                      syndication, revival of sick units, project management. He
                      possesses an experience of Financial Management too. He
                      has handled many projects on turnkey basis.
                    </p>
                  </Card.Body>
                </Card>
                <Card border="dark">
                  <Card.Body>
                    <Card.Title>
                      <span className="boldText blueIcon">ISHAN MOHAN</span>
                    </Card.Title>
                    <Card.Img
                      variant="top"
                      src={images.mrIshanMohan}
                      style={{
                        width: "150px",
                        height: "200px",
                      }}
                    />
                    <p className="marginTop10">
                      <span className="boldText blueIcon">MR. ISHAN MOHAN</span>
                      , B. Tech (Computer Science & Engineering) from Uttar
                      Pradesh Technical University in 2007 and Master's Degree
                      Program in Industrial Engineering (MIE) from the
                      Institutions of Engineers (India). He started his carrier
                      working with Cognizant Technology Solutions Then moved to
                      Japan serving for Tata Consultancy Services and HCL Japan
                      Ltd for nearly 7 Years.
                    </p>
                    <p>
                      He has wide experience of more than 10 years in various
                      industries including, solar power, hydro power, thermal
                      power, road projects, construction projects, wind mill
                      projects, textile, steel, manufacturing industry. He is
                      capable of independently handling & preparation of
                      Techno-Economic viability study report, Lender Engineer’s
                      report, detailed project report, valuation report, project
                      management, financial management all other related jobs.
                      Currently he is working as an associate with{" "}
                      <span className="boldText blueIcon">
                        Sharma & Associates
                      </span>{" "}
                    </p>
                  </Card.Body>
                </Card>
              </CardDeck>
              <p>&nbsp;</p>
            </p>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
