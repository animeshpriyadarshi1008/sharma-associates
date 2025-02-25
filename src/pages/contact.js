import React, { Component } from "react";
import contactImg from "../assets/contactNew.jpg";
import mapImg from "../assets/map1.png";
import constant from "../constant/constant";
import { GoogleApiWrapper } from "google-maps-react";
import { Helmet } from "react-helmet";


import ReactGA from "react-ga";
ReactGA.pageview(window.location.pathname + window.location.search);

const showMap = (mapUrl) => {
  window.open(mapUrl);
};

class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    
    return (
      
      <div
        className="parentContainer"
        style={{
          backgroundImage: `url(${contactImg})`,
          overflowY: "scroll",
        }}
      >
        <Helmet>
    <meta charSet="utf-8" />
    <title> Sharma Associates Contact </title>
    <meta name="keywords" content="TEV Study in Delhi,
TEV study in Noida,
TEV Study in NCR,
TEV Study in India,
Where TEV study can be done around me,
Which company do TEV study,
what is Techno Economic Viability,
Techno Economic Viability  study in Delhi,
Techno Economic Viability  best,
Techno Economic Viability  cheap,
Techno Economic Viability  experience,
Techno Economic Viability  around me,
Techno Economic Viability  near by,
From where i can get LIE Report,
What is LIE Report,
Company to assist LIE,
Company to help LIE,
From where i can get Lenders Independent Engineers  Report in Delhi,
Lenders Independent Engineers  Report in Delhi,
Lenders Independent Engineers  Report best,
Lenders Independent Engineers  Report Cheap,
Lenders Independent Engineers  Report experienced,
Lenders Independent Engineers  Report around me,
Lenders Independent Engineers  Report near by,
LIE Report in Delhi,
LIE Report  in Noida,
LIE Report  in NCR,
LIE Report  in India,
Certificate for Chartered Engineer,
Chartered Engineer Certification,
where to get Chartered Engineer Certification,
Chartered Engineer Certification around me,
Chartered Engineer Certification in Delhi,
Best Company to get Chartered Engineer Certificate,
how to become chartered engineer in india,
how to get chartered engineer certification,
can i become chartered engineer,
chartered engineer certification company,
best company to give chartered engineer certification,
Which company give chartered engineer certification,
Chartered Engineer certification cost,
Chartered Engineer Certification requirement,
Chartered Engineer Certification need,
Financial Advisory Services,
Financial Advisory Service in Delhi,
Financial Advisory Service around me,
Financial Advisory Services in NCR,
Financial Advisory Services near by,
Experienced financial advisory service in delhi,
Company to assist loan,
how to get more loans,
how to get a loan for big company,
how to get a loan for major company,
how to get loan in delhi,
how to get increased loan amount,
get more loan,
where i can get loan to setup my company,
which company can assist to get loan,
Sales of business,
Leasing of Assets" />
</Helmet>
        <div className="childContainer">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <h1 className="h1">Contact us</h1>
                <h5 className="h5 mt-3">
                  S&A has a team of qualified, dynamic and dedicated
                  professionals who are having rich experience in technical as
                  well as financial field.{" "}
                </h5>
                <div class="row">
                  <div class="col-md-6">
                    <div className="contact-box">
                      <div className="contact-shape">
                        <i class="fa fa-phone-volume" aria-hidden="true"></i>
                      </div>
                      <h6>
                        <strong>Business Enq: </strong>
                        <a href="tel://+91-9811290561">+91-9811290561 ,</a>
                        <a href="tel://+91-9810290561"> +91-9810290561</a>
                      </h6>
                      <h6>
                        <strong>Board Line: </strong>
                        <a href="tel://0120">0120-4228680</a>
                      </h6>
                      <div className="clear"></div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div className="contact-box">
                      <div className="contact-shape">
                        <i class="fa fa-envelope-open" aria-hidden="true"></i>
                      </div>
                      <h6>
                        <strong>Email: </strong>
                        <a href="mailto:contact@sharmaassociate.co.in">
                          contact@sharmaassociate.co.in,
                        </a>
                      </h6>
                      <h6>
                        <strong> </strong>
                        <a href="mailto:shivmohan@sharmaassociate.co.in">
                          shivmohan@sharmaassociate.co.in
                        </a>
                      </h6>
                      <div className="clear"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="subContainer text-center">
          <div className="container-fluid">
            <h2 class="h2">
              The firm rests on its strong and professional leadership
            </h2>
            <p>
              We advise clients in all aspects of finance and our expertise lies
              in the areas of debt, equity and loan syndication.
            </p>
          </div>
        </div>
        <div className="contacthome">
          <div className="counter">
            <div className="container-fluid1">
              <div id="counter">
                <div class="row mb-4">
                  <div class="col">
                    <div className="counter-value" data-count="21">
                      21
                    </div>
                    <div class="plus">+</div>
                    <h5>Year of Experience</h5>
                  </div>
                  <div class="col">
                    <div className="counter-value" data-count="6">
                      6
                    </div>
                    <div class="plus">K+</div>
                    <h5>Happy Client</h5>
                  </div>
                  <div class="col">
                    <div className="counter-value" data-count="34">
                      34
                    </div>
                    <div class="plus">+</div>
                    <h5>Top Advisors</h5>
                  </div>
                  <div class="col">
                    <div className="counter-value" data-count="68">
                      68
                    </div>
                    <div class="plus">+</div>
                    <h5>New Samples</h5>
                  </div>
                </div>
              </div>
              <h2>Sharma & Associates is all about rise.</h2>
            </div>
          </div>
        </div>
        <div class="container-fluid2">
          <div class="row justify-content-lg-center">
            <div class="col-lg-12">
              <div className="service-box">
                <div className="s-box-row">
                  <div className="s-box-col ">
                    <img src={mapImg} alt="Address" />
                    <h4>{constant.address[0].name}</h4>
                    <p>{constant.address[0].location}</p>
                  </div>

                  <div className="clear"></div>
                  <div className="s-box-col border-right">
                    <img src={mapImg} alt="Address" />
                    <h4>{constant.address[1].name}</h4>
                    <p>{constant.address[1].location}</p>
                  </div>

                  <div className="s-box-col border-right">
                    <img src={mapImg} alt="Address" />
                    <h4>{constant.address[2].name}</h4>
                    <p>{constant.address[2].location}</p>
                  </div>

                  <div className="s-box-col border-right">
                    <img src={mapImg} alt="Address" />
                    <h4>{constant.address[3].name}</h4>
                    <p>{constant.address[3].location}</p>
                  </div>

                  <div className="s-box-col ">
                    <img src={mapImg} alt="Address" />
                    <h4>{constant.address[4].name}</h4>
                    <p>{constant.address[4].location}</p>
                  </div>

                  <div className="s-box-col border-right">
                    <img src={mapImg} alt="Address" />
                    <h4>{constant.address[5].name}</h4>
                    <p>{constant.address[5].location}</p>
                  </div>

                  <div className="s-box-col border-right">
                    <img src={mapImg} alt="Address" />
                    <h4>{constant.address[6].name}</h4>
                    <p>{constant.address[6].location}</p>
                  </div>

                  <div className="s-box-col border-right ">
                    <img src={mapImg} alt="Address" />
                    <h4>{constant.address[7].name}</h4>
                    <p>{constant.address[7].location}</p>
                  </div>

                  <div className="s-box-col ">
                    <img src={mapImg} alt="Address" />
                    <h4>{constant.address[8].name}</h4>
                    <p>{constant.address[8].location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="EmptyDiv"></div>
        </div>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: constant.goooleAPIKey,
})(Contact);
