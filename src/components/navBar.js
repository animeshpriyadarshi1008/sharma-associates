import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Logo from "../assets/S&A.png";
import "../css/App.css";
import Home from "../pages/home";
import AboutUs from "../pages/about";
import Leaders from "../pages/about/leaders";
import Life from "../pages/about/lifeS&A";
import Projects from "../pages/about/projects";
import DebtSyndication from "../pages/service/debtSyndication";
import DetailedProjectReport from "../pages/service/detailedProjectReport";
import FinancialAdvisoryServices from "../pages/service/financialAdvisoryServices";
import ValuationServices from "../pages/service/valuationServices";
import LieStudy from "../pages/service/lIEReport";
import TevStudy from "../pages/service/tevStudy";
import StockAudits from "../pages/service/stockAudits";
import MarketResearch from "../pages/service/marketResearch";
import VettingofProjects from "../pages/service/vettingofProjects";
import CharteredEngineer from "../pages/service/charteredEngineer";
import RevivalPackage from "../pages/service/revivalPackage";
import ProgressReport from "../pages/service/progressReport";
import Career from "../pages/career/career";
import WorkAndLife from "../pages/career/WorkAndLife.js";
import Apply from "../pages/career/apply.js";
import CurrentOpening from "../pages/career/currentOpening.js";
import Contact from "../pages/contact";
import Client from "../pages/client";
import PrivacyPolicy from "../pages/privacyPolicy";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";

import { images } from "../utils";
import Footer from "./footer";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },

  paper: {
    padding: theme.spacing(1),
    marginTop: "1.5%",
    width: "100%",
    borderTop: "8px solid #043f71",
  },
}));

function NavBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currentElement, setCurreneElement] = React.useState(null);

  const handleClick = (event) => {
    setCurreneElement(event.currentTarget.id);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderITem = () => {
    if (currentElement === "aboutus") {
      return (
        <div className="row paddingAll">
          <div className="col-lg-5 d-none d-lg-block border-right">
            <p>
              <h1 className="h1"> Sharma & Associates </h1>
            </p>
            <p>
              Sharma & Associates is a Financial Consultancy Firm serving
              customers since past two decades. Established in 1991.
            </p>
          </div>
          <div className="col-lg-5 border-right">
            <Typography onMouseLeave={handleClose}>
              <MenuItem
                className={classes.typography}
                href="test"
                component={Link}
                to="/about"
                onClick={handleClose}
              >
                <img
                  src={images.aboutCompany}
                  alt="Debt Syndication"
                  title="Debt Syndication"
                  className="img-fluid navIcons"
                />
                &nbsp; Company
              </MenuItem>
              <MenuItem
                className={classes.typography}
                component={Link}
                onClick={handleClose}
                to="/leaders"
              >
                <img
                  src={images.aboutLeader}
                  alt="Debt Syndication"
                  title="Debt Syndication"
                  className="img-fluid navIcons"
                />
                &nbsp; Leader
              </MenuItem>
              <MenuItem
                className={classes.typography}
                component={Link}
                onClick={handleClose}
                to="/life"
              >
                <img
                  src={images.aboutLife}
                  alt="Debt Syndication"
                  title="Debt Syndication"
                  className="img-fluid navIcons"
                />
                &nbsp; Life @S&A
              </MenuItem>
              <MenuItem
                to="/projects"
                className={classes.typography}
                component={Link}
                onClick={handleClose}
              >
                <img
                  src={images.aboutCorporate}
                  alt="Debt Syndication"
                  title="Debt Syndication"
                  className="img-fluid navIcons"
                />
                &nbsp;&nbsp; Project Undertaken
              </MenuItem>
            </Typography>
          </div>
          <div className="col-lg-2 d-none d-lg-block">
            <img
              src={images.aboutMegaMenuImage}
              alt="About company"
              title="About company"
              className="img-fluid"
            ></img>
          </div>
        </div>
      );
    } else if (currentElement === "services") {
      return (
        <div className="row paddingAll">
          <div className="col-lg-4 d-none d-lg-block border-right">
            <p>
              <h1 className="h1"> Sharma & Associates </h1>
            </p>
            <p>
              Sharma & Associates is a Financial Consultancy Firm serving
              customers since past two decades. Established in 1991.
            </p>
          </div>
          <div className="col-lg-3 border-right ">
            <Typography>
              <MenuItem
                className={classes.typography}
                href="tevStudy"
                component={Link}
                to="/tevStudy"
                onClick={handleClose}
              >
                <img
                  src={images.tevStudy}
                  alt="TEV Study"
                  title="TEV Study"
                  className="img-fluid navIcons"
                />
                &nbsp; TEV Study
              </MenuItem>
              <MenuItem
                className={classes.typography}
                href="lieReport"
                component={Link}
                to="/lieReport"
                onClick={handleClose}
              >
                <img
                  src={images.lieReportIcon}
                  alt="Lie Report"
                  title="Lie Report"
                  className="img-fluid navIcons"
                />
                &nbsp; LIE Report
              </MenuItem>
              <MenuItem
                className={classes.typography}
                href="debtSyndication"
                component={Link}
                to="/debtSyndication"
                onClick={handleClose}
              >
                <img
                  src={images.debt}
                  alt="Debt Syndication"
                  title="Debt Syndication"
                  className="img-fluid navIcons"
                />
                &nbsp; Debt Syndication
              </MenuItem>
              <MenuItem
                className={classes.typography}
                href="detailedProjectReport"
                component={Link}
                to="/detailedProjectReport"
                onClick={handleClose}
              >
                <img
                  src={images.privateEquity}
                  alt="Debt Syndication"
                  title="Debt Syndication"
                  className="img-fluid navIcons"
                />
                &nbsp; Detailed Project Report
              </MenuItem>
              <MenuItem
                className={classes.typography}
                href="financialAdvisoryServices"
                component={Link}
                to="/financialAdvisoryServices"
                onClick={handleClose}
              >
                <img
                  src={images.financialAdvisoryService}
                  alt="Debt Syndication"
                  title="Debt Syndication"
                  className="img-fluid navIcons"
                />
                &nbsp; Financial Advisory Services
              </MenuItem>
              <MenuItem
                className={classes.typography}
                href="valuationServices"
                component={Link}
                to="/valuationServices"
                onClick={handleClose}
              >
                <img
                  src={images.valuationService}
                  alt="Debt Syndication"
                  title="Debt Syndication"
                  className="img-fluid navIcons"
                />
                &nbsp; Valuation Services
              </MenuItem>

              <MenuItem
                className={classes.typography}
                href="stockAudits"
                component={Link}
                to="/stockAudits"
                onClick={handleClose}
              >
                <img
                  src={images.tranning}
                  alt="Debt Syndication"
                  title="Debt Syndication"
                  className="img-fluid navIcons"
                />
                &nbsp; Stock Audits
              </MenuItem>
            </Typography>
          </div>

          <div className="col-lg-3 border-right">
            <Typography onMouseLeave={handleClose}>
              <MenuItem
                className={classes.typography}
                href="marketResearch"
                component={Link}
                to="/marketResearch"
                onClick={handleClose}
              >
                <img
                  src={images.research}
                  alt="Debt Syndication"
                  title="Debt Syndication"
                  className="img-fluid navIcons"
                />
                &nbsp; Market Research
              </MenuItem>
              <MenuItem
                className={classes.typography}
                href="vettingofProjects"
                component={Link}
                to="/vettingofProjects"
                onClick={handleClose}
              >
                <img
                  src={images.retailLoan}
                  alt="Debt Syndication"
                  title="Debt Syndication"
                  className="img-fluid navIcons"
                />
                &nbsp; Vetting of Projects
              </MenuItem>
              <MenuItem
                className={classes.typography}
                href="charteredEngineer"
                component={Link}
                to="/charteredEngineer"
                onClick={handleClose}
              >
                <img
                  src={images.certificate}
                  alt="Debt Syndication"
                  title="Debt Syndication"
                  className="img-fluid navIcons"
                />
                &nbsp; Certificate For Chartered Engineer
              </MenuItem>
              <MenuItem
                className={classes.typography}
                href="revivalPackage"
                component={Link}
                to="/revivalPackage"
                onClick={handleClose}
              >
                <img
                  src={images.sickUnit}
                  alt="Debt Syndication"
                  title="Debt Syndication"
                  className="img-fluid navIcons"
                />
                &nbsp; Revival Package To Sick Units
              </MenuItem>
              <MenuItem
                className={classes.typography}
                href="progressReport"
                component={Link}
                to="/progressReport"
                onClick={handleClose}
              >
                <img
                  src={images.progressRep}
                  alt="Debt Syndication"
                  title="Debt Syndication"
                  className="img-fluid navIcons"
                />
                &nbsp; Progress Report
              </MenuItem>
            </Typography>
          </div>
          <div className="col-lg-2 d-none d-lg-block ">
            <img
              src={images.servicesMegaMenuImage}
              alt="About company"
              title="About company"
              className="img-fluid"
            ></img>
          </div>
        </div>
      );
    } else if (currentElement === "careers") {
      return (
        <div className="row paddingAll">
          <div className="col-lg-5 d-none d-lg-block border-right">
            <p>
              <h1 className="h1">Sharma & Associates</h1>
            </p>
            <p>
              Sharma & Associates attracts, develops and retains outstanding
              professionals at all levels of the organization who contribute to
              our culture of teamwork, collegiality and innovation.
            </p>{" "}
          </div>
          <div className="col-lg-5 border-right">
            <Typography onMouseLeave={handleClose}>
              <MenuItem
                className={classes.typography}
                href="career"
                component={Link}
                to="/career"
                onClick={handleClose}
              >
                <img
                  src={images.careerWhy}
                  alt="Debt Syndication"
                  title="Debt Syndication"
                  className="img-fluid navIcons"
                />
                &nbsp; Why Sharma & Associates
              </MenuItem>
              <MenuItem
                className={classes.typography}
                component={Link}
                onClick={handleClose}
                href="WorkAndLife"
                to="/WorkAndLife"
              >
                <img
                  src={images.careerWork}
                  alt="Debt Syndication"
                  title="Debt Syndication"
                  className="img-fluid navIcons"
                />
                &nbsp; Work & Life at Sharma & Associates
              </MenuItem>
              <MenuItem
                className={classes.typography}
                component={Link}
                onClick={handleClose}
                href="CurrentOpening"
                to="/CurrentOpening"
              >
                <img
                  src={images.careerCurrent}
                  alt="Debt Syndication"
                  title="Debt Syndication"
                  className="img-fluid navIcons"
                />
                &nbsp; Current Openings
              </MenuItem>
              <MenuItem
                className={classes.typography}
                component={Link}
                href="apply"
                to="/apply"
                onClick={handleClose}
              >
                <img
                  src={images.careerApply}
                  alt="Debt Syndication"
                  title="Debt Syndication"
                  className="img-fluid navIcons"
                />
                &nbsp;&nbsp; Apply Now
              </MenuItem>
            </Typography>
          </div>
          <div className="col-lg-2 d-none d-lg-block">
            <img
              src={images.careerMegaMenuImage}
              alt="About company"
              title="About company"
              className="img-fluid"
            ></img>
          </div>
        </div>
      );
    }
  };

  const showMegaMenu = (e) => {
    return (
      <Popover
        id={id}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {renderITem()}
      </Popover>
    );
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Router>
      <Navbar
        id="nav-bar-sharma"
        variant="light"
        collapseOnSelect
        expand="lg"
        fixed="top"
        className="NavBarStyles"
      >
        <Container style={{ minWidth: "100%" }}>
          <Navbar.Brand as={Link} to="/" href="/">
            <img
              src={Logo}
              className="d-inline-block align-top ImgResp"
              alt="Sharma logo"
              onClick={() => (window.location.href = "/")}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="mr-auto"
              style={{
                display: "flex",
                justifyContent: "center",
                minWidth: "70%",
              }}
            >
              <Nav.Link
                id="nav-link"
                as={Link}
                to="/about"
                onClick={(event) => {
                  event.preventDefault();
                }}
              >
                {" "}
                <Box
                  display="flex"
                  justifyContent="flex-start"
                  p={1}
                  className="underlineText"
                >
                  <Box
                    p={1}
                    id="aboutus"
                    borderColor="text.primary"
                    fontWeight="fontWeightBold"
                    color="#2d6aa0"
                    onClick={handleClick}
                  >
                    <span>About Us</span>
                  </Box>
                </Box>
              </Nav.Link>
              <Nav.Link
                id="service"
                as={Link}
                to="/service"
                onClick={(event) => {
                  event.preventDefault();
                }}
              >
                <Box
                  display="flex"
                  className="underlineText"
                  justifyContent="flex-start"
                  p={1}
                >
                  <Box
                    id="services"
                    p={1}
                    borderColor="text.primary"
                    fontWeight="fontWeightBold"
                    color="#2d6aa0"
                    onClick={handleClick}
                  >
                    <span>Services</span>
                  </Box>
                </Box>
              </Nav.Link>
              <Nav.Link
                id="career"
                as={Link}
                to="/career"
                onClick={(event) => {
                  event.preventDefault();
                }}
              >
                <Box
                  display="flex"
                  justifyContent="flex-start"
                  p={1}
                  className="underlineText"
                >
                  <Box
                    id="careers"
                    p={1}
                    borderColor="text.primary"
                    fontWeight="fontWeightBold"
                    color="#2d6aa0"
                    onClick={handleClick}
                  >
                    <span>Career</span>
                  </Box>
                </Box>
              </Nav.Link>
              <Nav.Link id="contact" as={Link} to="/contact">
                <Box display="flex" justifyContent="flex-start" p={1}>
                  <Box
                    p={1}
                    borderColor="text.primary"
                    fontWeight="fontWeightBold"
                    color="#2d6aa0"
                  >
                    <span>Contact Us</span>
                  </Box>
                </Box>
              </Nav.Link>
            </Nav>
            <div className="header-r2">
              <span>
                <a href="tel://0120-4228680">0120-4228680</a>
                <a href="tel://+91-9811290561">+91-9811290561</a>
              </span>
            </div>
          </Navbar.Collapse>
        </Container>
        {showMegaMenu()}
      </Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/debtSyndication" component={DebtSyndication} />
        <Route
          exact
          path="/detailedProjectReport"
          component={DetailedProjectReport}
        />
        <Route
          exact
          path="/financialAdvisoryServices"
          component={FinancialAdvisoryServices}
        />
        <Route exact path="/valuationServices" component={ValuationServices} />
        <Route exact path="/tevStudy" component={TevStudy} />
        <Route exact path="/lieReport" component={LieStudy} />
        <Route exact path="/stockAudits" component={StockAudits} />
        <Route exact path="/marketResearch" component={MarketResearch} />
        <Route exact path="/vettingofProjects" component={VettingofProjects} />
        <Route exact path="/charteredEngineer" component={CharteredEngineer} />
        <Route exact path="/revivalPackage" component={RevivalPackage} />
        <Route exact path="/progressReport" component={ProgressReport} />
        <Route exact path="/career" component={Career} />
        <Route exact path="/CurrentOpening" component={CurrentOpening} />
        <Route exact path="/WorkAndLife" component={WorkAndLife} />
        <Route exact path="/apply" component={Apply} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/client" component={Client} />
        <Route exact path="/leaders" component={Leaders} />
        <Route exact path="/life" component={Life} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/privacyPolicy" component={PrivacyPolicy} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default NavBar;
