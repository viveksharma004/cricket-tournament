import React from "react";

const Team = () => {
  return (
    <>
      <section className="team p-40">
        <div className="container">
          <div className="heading">
            <div className="left">
              <h2 className="light-black">Meet Our Team</h2>
              <p className="light-black">
                Lorem ipsum dolor sit amet consectetur. Quis <br /> aliquam
                cursus blandit nulla vitae. Eu imperdiet.
              </p>
            </div>
            <a href="./team.html " className="cus-btn primary">
              See All
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <g clipPath="url(#clip0_925_431)">
                  <path
                    d="M19.8739 8.48103C19.5301 8.48103 19.2038 8.55711 18.9102 8.69234C18.675 7.66583 17.7549 6.8975 16.658 6.8975C16.3065 6.8975 15.9733 6.97667 15.6748 7.11762C15.4113 6.13128 14.5103 5.40252 13.442 5.40252C13.121 5.40252 12.8152 5.46842 12.5371 5.5872V2.81113C12.5372 1.53673 11.5004 0.5 10.226 0.5C8.95165 0.5 7.91486 1.53673 7.91486 2.81113V13.8079L6.72321 12.0389L6.70455 12.0157C5.81233 10.9066 4.24263 10.6601 3.05346 11.4425C2.43161 11.8516 2.01035 12.4791 1.86719 13.2095C1.72493 13.9354 1.87544 14.671 2.29099 15.2823L6.54391 21.9861L6.55807 22.0076C7.63001 23.5682 9.40033 24.5 11.2937 24.5H16.0657C19.4399 24.5 22.1851 21.7549 22.1851 18.3807V10.7921C22.1851 9.51777 21.1483 8.48103 19.8739 8.48103ZM20.7788 18.3807C20.7788 20.9795 18.6646 23.0938 16.0657 23.0938H11.2937C9.86786 23.0938 8.53451 22.3941 7.72432 21.2216L3.47201 14.5188L3.45785 14.4974C3.25211 14.1978 3.17735 13.8365 3.24719 13.4799C3.31708 13.1234 3.52277 12.817 3.82633 12.6173C4.39938 12.2403 5.15351 12.3527 5.59183 12.8765L9.32111 18.4123V2.81113C9.32111 2.31214 9.72705 1.90625 10.226 1.90625C10.725 1.90625 11.1309 2.31214 11.1309 2.81113V11.1528H12.5372V7.71369C12.5372 7.2147 12.9431 6.80881 13.442 6.80881C13.941 6.80881 14.3469 7.2147 14.3469 7.71369V11.1528H15.7532V9.20862C15.7532 8.70964 16.1591 8.30375 16.658 8.30375C17.157 8.30375 17.5629 8.70964 17.5629 9.20862V11.1528H18.9692V10.7922C18.9692 10.2932 19.3751 9.88728 19.874 9.88728C20.373 9.88728 20.7789 10.2932 20.7789 10.7922V18.3807H20.7788Z"
                    fill="#F8F8FF"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_925_431">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.5)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
          <div className="team-slider slick-initialized slick-slider slick-dotted">
            <div className="slick-list draggable" style={{padding: '0px'}}>
              <div
                className="slick-track"
                style={{opacity: "1" ,width: "3795px" ,transform: "translate3d(-690px, 0px, 0px)"}}
              >
                <a
                  href="./team.html"
                  className="team-member slick-slide slick-cloned"
                  style={{width: "345px"}}
                  tabindex="-1"
                  role="tabpanel"
                  id=""
                  aria-describedby="slick-slide-control11"
                  data-slick-index="-3"
                  aria-hidden="true"
                >
                  <div className="content">
                    <div className="info">
                      <div className="left-stroke bg-purple"></div>
                      <h3 className="light-black mb-1">Liam Johnson</h3>
                      <h6 className="dark-gray mb-12">BATSMAN / CAPTAIN</h6>
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>

                    <img src="../images/img-2.png" alt="" />
                  </div>
                </a>
                <a
                  href="./team.html"
                  className="team-member slick-slide slick-cloned"
                  style={{width: "345px"}}
                  tabindex="-1"
                  role="tabpanel"
                  id=""
                  aria-describedby="slick-slide-control12"
                  data-slick-index="-2"
                  aria-hidden="true"
                >
                  <div className="content">
                    <div className="info">
                      <div className="left-stroke bg-blue"></div>
                      <h3 className="light-black mb-1">Samuel Davis</h3>
                      <h6 className="dark-gray mb-12">BATSMAN / Keeper</h6>
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>

                    <img src="../images/img-3.png" alt="" />
                  </div>
                </a>
                <a
                  href="./team.html"
                  className="team-member slick-slide slick-cloned"
                  style={{width: "345px"}}
                  tabindex="-1"
                  role="tabpanel"
                  id=""
                  aria-describedby="slick-slide-control13"
                  data-slick-index="-1"
                  aria-hidden="true"
                >
                  <div className="content">
                    <div className="info">
                      <div className="left-stroke bg-blue"></div>
                      <h3 className="light-black mb-1">Caleb Wilson</h3>
                      <h6 className="dark-gray mb-12">BATSMAN</h6>
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <img src="../images/img-4.png" alt="" />
                  </div>
                </a>
                <a
                  href="./team.html"
                  className="team-member slick-slide slick-current slick-active slick-center"
                  style={{width: "345px"}}
                  tabindex="0"
                  role="tabpanel"
                  id="slick-slide10"
                  aria-describedby="slick-slide-control10"
                  data-slick-index="0"
                  aria-hidden="false"
                >
                  <div className="content">
                    <div className="info">
                      <div className="left-stroke bg-green"></div>
                      <h3 className="light-black mb-1">Mason Brown</h3>
                      <h6 className="dark-gray mb-12">BATSMAN</h6>
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>

                    <img src="../images/img-1.png" alt="" />
                  </div>
                </a>
                <a
                  href="./team.html"
                  className="team-member slick-slide slick-active"
                  style={{width: "345px"}}
                  tabindex="0"
                  role="tabpanel"
                  id="slick-slide11"
                  aria-describedby="slick-slide-control11"
                  data-slick-index="1"
                  aria-hidden="false"
                >
                  <div className="content">
                    <div className="info">
                      <div className="left-stroke bg-purple"></div>
                      <h3 className="light-black mb-1">Liam Johnson</h3>
                      <h6 className="dark-gray mb-12">BATSMAN / CAPTAIN</h6>
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>

                    <img src="../images/img-2.png" alt="" />
                  </div>
                </a>
                <a
                  href="./team.html"
                  className="team-member slick-slide"
                  style={{width: "345px"}}
                  tabindex="-1"
                  role="tabpanel"
                  id="slick-slide12"
                  aria-describedby="slick-slide-control12"
                  data-slick-index="2"
                  aria-hidden="true"
                >
                  <div className="content">
                    <div className="info">
                      <div className="left-stroke bg-blue"></div>
                      <h3 className="light-black mb-1">Samuel Davis</h3>
                      <h6 className="dark-gray mb-12">BATSMAN / Keeper</h6>
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>

                    <img src="../images/img-3.png" alt="" />
                  </div>
                </a>
                <a
                  href="./team.html"
                  className="team-member slick-slide"
                  style={{width: "345px"}}
                  tabindex="-1"
                  role="tabpanel"
                  id="slick-slide13"
                  aria-describedby="slick-slide-control13"
                  data-slick-index="3"
                  aria-hidden="true"
                >
                  <div className="content">
                    <div className="info">
                      <div className="left-stroke bg-blue"></div>
                      <h3 className="light-black mb-1">Caleb Wilson</h3>
                      <h6 className="dark-gray mb-12">BATSMAN</h6>
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <img src="../images/img-4.png" alt="" />
                  </div>
                </a>
                <a
                  href="./team.html"
                  className="team-member slick-slide slick-cloned"
                  style={{width: "345px"}}
                  tabindex="-1"
                  role="tabpanel"
                  id=""
                  aria-describedby="slick-slide-control10"
                  data-slick-index="4"
                  aria-hidden="true"
                >
                  <div className="content">
                    <div className="info">
                      <div className="left-stroke bg-green"></div>
                      <h3 className="light-black mb-1">Mason Brown</h3>
                      <h6 className="dark-gray mb-12">BATSMAN</h6>
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>

                    <img src="../images/img-1.png" alt="" />
                  </div>
                </a>
                <a
                  href="./team.html"
                  className="team-member slick-slide slick-cloned slick-center"
                  style={{width: "345px"}}
                  tabindex="-1"
                  role="tabpanel"
                  id=""
                  aria-describedby="slick-slide-control11"
                  data-slick-index="5"
                  aria-hidden="true"
                >
                  <div className="content">
                    <div className="info">
                      <div className="left-stroke bg-purple"></div>
                      <h3 className="light-black mb-1">Liam Johnson</h3>
                      <h6 className="dark-gray mb-12">BATSMAN / CAPTAIN</h6>
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>

                    <img src="../images/img-2.png" alt="" />
                  </div>
                </a>
                <a
                  href="./team.html"
                  className="team-member slick-slide slick-cloned"
                  style={{width: "345px"}}
                  tabindex="-1"
                  role="tabpanel"
                  id=""
                  aria-describedby="slick-slide-control12"
                  data-slick-index="6"
                  aria-hidden="true"
                >
                  <div className="content">
                    <div className="info">
                      <div className="left-stroke bg-blue"></div>
                      <h3 className="light-black mb-1">Samuel Davis</h3>
                      <h6 className="dark-gray mb-12">BATSMAN / Keeper</h6>
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>

                    <img src="../images/img-3.png" alt="" />
                  </div>
                </a>
                <a
                  href="./team.html"
                  className="team-member slick-slide slick-cloned"
                  style={{width: "345px"}}
                  tabindex="-1"
                  role="tabpanel"
                  id=""
                  aria-describedby="slick-slide-control13"
                  data-slick-index="7"
                  aria-hidden="true"
                >
                  <div className="content">
                    <div className="info">
                      <div className="left-stroke bg-blue"></div>
                      <h3 className="light-black mb-1">Caleb Wilson</h3>
                      <h6 className="dark-gray mb-12">BATSMAN</h6>
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <img src="../../images/img-4.png" alt="" />
                  </div>
                </a>
              </div>
            </div>
            <ul className="slick-dots"  role="tablist">
              <li className="slick-active" role="presentation">
                <button
                  type="button"
                  role="tab"
                  id="slick-slide-control10"
                  aria-controls="slick-slide10"
                  aria-label="1 of 2"
                  tabindex="0"
                  aria-selected="true"
                >
                  1
                </button>
              </li>
              <li className="" role="presentation">
                <button
                  type="button"
                  role="tab"
                  id="slick-slide-control11"
                  aria-controls="slick-slide11"
                  aria-label="2 of 2"
                  tabindex="-1"
                >
                  2
                </button>
              </li>
              <li role="presentation" className="">
                <button
                  type="button"
                  role="tab"
                  id="slick-slide-control12"
                  aria-controls="slick-slide12"
                  aria-label="3 of 2"
                  tabindex="-1"
                >
                  3
                </button>
              </li>
              <li role="presentation" className="">
                <button
                  type="button"
                  role="tab"
                  id="slick-slide-control13"
                  aria-controls="slick-slide13"
                  aria-label="4 of 2"
                  tabindex="-1"
                >
                  4
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
