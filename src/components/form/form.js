import React, { useState } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBContainer,
  MDBModal,
  MDBModalBody,
} from "mdbreact";
import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";
import Axios from "axios";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [displayModal, setDisplayModal] = useState(false);
  const [isEmailInValid, setEmailInValid] = useState(false);
  const [isPhoneInValid, setPhoneInValid] = useState(false);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePhone = (e) => {
    setPhoneInValid(false);
    setPhone(e.target.value);
  };

  const updateCompany = (e) => {
    setCompany(e.target.value);
  };

  const updateMessage = (e) => {
    setMessage(e.target.value);
  };

  const toggle = (value) => {
    setDisplayModal(value);
  };

  const clearFormData = () => {
    setName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setMessage("");
    setMessage("");
  };

  const displayErrorModel = () => {
    return (
      <MDBContainer>
        <MDBModal isOpen={displayModal} frame position="bottom">
          <MDBModalBody className="text-center" className="redText">
            All the Field in the contact us form is Mandatory, Please fill all
            the details!
            <MDBBtn
              color="#f44336 red"
              className="closeModal"
              onClick={() => toggle(false)}
            >
              <span className="closeModal">Close</span>
            </MDBBtn>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  };

  const displaySucessModel = () => {
    return (
      <MDBContainer>
        <MDBModal isOpen={displayModal} frame position="bottom">
          <MDBModalBody className="text-center" className="sucessText">
            <h4 className="alert-heading">Query/Message Sent Sucessfully!!</h4>
            <hr />
            <p>Singh and Associates have been notified via email.</p>
            <MDBBtn color="#f44336 red" className="closeModal">
              <span className="closeModal">Close</span>
            </MDBBtn>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  };

  const submit = () => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let EmailValid = false;
    let PhoneValid = false;

    if (name && email && phone && company && message) {
      if (phone.length == 10) {
        setPhoneInValid(false);
        EmailValid = true;
      } else {
        setPhoneInValid(true);
      }

      if (re.test(String(email).toLowerCase())) {
        setEmailInValid(false);
        PhoneValid = true;
      } else {
        setEmailInValid(true);
      }

      if (EmailValid && PhoneValid) {
        Axios({
          method: "post",
          url:
            "https://us-central1-sharma-associates-4d134.cloudfunctions.net/sendMail",
          data: {
            Name: name,
            Email: email,
            Phone: phone,
            Company: company,
            Message: message,
          },
        }).then((resp) => {
          alert("Query/Message Sent Sucessfully!!");
          clearFormData();
        });
      }
    } else {
      toggle(true);
    }
  };

  return (
    <form autoComplete="off">
      <h5 className="centerText">
        Please feel free to reach out to us, for any questions - query - request
        through below Form.
      </h5>
      <section className="contact-section my-5 ">
        <MDBCard>
          {displayModal ? displayErrorModel() : null}
          <MDBRow>
            <MDBCol lg="7">
              <MDBCardBody className="form">
                <h3 className="mt-4 blueIcon">
                  <MDBIcon icon="envelope" className="pr-2" />
                  Write to us:
                </h3>
                <MDBRow>
                  <MDBCol md="6">
                    <div className="md-form mb-0">
                      <TextField
                        id="name"
                        label="Name"
                        style={{
                          margin: 2,
                          paddingTop: 2,
                          backgroundColor: "white",
                        }}
                        placeholder="Please Enter your name"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                        value={name}
                        onChange={updateName}
                      />
                    </div>
                  </MDBCol>
                  <MDBCol md="6">
                    <div className="md-form mb-0">
                      <TextField
                        id="email"
                        error={isEmailInValid}
                        helperText={
                          isEmailInValid
                            ? "Invalid Email address format!"
                            : null
                        }
                        label="Email"
                        style={{ margin: 2, paddingTop: 2 }}
                        placeholder="Please enter your email address"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                        value={email}
                        onChange={updateEmail}
                      />
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="6">
                    <div className="md-form mb-0">
                      <TextField
                        id="Phone"
                        label="Phone"
                        error={isPhoneInValid}
                        helperText={
                          isPhoneInValid
                            ? "Phone number should be only number or of 10 digit!"
                            : null
                        }
                        style={{ margin: 2, paddingTop: 2 }}
                        placeholder="Please enter your phone number "
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                        value={phone}
                        onChange={updatePhone}
                      />
                    </div>
                  </MDBCol>
                  <MDBCol md="6">
                    <div className="md-form mb-0">
                      <TextField
                        id="Organisation"
                        label="Organisation"
                        style={{ margin: 2, paddingTop: 2 }}
                        placeholder="Please enter the organisation/company"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                        value={company}
                        onChange={updateCompany}
                      />
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="12">
                    <div className="md-form mb-0 ">
                      <TextField
                        id="message"
                        label="Message/Query"
                        style={{ margin: 2, paddingTop: 2 }}
                        placeholder="Please enter the query"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                        value={message}
                        onChange={updateMessage}
                      />
                      <p>&nbsp;</p>
                      <div style={{ textAlign: "center" }}>
                        <Button
                          variant="contained"
                          size="large"
                          onClick={() => submit()}
                          style={{
                            backgroundColor: "#1a237e",
                            borderRadius: 5,
                          }}
                          disableElevation
                        >
                          <span
                            style={{
                              paddingLeft: "50px",
                              paddingRight: "50px",
                            }}
                            className="TextWhie"
                          >
                            Send{" "}
                          </span>
                        </Button>
                        <p>&nbsp;</p>
                      </div>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCol>
            <MDBCol lg="4">
              <MDBCardBody className="contact text-center h-100 blueIcon">
                <h3 className="my-4 pb-2">Contact information</h3>
                <ul className="text-lg-left list-unstyled ml-4">
                  <li>
                    <p className=" text-center h-100 blueIcon">
                      <MDBIcon icon="map-marker-alt " className="pr-2" />
                      Plot No. 32, 3rd Floor, Block- C, Sector-14,Kaushambi,
                      Ghaziabad, Uttar Pradesh-201010.
                    </p>
                    <p>&nbsp;</p>
                  </li>
                  <li>
                    <p className=" text-center h-100 blueIcon">
                      <MDBIcon icon="phone" className="pr-2" />
                      <a href="tel://+91-9811290561">
                        <span className="blueIcon">+91-9811290561 ,</span>
                      </a>
                      <a href="tel://+91-9810290561">
                        {" "}
                        <span className="blueIcon">+91-9810290561, </span>
                      </a>
                      <a href="tel://0120-4228680">
                        {" "}
                        <span className="blueIcon">0120-4228680 </span>
                      </a>
                    </p>
                    <p>&nbsp;</p>
                  </li>
                  <li>
                    <p className=" text-center h-100 blueIcon">
                      <MDBIcon icon="envelope" className="pr-2" />
                      <a href="mailto:contact@sharmaassociate.co.in">
                        {" "}
                        <span className="blueIcon">
                          contact@sharmaassociate.co.in,
                        </span>
                      </a>
                      <a href="mailto:shivmohan@sharmaassociate.co.in">
                        {" "}
                        <span className="blueIcon">
                          shivmohan@sharmaassociate.co.in
                        </span>
                      </a>
                    </p>
                  </li>
                </ul>

                <ul className="list-inline text-center list-unstyled">
                  <li className="list-inline-item">
                    <li className="list-inline-item">
                      <a
                        href="https://www.linkedin.com/in/sharma-associates-b727b01b0/"
                        target="blank"
                        className="p-2 fa-lg w-ic"
                      >
                        <MDBIcon fab icon="linkedin" className="blueIcon" />
                      </a>
                    </li>
                    <a
                      href="https://twitter.com/sharmaassocia12/status/1275684720257441792?s=21"
                      target="blank"
                      className="p-2 fa-lg w-ic"
                    >
                      <MDBIcon fab icon="twitter" className="blueIcon" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.facebook.com/SharmaAssociates-112514077176978"
                      target="blank"
                      className="p-2 fa-lg w-ic"
                    >
                      <MDBIcon fab icon="facebook" className="blueIcon" />
                    </a>
                  </li>
                </ul>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </section>
    </form>
  );
};

export default ContactPage;
