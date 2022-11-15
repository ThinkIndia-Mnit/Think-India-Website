import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useContext } from "react";
import AnnounceContext from "../Context/Announcement/AnnounceContext";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
var Carousel = require("react-responsive-carousel").Carousel;
import { BlogCarousel } from "../Components/BlogCarousel";
import Kwick from "../Components/Kwick";
import Activity from "../Components/Activity";
import TypeAnimation from "react-type-animation";

export default function Home() {
  const { announces } = useContext(AnnounceContext);

  return (
    <div>
      <Navbar />
      <section className="home">
        <div id="line1">Welcome To</div>
        <div id="line2">
          <TypeAnimation
            sequence={["Think India MNIT", 1500, "VSS", 1500]}
            wrapper="span"
            repeat={Infinity}
          />
        </div>
      </section>
      <section
        style={{
          background: "#FFFFFF",
          boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.1)",
          padding: "0 50px",
          marginTop: "30px",
          paddingBottom: "20px",
        }}
      >
        <div className="container" style={{ paddingTop: "42px" }}>
          <div style={{ paddingLeft: "20px" }}>
            <div className="heading_under">
              <div className="initiative_head">
                <p>
                  About <span style={{ color: "#20c2f5" }}>TIMJ</span>
                </p>
              </div>

              <img
                style={{
                  // width: "102px",
                  // height: "116px",
                  paddingRight: "30px",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                id="TILogo"
                src="images/thinkIndiaLogo.png"
                alt=""
              />
            </div>
          </div>
          <br />
          <div className="row center img_div">
            <ul className="social-icons">
              <li>
                <a
                  className="facebook"
                  href="https://www.facebook.com/search/top?q=think%20india%20rajasthan"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a
                  className="twitter"
                  href="https://twitter.com/thinkindiaorg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a
                  className="youtube"
                  href="https://www.youtube.com/ThinkIndiaorg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-youtube" />
                </a>
              </li>
              <li>
                <a
                  className="linkedin"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li>
                <a className="github" href="#" target="_blank" rel="noreferrer">
                  <i className="fab fa-github" />
                </a>
              </li>
              <li>
                <a
                  className="instagram"
                  href="https://instagram.com/thinkindiamnit?igshid=YmMyMTA2M2Y="
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
          <div className="row para_about">
            <div className="col c-6 parimg">
              <div className="video-responsive">
                <iframe
                  id="para_img"
                  // width="853"
                  // height="480"
                  src={`https://www.youtube.com/embed/3ZBKModopwU`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
              </div>

              {/* <img id="para_img" src="images/about_image.png" alt="" /> */}
            </div>
            <div className="col  col-md-7 para">
              <p id="para1">
                Think India is an initiative to bring together the best talent
                of this country and to infuse them with a nation first attitude.
                An active forum of researchers, professionals and students where
                they debate on national issues, raise their concern and offer
                innovative solutions to problems. It is a platform for the
                leaders of tomorrow.it is the only way to win the battle of
                minds which is being relentlessly waged by the forces of anarchy
                and those who want the destruction of India. Think India
                connects and introduce them to the change makers and the process
                of development.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          background: "#FFFFFF",
          boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.1)",
          marginTop: "30px",
          paddingBottom: "20px",
        }}
      >
        <div className="container" style={{ paddingTop: "42px" }}>
          <div style={{ paddingLeft: "20px" }}>
            <div className="initiative_head">
              <p>
                <span style={{ color: "#20c2f5" }}>TIMJ</span> Sections
              </p>
            </div>
            <Kwick />

            {/* <div style={{ marginTop: "40px" }}>
              <img src="images/section.png" width="100%" alt="">
              <div className="row col-12">
                <div className="col-2" id="sections_col">
                  <img
                    src="../image_home/design.svg"
                    width="100%"
                    height="100%"
                  ></img>
                  <h5>Art and Design</h5>
                </div>
                <div className="col-2" id="sections_col">
                  <img
                    src="../image_home/diy.svg"
                    width="100%"
                    height="100%"
                  ></img>
                  <h5>DIY</h5>
                </div>
                <div className="col-2" id="sections_col">
                  <img
                    src="../image_home/entre..svg"
                    width="100%"
                    height="100%"
                  ></img>
                  <h5>Entrepreneurship</h5>
                </div>
                <div className="col-2" id="sections_col">
                  <img
                    src="../image_home/heritage.svg"
                    width="100%"
                    height="100%"
                  ></img>
                  <h5>Heritage and Environment</h5>
                </div>
                <div className="col-2" id="sections_col">
                  <img
                    src="../image_home/debating.svg"
                    width="100%"
                    height="100%"
                  ></img>
                  <h5>Debating</h5>
                </div>
                <div className="col-2" id="sections_col">
                  <img
                    src="../image_home/publi..svg"
                    width="100%"
                    height="100%"
                  ></img>
                  <h5>Publicity and Management</h5>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <BlogCarousel />
      {/* <section
        style={{
          marginTop: "50px",
          background: "#FFFFFF",
          marginBottom: "60px",
          boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          className="container"
          style={{ paddingTop: "30px", paddingBottom: "25px" }}
        >
          <div id="accordion">
            <div className="card">
              <div className="card-header">
                <a
                  className="card-link"
                  data-toggle="collapse"
                  href="#description1"
                >
                
                <Link href="/event">
                <div className="initiative_head2 ">
                  <p>ANNOUNCEMENTS</p>
                  </div>
                </Link>
            
          
                </a>
              </div>
              <div
                id="description1"
                className="collapse show"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <div
                    className="col-md-12 text-center w-100"
                    style={{ paddingTop: "42px" }}
                  >
                    {announces &&
                      Array.from(announces).map((an) => (
                        <p key={an._id}>
                          {an.isNew && <img src="images/new.png" alt="" />}{" "}
                          {an.announce}
                        </p>
                      ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <a
                  className="collapsed card-link"
                  data-toggle="collapse"
                  href="#description2"
                >
           <Link href="/event">
                <div className="initiative_head2 ">
                  <p>COMPETETIONS</p>
                  </div>
                </Link>
                </a>
              </div>
              <div
                id="description2"
                className="collapse"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <div
                    className="col-md-12 text-center w-100"
                    style={{ paddingTop: "42px" }}
                  >
                    <p>
                      {" "}
                      <img src="images/new.png" alt="" /> Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>
                    <p>
                      <img src="images/new.png" alt="" /> Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor adipiscing elit, sed do eiusmod
                      tempor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section>
        <div className="container" style={{ paddingTop: "42px" }}>
          <div style={{ paddingLeft: "20px" }}>
            <div className="initiative_head">
              <p>
                <span style={{ color: "#20c2f5" }}>TIMJ</span> Activities
              </p>
            </div>
          </div>
          <div className="activityc">
            <Carousel
              showArrows={true}
              background={null}
              showThumbs={false}
              autoPlay={true}
              infiniteLoop={true}
              transitionTime={500}
              dynamicHeight={true}
              showStatus={false}
            >
              <Activity src="images/achievement/a1.jpg" />
              <Activity src="images/achievement/a2.jpg" />
              <Activity src="images/achievement/a3.jpg" />
              <Activity src="images/achievement/a4.jpg" />
              <Activity src="images/achievement/a5.jpg" />
              <Activity src="images/achievement/a6.jpg" />
              <Activity src="images/achievement/a7.jpg" />
              <Activity src="images/achievement/a8.jpg" />
            </Carousel>
          </div>
          {/* <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to={1} />
              <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src="images/background_heading.jpeg"
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="images/background_heading.jpeg"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="images/about_image.png"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div> */}
        </div>
      </section>
      <section
        style={{
          background: "#FFFFFF",
          boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.1)",
          marginTop: "30px",
          paddingBottom: "150px",
        }}
      >
        <div className="container" style={{ paddingTop: "42px" }}>
          <div style={{ paddingLeft: "20px" }}>
            <div className="initiative_head">
              <p>
                Person Of <span style={{ color: "#20c2f5" }}>TIMJ</span>
              </p>
            </div>
          </div>
          <div
            id="container"
            style={{
              marginTop: "50px",
              backgroundImage: "url(./images/Rectangle.png)",
              border: "solid 10px white",
              borderRadius: "40px",
            }}
          >
            {/* <img src="images/Rectangle.png" id="img1" width="100%" alt=""> */}
            <div
              className="imagesofperson row"
              style={{
                height: "100%",
                textAlign: "center",
                paddingTop: "75px",
                paddingBottom: "15px",
                marginBottom: "10px",
              }}
            >
              <div className=" person_pic">
                <img
                  className="team_image"
                  src="/images/Team/executive/DeepakShukla.png"
                  alt=""
                />
                <div className="team_inf">
                  <p className="team_info" style={{ marginBottom: 0 }}>
                    Deepak Shukla
                  </p>
                  <span className="team_info" style={{ color: "#C05800" }}>
                    State Covener{" "}
                  </span>
                  <span className="team_info">Jaipur Prant</span>
                </div>
              </div>
              <div className="person_pic">
                <img
                  className="team_image"
                  src="images/Team/executive/Mitali Singh.png"
                  alt=""
                />
                <div className="team_inf">
                  <p className="team_info" style={{ marginBottom: 0 }}>
                    Mitali Singh
                  </p>
                  <span className="team_info" style={{ color: "#C05800" }}>
                    President{" "}
                  </span>
                  <span className="team_info">TIMJ</span>
                </div>
              </div>
              <div className=" person_pic">
                <img
                  className="team_image"
                  src="images/Team/executive/Sukriti Bohra.jpg"
                  alt=""
                />
                <div className="subtext team_inf">
                  <p className="team_info" style={{ marginBottom: 0 }}>
                    Sukriti Bohra
                  </p>
                  <span className="team_info" style={{ color: "#C05800" }}>
                    Vice President{" "}
                  </span>
                  <span className="team_info">TIMJ</span>
                </div>
              </div>
              <div className=" person_pic">
                <img
                  className="team_image"
                  src="images/Team/executive/GauravKargwal.png"
                  alt=""
                />
                <div className="team_inf">
                  <p className="team_info" style={{ marginBottom: 0 }}>
                    Gaurav Kargwal
                  </p>
                  <span className="team_info" style={{ color: "#C05800" }}>
                    Vice President{" "}
                  </span>
                  <span className="team_info">TIMJ</span>
                </div>
              </div>
            </div>
            <div
              className="imagesofperson row"
              style={{
                height: "100%",
                textAlign: "center",
                paddingTop: "15px",
                paddingBottom: "75px",
                marginBottom: "10px",
              }}
            >
              <div className="person_pic">
                <img
                  className="team_image"
                  src="images/Team/executive/Sakshi Singh.jpg"
                  alt=""
                />
                <div className="team_inf">
                  <p className="team_info" style={{ marginBottom: 0 }}>
                    Sakshi Singh
                  </p>
                  <span className="team_info" style={{ color: "#C05800" }}>
                    Secretary{" "}
                  </span>
                  <span className="team_info">TIMJ</span>
                </div>
              </div>
              <div className="person_pic">
                <img
                  className="team_image"
                  src="images/Team/executive/DeepakShukla.png"
                  alt=""
                />
                <div className="team_inf">
                  <p className="team_info" style={{ marginBottom: 0 }}>
                    Aman
                  </p>
                  <span className="team_info" style={{ color: "#C05800" }}>
                    Secretary{" "}
                  </span>
                  <span className="team_info">TIMJ</span>
                </div>
              </div>
              <div className="person_pic">
                <img
                  className="team_image"
                  src="images/Team/executive/Manisha Sattawan.jpg"
                  alt=""
                />
                <div className="team_inf">
                  <p className="team_info" style={{ marginBottom: 0 }}>
                    Manisha Sattawan
                  </p>
                  <span className="team_info" style={{ color: "#C05800" }}>
                    Treasurer{" "}
                  </span>
                  <span className="team_info">TIMJ</span>
                </div>
              </div>
              <div className="person_pic">
                <img
                  className="team_image"
                  src="images/Team/executive/RahulGarg.png"
                  alt=""
                />
                <div className="subtext team_inf">
                  <p className="team_info" style={{ marginBottom: 0 }}>
                    Rahul Garg
                  </p>
                  <span className="team_info" style={{ color: "#C05800" }}>
                    Treasurer{" "}
                  </span>
                  <span className="team_info">TIMJ</span>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
