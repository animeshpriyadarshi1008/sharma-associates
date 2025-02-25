import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/App.css";
import { images } from "../utils";
import Carousel from "../components/carousels";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";

ReactGA.pageview(window.location.pathname + window.location.search);

export default class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    
    return (
      <div className="parentContainer">
        <Helmet>
                <meta charSet="utf-8" />
                <title> Sharma Associates Home </title>
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
        <Carousel
          carouselImg1={images.First}
          carouselImg2={images.Second}
          carouselImg3={images.Third}
          carouselImg4={images.Fourth}
        />
        <div class="home-container-fluid text-center">
          <div class="row justify-content-lg-center">
            <div class="col-lg-8">
              <h1 className="h1">Sharma & Associates</h1>
              <h5 className="h5">
                Sharma & Associates is a Financial Consultancy Firm serving
                customers since past two decades. We offer services in the lines
                of Mergers & Acquisitions, Detailed Project Report, Debt
                Solutions, Structured Finance, Valuations, Stock Audits etc.
              </h5>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
        <div class="container2 text-center">
          <div class="home-container-fluid">
            <div class="row justify-content-lg-center">
              <div class="col-lg-12">
                <div class="service-box">
                  <div class="s-box-row">
                    <div class="s-box-col">
                      <img
                        src={images.debt}
                        alt="Debt Syndication"
                        title="Debt Syndication"
                      />
                      <h4>Debt Syndication</h4>
                      <div class="s-box-data">
                        Sharma & Associates deals with SMEs, mid-corporate and
                        large corporate clients, and aims to provide cust...
                      </div>
                      <div class="clear"></div>
                      <Link to="/debtSyndication" className="btn2">
                        Explore More
                      </Link>
                    </div>
                    <div class="s-box-col">
                      <img src={images.privateEquity} alt="DPR" title="DPR" />
                      <h4>Detailed Project Report</h4>
                      <div class="s-box-data">
                        Sharma & Associates has a team of professionals with
                        extensive experience in preparing Detailed...
                      </div>
                      <div class="clear"></div>
                      <Link to="/detailedProjectReport" className="btn2">
                        Explore More
                      </Link>
                    </div>
                    <div class="s-box-col">
                      <img
                        src={images.financialAdvisoryService}
                        alt="FAS"
                        title="FAS"
                      />
                      <h4>Financial Advisory Services</h4>
                      <div class="s-box-data">
                        Sharma & Associates is one of the top leading advisory
                        firm in the field of advisory on Highways, Railways...
                      </div>
                      <div class="clear"></div>
                      <Link to="/financialAdvisoryServices" className="btn2">
                        Explore More
                      </Link>
                    </div>
                    <div class="s-box-col">
                      <img
                        src={images.valuationService}
                        alt="Valuation"
                        title="Valuation"
                      />
                      <h4>Valuation Services</h4>
                      <div class="s-box-data">
                        Sharma & Associates is registered as an approved valuer.
                        We have a dynamic team of highly qualified civil...
                      </div>
                      <div class="clear"></div>
                      <Link to="/valuationServices" className="btn2">
                        Explore More
                      </Link>
                    </div>
                    <div class="s-box-col">
                      <img src={images.tevStudy} alt="TEV" title="TEV" />
                      <h4>TEV Study & LIE Report</h4>
                      <div class="s-box-data">
                        Techno Economic Viability (TEV) study of a project
                        encompasses the evaluation of a project for evalu...
                      </div>
                      <div class="clear"></div>
                      <Link to="/tevStudy" className="btn2">
                        Explore More
                      </Link>
                    </div>
                    <div class="s-box-col">
                      <img
                        src={images.tranning}
                        alt="StockAudits"
                        title="StockAudits"
                      />
                      <h4>Stock Audits</h4>
                      <div class="s-box-data">
                        Assets e.g. Stocks and physical assets such as raw
                        materials are important real assets and need repeat
                        watch...
                      </div>
                      <div class="clear"></div>
                      <Link to="/stockAudits" className="btn2">
                        Explore More
                      </Link>
                    </div>
                    <div class="s-box-col">
                      <img
                        src={images.research}
                        alt="MarketResearch"
                        title="MarketResearch"
                      />
                      <h4>Market Research</h4>
                      <div class="s-box-data">
                        No matter how small or big your business is, no matter
                        the product you are introducing has never...
                      </div>
                      <div class="clear"></div>
                      <Link to="/marketResearch" className="btn2">
                        Explore More
                      </Link>
                    </div>
                    <div class="s-box-col">
                      <img src={images.retailLoan} alt="VOP" title="VOP" />
                      <h4>Vetting of Projects</h4>
                      <div class="s-box-data">
                        We pride ourselves on offering value-engineered
                        solutions to fit our project requirements. From ...
                      </div>
                      <div class="clear"></div>
                      <Link to="/vettingofProjects" className="btn2">
                        Explore More
                      </Link>
                    </div>
                    <div class="clear"></div>
                  </div>
                </div>
              </div>
            </div>
            <p>&nbsp;</p>
            <h2 className="h2">
              The firm rests on its strong and professional leadership
            </h2>
            <p class="p">
              We advise clients in all aspects of finance and our expertise lies
              in the areas of debt, equity and loan syndication.
            </p>
          </div>
        </div>
        <div class="home-1">
          <div class="counter">
            <div class="home-container-fluid">
              <div id="counter">
                <div class="row">
                  <div class="col">
                    <div className="counter-value" data-count="14">
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
              <p>&nbsp;</p>
              <h2 class="h2">SHARMA & ASSOCIATE IS ALL ABOUT RISE.</h2>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
        <div class="home-container-fluid">
          <div class="row justify-content-lg-center">
            <div class="col-lg-12">
              <div class="service-box">
                <div class="s-box-row">
                  <div class="s-box-col">
                    <img src={images.certificate} alt="CFCE" title="CFCE" />
                    <h4>Certificate For Chartered Engineer</h4>
                    <div class="s-box-data">
                      Sharma & Associates is a trusted Chartered Engineers
                      certificate provider that can help you obtain...
                    </div>
                    <div class="clear"></div>
                    <Link to="/charteredEngineer" className="btn2">
                      Explore More
                    </Link>
                  </div>
                  <div class="s-box-col">
                    <img src={images.sickUnit} alt="RPTSU" title="RPTSU" />
                    <h4>Revival Package to Sick Units</h4>
                    <div class="s-box-data">
                      Sharma & Associates has strong relationships with Banks,
                      financial institutions and NBFCs. The firm...
                    </div>
                    <div class="clear"></div>
                    <Link to="/revivalPackage" className="btn2">
                      Explore More
                    </Link>
                  </div>
                  <div class="s-box-col">
                    <img src={images.progressRep} alt="PR" title="PR" />
                    <h4>Progress Report</h4>
                    <div class="s-box-data">
                      Sharma & Associates also prepares the progress report in
                      accordance with the specific need of the banks....
                    </div>
                    <div class="clear"></div>
                    <Link to="/progressReport" className="btn2">
                      Explore More
                    </Link>
                  </div>
                  <div class="clear"></div>
                </div>
              </div>
              <div class="text-center">
                <div class="row justify-content-lg-center">
                  <div class="col-lg-10">
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2 class="h2">
                      The firm rests on its strong and professional leadership
                    </h2>
                    <p class="p">
                      We advise clients in all aspects of finance and our
                      expertise lies in the areas of debt, equity and .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container2">
          <div class="home-container-fluid">
            <div class="text-center">
              <h2 class="h2"> Our Clients</h2>
              <p class="p">
                Serviced 250+ clients for valuation services including many
                fortune 500 companies
              </p>
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
                  <img src={images.SMCPower} alt="SMCPower" title="SMCPower" />
                </li>
                <li>
                  <img src={images.Amrapali} alt="Amrapali" title="Amrapali" />
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
                  <img src={images.RlgGroup} alt="RlgGroup" title="RlgGroup" />
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
                  <img src={images.GdGoenka} alt="GdGoenka" title="GdGoenka" />
                </li>
                <li>
                  <img src={images.Newway} alt="Newway" title="Newway" />
                </li>
              </ul>
            </div>
            <p>&nbsp;</p>
            <div class="text-center">
              <Link to="/client" className="btn2">
                View more
              </Link>
            </div>
          </div>
        </div>
        <div className="EmptyDiv"></div>
      </div>
    );
  }
}
