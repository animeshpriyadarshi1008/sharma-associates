import React, { useState } from "react";
import "../css/App.css";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

function CarouselSlide(props) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      class="carousel-control-next
            carousel-control-prev"
      activeIndex={index}
      indicators={false}
      controls={true}
      onSelect={handleSelect}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.carouselImg1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Grow with Us</h5>
          <h4> Lender’s Independent Engineer’s (LIE) </h4>
          <p>
            {" "}
            Experienced in assessment execution based on the realistic
            information.
          </p>
          <ul>
            <li>Successfully did LIE Report for large projects.</li>
            <li>Independent Engineer reviews of the technical inputs.</li>
            <li>
              LIE certificate is issued based on assessment of work completed.
            </li>
          </ul>
          <p>
            <Link to="/tevStudy&lie" className="btn2">
              Explore More
            </Link>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.carouselImg2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Grow with Us</h5>
          <h4>Detailed Project Report</h4>
          <p>
            Experienced in advising and executing Private Equity transactions
            across sectors.
          </p>
          <ul>
            <li>250+ successful transactions.</li>
            <li>Executed deals worth of INR 3000 Crores across sectors.</li>
            <li>Offer a complete suite of Equity Solutions.</li>
          </ul>
          <p>
            <Link to="/detailedProjectReport" className="btn2">
              Explore More
            </Link>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.carouselImg3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Grow with Us</h5>
          <h4>Techno Economic & Viability Study</h4>
          <p>
            Experienced in providing Quality Services to Banks and Financial
            Institutions.
          </p>
          <ul>
            <li>
              View on the acceptability of the degree of risk involved in a
              project.
            </li>
            <li>Assessment of the available land in use for the project.</li>
            <li>
              Analysis of technological risk, market risk, regulatory risk,
              financial risk.
            </li>
          </ul>
          <p>
            <Link to="/tevStudy&lie" className="btn2">
              Explore More
            </Link>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.carouselImg4}
          alt="Fourthslide"
        />
        <Carousel.Caption>
          <h5>Grow with Us</h5>
          <h4>Valuation Services</h4>
          <p>
            Specialized expertise to deliver industry-leading valuation reports
            and analysis
          </p>
          <ul>
            <li>Serviced 250+ clients for valuation services</li>
            <li>
              {" "}
              Past reports have been part of various high value transactions.
            </li>
            <li>
              Our valuation reports are considered for Compliance and
              Regulatory.
            </li>
          </ul>
          <p>
            <Link to="/valuationServices" className="btn2">
              Explore More
            </Link>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselSlide;
