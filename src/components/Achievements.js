import React from "react";
import celebrationimage from "../images/celebrationimage.png"
const Achievements = () => {
  return (
    <>
      <section className="achievement">
        <div className="celebrattion-image">
          <img src={celebrationimage} alt="celebration-image" /> {/* Corrected path */}
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-6">
              <div className="p-40">
                <h3 className="light-black mb-24">
                  The Cricket Love is beyond anything...
                </h3>
                <p className="dark-gray mb-16">
                  Lorem ipsum dolor sit amet consectetur. Nibh id venenatis elit
                  quam posuere vitae aliquam. Velit odio mi duis proin quam
                  eget. Sit vitae sit commodo id sagittis quam lacinia tortor
                  augue. Pellentesque et tellus.
                </p>
                <p className="dark-gray mb-32">
                  Lorem ipsum dolor sit amet consectetur. Nibh id venenatis elit
                  quam posuere vitae aliquam. Velit odio mi duis proin quam
                  eget. Sit vitae sit commodo id sagittis quam lacinia tortor
                  augue. Pellentesque et tellus.
                </p>
                <a href="player-detail.html" className="cus-btn primary">
                  Read More
                  <i className="fal fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="achievement-content ">
            <div className="title light-black">ACHIEVEMENTS</div>
            <div className="achievements">
              <div className="content text-center">
                <h2>100+</h2>
                <h6 className="lightest-gray">Team Members</h6>
              </div>
              <div className="content text-center">
                <h2>120+</h2>
                <h6 className="lightest-gray">Tournament Victories</h6>
              </div>
              <div className="content text-center">
                <h2>20+</h2>
                <h6 className="lightest-gray">Hosting Major Events</h6>
              </div>
              <div className="content text-center">
                <h2>100%</h2>
                <h6 className="lightest-gray">Satisfaction Rate</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievements;