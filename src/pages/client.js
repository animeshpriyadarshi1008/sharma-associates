import React, { Component } from "react";
import "../css/App.css";
import { images } from "../utils";
import { Helmet } from "react-helmet";


import ReactGA from "react-ga";
ReactGA.pageview(window.location.pathname + window.location.search);


export default class Client extends Component {
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
<title> Sharma Associates Client </title>
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
            src={images.ClientBanner}
            alt="clients"
            title="clients"
            className="img-fluid"
          ></img>
          <div class="container2">
            <div class="home-container-fluid">
              <div class="text-center">
                <h4 className="blueIcon boldText">Our Clients</h4>
              </div>
              <div class="clients">
                <ul>
                  <li>
                    <img src={images.Gaurs} alt="Gaurs" title="Gaurs" />
                  </li>
                  <li>
                    <img
                      src={images.PrateekGroup}
                      alt="PrateekGroup"
                      title="PrateekGroup"
                    />
                  </li>
                  <li>
                    <img
                      src={images.SMCPower}
                      alt="SMCPower"
                      title="SMCPower"
                    />
                  </li>
                  <li>
                    <img
                      src={images.Amrapali}
                      alt="Amrapali"
                      title="Amrapali"
                    />
                  </li>
                  <li>
                    <img
                      src={images.Patanjali}
                      alt="Patanjali"
                      title="Patanjali"
                    />
                  </li>
                  <li>
                    <img
                      src={images.Madhusudan}
                      alt="Madhusudan"
                      title="Madhusudan"
                    />
                  </li>
                  <li>
                    <img src={images.RTech} alt="RTech" title="RTech" />
                  </li>

                  <li>
                    <img
                      src={images.KushalInt}
                      alt="KushalInt"
                      title="KushalInt"
                    />
                  </li>
                  <li>
                    <img src={images.El} alt="El" title="El" />
                  </li>
                  <li>
                    <img
                      src={images.GdGoenka}
                      alt="GdGoenka"
                      title="GdGoenka"
                    />
                  </li>

                  <li>
                    <img src={images.GBP} alt="GBP" title="GBP" />
                  </li>
                  <li>
                    <img
                      src={images.Aggarwals}
                      alt="Aggarwals"
                      title="Aggarwals"
                    />
                  </li>
                  <li>
                    <img
                      src={images.AnsalAPI}
                      alt="AnsalAPI"
                      title="AnsalAPI"
                    />
                  </li>
                  <li>
                    <img src={images.Arocon} alt="Arocon" title="Arocon" />
                  </li>
                  <li>
                    <img src={images.Barmalt} alt="Barmalt" title="Barmalt" />
                  </li>
                  <li>
                    <img
                      src={images.BhagatForge}
                      alt="BhagatForge"
                      title="BhagatForge"
                    />
                  </li>
                  <li>
                    <img src={images.Bhushan} alt=" Bhushan" title="Bhushan" />
                  </li>
                  <li>
                    <img src={images.Dbf} alt="Dbf" title="Dbf" />
                  </li>
                  <li>
                    <img src={images.Dhoot} alt="Dhoot" title="Dhoot" />
                  </li>
                  <li>
                    <img
                      src={images.GoldSouk}
                      alt="GoldSouk"
                      title="GoldSouk"
                    />
                  </li>
                  <li>
                    <img
                      src={images.GreatValue}
                      alt="GreatValue"
                      title="GreatValue"
                    />
                  </li>
                  <li>
                    <img src={images.Green} alt="Green" title="Green" />
                  </li>
                  <li>
                    <img
                      src={images.Himalaya}
                      alt="Himalaya"
                      title="Himalaya"
                    />
                  </li>
                  <li>
                    <img src={images.Jupiter} alt="Jupiter" title="Jupiter" />
                  </li>
                  <li>
                    <img src={images.Keltech} alt="Keltech" title="Keltech" />
                  </li>
                  <li>
                    <img
                      src={images.M2mGreen}
                      alt="M2mGreen"
                      title="M2mGreen"
                    />
                  </li>
                  <li>
                    <img
                      src={images.NtfIndia}
                      alt="NtfIndia"
                      title="NtfIndia"
                    />
                  </li>
                  <li>
                    <img
                      src={images.Ptakahata}
                      alt="Ptakahata"
                      title="Ptakahata"
                    />
                  </li>
                  <li>
                    <img
                      src={images.RathiSteel}
                      alt="RathiSteel"
                      title="RathiSteel"
                    />
                  </li>
                  <li>
                    <img
                      src={images.RlgGroup}
                      alt="RlgGroup"
                      title="RlgGroup"
                    />
                  </li>
                  <li>
                    <img
                      src={images.Safeandfresh}
                      alt="Safeandfresh"
                      title="Safeandfresh"
                    />
                  </li>
                  <li>
                    <img src={images.Saya} alt="Saya" title="Saya" />
                  </li>
                  <li>
                    <img src={images.Skardi} alt="Skardi" title="Skardi" />
                  </li>
                  <li>
                    <img src={images.UbGroup} alt="UbGroup" title="  UbGroup" />
                  </li>
                  <li>
                    <img
                      src={images.urbanLand}
                      alt="urbanLand"
                      title="urbanLand"
                    />
                  </li>
                  <li>
                    <img src={images.vasu} alt="vasu" title="vasu" />
                  </li>
                  <li>
                    <img
                      src={images.BaveHotels}
                      alt="BaveHotels"
                      title="BaveHotels"
                    />
                  </li>
                  <li>
                    <img src={images.Newway} alt="Newway" title="Newway" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
