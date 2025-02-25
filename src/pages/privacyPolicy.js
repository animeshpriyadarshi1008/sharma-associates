import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { images } from "..//utils";
import { Helmet } from "react-helmet";



export default class PrivacyPolicy extends Component {
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
        <Helmet>
    <meta charSet="utf-8" />
    <title> Sharma Associates Privacy Policy </title>
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
          <img
            src={images.privacy}
            alt="privacyPolicy"
            title="privacyPolicy"
            className="img-fluid"
          ></img>
          <div className="subContainer text-center">
            <div className="container-fluid">
              <h2 class="fontBold  blueIcon">Privacy Policy</h2>
            </div>
          </div>
          <Jumbotron>
            <p>
              This privacy statement is applicable to
              Sharma & Associates. It does not collect personal
              information about individuals except when such
              individuals specifically provide such information
              on a voluntary basis.
            </p>
            <p>
              The information appearing in this website is for general
              information purposes only. The information is provided
              by Sharma & Associates Limited and whilst it is our Endeavour
              to keep the information updated and factual, we make no
              representations or warranties of any kind, express or
              implied, about the completeness, accuracy, reliability,
              suitability or availability with respect to the website
              or the information, products, services, or related graphics
              contained on the website for any purpose. Any reliance you
              place on such information is therefore strictly at your own risk.
            </p>
            <p>
              In no event Sharma & Associates Limited will be liable
              for any loss or damage including without limitation,
              indirect or consequential loss or damage, or any loss
              or damage whatsoever arising from loss of data or profits
              arise out of, or in connection with, the use of this website.
            </p>
          </Jumbotron>
        </div>
      </div>
    );
  }
}