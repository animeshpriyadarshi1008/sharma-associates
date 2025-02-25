import React from "react";
import "../../css/App.css";
import Form from "../form/form";
import { Link } from "react-router-dom";

const footer = () => (
  <div className="footer ">
    <div className="contactUsFooter">
      <Form />
    </div>

    <div className="footer-container">
      <div className="row">
        <div className="col-md-6 mb-2 text-left">
          <Link to="/privacyPolicy" className="link">
            Privacy Policy
        </Link>
        </div>
        <div className="col-md-6 text-right">
          © www.sharmaAsociates.com, All rights reserved.
        </div>
      </div>
    </div>
  </div>
);
export default footer;
