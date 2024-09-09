import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
const Testimonials = () => {
  return (
    <>
      <MDBContainer className="py-5">
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="10" xl="8" className="text-center">
            <h3 className="mb-4 light-black">Player Testimonials</h3>
            <p className="mb-4 pb-2 mb-md-5 pb-md-0 light-black">
              Successful hosted tournaments.... <br /> Testimonial give us the
              real feedback right...?
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow className="text-center d-flex align-items-stretch">
          <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
            <MDBCard className="testimonial-card">
              <div
                className="card-up"
                style={{ backgroundColor: "#9d789b" }}
              ></div>
              <div className="avatar mx-auto bg-white">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT17YTnjqY2eQqeD7MzqXlTf1IdKh1GUIVtig&s"
                  className="rounded-circle img-fluid"
                  alt=""
                />
              </div>
              <MDBCardBody>
                <h4 className="mb-4">Rohit Sharma</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  As an avid gamer and tournament enthusiast, I've had my fair share of experiences with various tournament platforms.
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
            <MDBCard className="testimonial-card">
              <div
                className="card-up"
                style={{ backgroundColor: "#7a81a8" }}
              ></div>
              <div className="avatar mx-auto bg-white">
                <img alt=""
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSssu8YaWakA3bDc_QTN-9vwf6zTTsmeQ1pHA&s"
                  className="rounded-circle img-fluid"
                />
              </div>
              <MDBCardBody>
                <h4 className="mb-4">MS Dhoni</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  As an avid gamer and tournament enthusiast, I've had my fair share of experiences with various tournament platforms.
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
            <MDBCard className="testimonial-card">
              <div
                className="card-up"
                style={{ backgroundColor: "#6d5b98" }}
              ></div>
              <div className="avatar mx-auto bg-white">
                <img
                  src="https://www.hindustantimes.com/static-content/1y/cricket-logos/players/virat-kohli.png"
                  className="rounded-circle img-fluid"
                  alt=""
                />
              </div>
              <MDBCardBody>
                <h4 className="mb-4">Virat Kohli</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  As an avid gamer and tournament enthusiast, I've had my fair share of experiences with various tournament platforms.
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Testimonials;
