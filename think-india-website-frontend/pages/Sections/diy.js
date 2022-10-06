import Head from "next/head";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

const diy = () => {
  function myfan2() {
    var a = document.getElementById("slidep1");
    var c = document.getElementById("slidep3");
    var d = document.getElementById("slidep4");
    var y = document.getElementById("slidep2");
    if (
      a.style.display === "" ||
      c.style.display === "" ||
      d.style.display === ""
    ) {
      a.style.display = "none";
      c.style.display = "none";
      d.style.display = "none";
      y.style.display = "";
    }
    // else {
    //     x.style.display = "none";
    //   }
  }
  // for image 3
  function myfan3() {
    var a = document.getElementById("slidep1");
    var b = document.getElementById("slidep2");
    var d = document.getElementById("slidep4");
    var y = document.getElementById("slidep3");
    if (
      a.style.display === "" ||
      b.style.display === "" ||
      d.style.display === ""
    ) {
      a.style.display = "none";
      b.style.display = "none";
      d.style.display = "none";
      y.style.display = "";
    }
    // else {
    //     x.style.display = "none";
    //   }
  }
  // for image 4
  function myfan4() {
    var a = document.getElementById("slidep1");
    var b = document.getElementById("slidep2");
    var c = document.getElementById("slidep3");
    var y = document.getElementById("slidep4");
    if (
      a.style.display === "" ||
      b.style.display === "" ||
      c.style.display === ""
    ) {
      a.style.display = "none";
      b.style.display = "none";
      c.style.display = "none";
      y.style.display = "";
    }
    // else {
    //     x.style.display = "none";
    //   }
  }
  // for image 1
  function myfan1() {
    var d = document.getElementById("slidep4");
    var b = document.getElementById("slidep2");
    var c = document.getElementById("slidep3");
    var y = document.getElementById("slidep1");
    if (
      d.style.display === "" ||
      b.style.display === "" ||
      c.style.display === ""
    ) {
      d.style.display = "none";
      b.style.display = "none";
      c.style.display = "none";
      y.style.display = "";
    }
    // else {
    //     x.style.display = "none";
    //   }
  }

  return (
    <div>
      <Head>
        <style>{`
        body,html{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    overflow-x: hidden;
}
          .section_correct {
            align-items: center;
            margin: auto;
          }
          .initiative_head {
            padding: 20px;
            margin-left: 7vw;
            margin-top: 20px;
            font-size: 2rem;
          }
          .container {
            padding: 20px;
            align-items: center;
            
          }

          .myDIV {
            background-image: url("/images/headingBG/ARTIFICIAL\ INTELLIGENCE.svg");
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-position: center;
            height: 70vh;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            background-origin: 0px;
          }
          .webCodeLive {
            margin-top: 30px;
          }

          .webCodeLive_link {
            border: none;
            outline: none;
            border-radius: 5px;
            padding: 5px 15px;
            margin: 20px;
            font-size: 1.1rem;
            background-color: #02aca6;
            color: #fff;
            transition: 0.1s linear;
            box-shadow: 0 0 4px 2px #02aca6;
            background-color: transparent;
            color: #02aca6;
            cursor: pointer;
          }
          .webCodeLive_link:hover {
            color: #fff;
            background-color: #02aca6;
          }

          .diy_head {
            font-family: Poppins;
            font-style: normal;
            font-weight: bold;
            font-size: 40px;
            text-align: center;
            padding: 10px;
            color: #f58220;
          }
          .diy_subhead {
            font-weight: 600;
            font-size: 21px;
            text-align: center;
            color: #20c2f5;
          }
          .diy_back {
            background: #ffffff;
            opacity: 0.92;
            box-shadow: 0px 5px 50px rgba(0, 0, 0, 0.15);
            backdrop-filter: blur(60px);
            /* Note: backdrop-filter has minimal browser support */
            padding-top: 25px;
            padding-bottom: 25px;
            border-radius: 20px;
            /* display: flex; */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }
          .diy_parent {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .diy_back:hover {
            box-shadow: 0px 0px 20px #f58220;
            transition: transform 0.1s ease-out;
          }
          @media screen and (max-width: 1024px) {
            .myDIV {
              background-image: url("/images/headingBG/ARTIFICIAL\ INTELLIGENCE.svg");
              background-repeat: no-repeat;
              background-attachment: fixed;
              background-position: center;
              height: 300px;
              width: 100vw;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .diy_head {
              font-size: 18px;
            }
            .diy_subhead {
              font-size: 10px;
            }
          }

          .first_row_ini {
            display: flex;
            justify-content: center;
          }

          .project_box {
            width: 300px;
            height: 350px;
            border: dotted 1px rgb(255, 255, 255);
            background: #ffffff;
            box-shadow: 0px 0px 10px 1px rgba(153, 176, 250, 0.4);
            border-radius: 10px;
            padding: 20px;
            background: rgb(247, 247, 255);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 20px 15px;
            text-align: center;
          }
          .project_box:hover {
            box-shadow: 0px 0px 10px rgba(229, 233, 246, 0.4);
          }

          .initiHead {
            font-size: 20px;
            font-weight: bold;
            color: #00aeedb7;
            padding: 2px 4px;
          }
          .project_text a:hover {
            text-decoration: none;
          }
          .project_img {
            border-radius: 50%;
            margin: 10px;
            width: 100px;
          }

          /* mobile suitable */

          @media (max-width: 780px) {
            .project_box {
              margin: 15px;
            }
            .first_row_ini {
              flex-direction: column;
              align-items: center;
              margin: 20px;
            }
            .achivements_diy {
              display: flex;
              flex-direction: column !important;
              justify-content: center;
            }
            .achivement_cards {
              margin: 20px auto !important;
              width: 290px !important;
              display: flex;
              flex-direction: column !important;
            }
            .achivement_images img {
              height: 28px;
              padding: 3px !important;
              width: 280px !important;
            }
          }

          /* Achivements  */
          .achivements_diy {
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
          .achivement_cards {
            width: 41vw;
            display: flex;
            flex-direction: row;
            margin: 10px;
            border-radius: 5px;
            padding: 5px;
            background-color: #00aeedb7;
            color: #fff;
            transition: 0.1s linear;
            box-shadow: 0 0 4px 2px #00aeedb7;
            background-color: transparent;
            color: #414141;
          }

          .achivement_cards:hover {
            color: #fff;
            background-color: #00ccff;
          }

          .achivement_images img {
            height: 228px;
            padding: 10px !important;
            width: 20vw;
          }
          .achivement_details {
            padding: 5px;
          }
          .achivement_details p {
            font-size: 1.01rem;
          }
          .achivement_position {
            color: rgb(0, 118, 173);
          }
          .achivement_heading {
            font-size: 1.5rem;
          }

          /* events  */
        `}</style>
      </Head>
      <Navbar />
      <section className="myDIV">
        <div className="container-fluid diy ">
          <div className="container diy_back ">
            <h1 className="diy_head">Do It Yourself (DIY) SECTION</h1>
            <p className="diy_subhead">
              Leading Competetive Coding &amp; Development
            </p>
          </div>
        </div>
      </section>
      <section className="DIY_projects">
        <div className="section_correct">
          <div className="initiative_head">
            <p>
              Our <span style={{ color: "#20c2f5" }}>Projects</span>
            </p>
          </div>
          <div className="first_row_ini">
            <div className="project_box">
              <div className="project_img_all project_text_flex">
                <img
                  className="project_img1 project_img"
                  src="/images/Project/icrtgr.png"
                  alt=""
                />
              </div>
              <div className="project_text project_text_flex">
                <h2 className="initiHead">ICRTGR 2022</h2>
                <p>
                  International Conference on Resilience and Transformation for
                  Global Restructuring - 2022
                </p>
                <div className="webCodeLive">
                  <a className="webCodeLive_link" target="_blanck" href="#">
                    Project
                  </a>
                  <a
                    className="webCodeLive_link"
                    target="_blanck"
                    href="https://icrtgr2022.in/"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
            <div className="project_box">
              <div className="project_img_all project_text_flex">
                <img
                  className="project_img1 project_img"
                  src="/images/Project/youthfest.png"
                  alt=""
                />
              </div>
              <div className="project_text project_text_flex">
                <h2 className="initiHead">{`YouthFest'22 Website`}</h2>
                <p>
                  MNIT Social-Cultural-Sports Fest <br /> (A Three Long) <br />{" "}
                  (13th Jan to 15th Jan 2022)
                </p>
                <div className="webCodeLive">
                  <a className="webCodeLive_link" target="_blanck" href="#">
                    Project
                  </a>
                  <a
                    className="webCodeLive_link"
                    target="_blanck"
                    href="https://www.mnityouthfest.in/"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
            <div className="project_box">
              <div className="project_img_all project_text_flex">
                <img
                  className="project_img1 project_img"
                  src="/images/Project/Food App.jpeg"
                  alt=""
                />
              </div>
              <div className="project_text project_text_flex">
                <h2 className="initiHead">Food Application </h2>
                <p>
                  We are working on a project so that we can book our food
                  before reaching at Canteen
                </p>
                <div className="webCodeLive">
                  <a
                    className="webCodeLive_link"
                    target="_blanck"
                    href="https://github.com/shaurya127/canteenmnit"
                  >
                    Project
                  </a>
                  <a className="webCodeLive_link" target="_blanck" href="#">
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Achivement">
        <div className="section_correct">
          <div className="initiative_head">
            <p>
              Achievement<span style={{ color: "#20c2f5" }}>s</span>
            </p>
          </div>
          <div className="achivements_diy">
            <div className="achivement_cards">
              <div className="achivement_images">
                <img
                  src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/banner/602669f81d2d6_listing_web.jpg?d=1920x557"
                  alt=""
                />
              </div>
              <div className="achivement_details">
                <h3 className="achivement_heading">Uber HackTag (Hackathon)</h3>
                <p className="achivement_position">Semi-finalist</p>
                <p className="achivement_para">
                  Got into semifinals of hackathon organized by UBER and secured
                  all India 46 rank in coding round out of more than 1000 teams
                </p>
              </div>
            </div>
            <div className="achivements_diy">
              <div className="achivement_cards">
                <div className="achivement_images">
                  <img src="/images/Achi/amazon.PNG" alt="" />
                </div>
                <div className="achivement_details">
                  <h3 className="achivement_heading">HackOn with Amazon</h3>
                  <p className="achivement_position"> Semi-Finalist</p>
                  <p className="achivement_para">
                    Out of more than 2300 teams. Worked in the team on the theme
                    shopping experience and created a Serverless web
                    application. <br />{" "}
                    <span style={{ color: "#C05800" }}>
                      Direct Interview call for internship.{" "}
                    </span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="DIY_enebts">
        <div className="section_correct">
          <div className="initiative_head">
            <p>
              Events <span style={{ color: "#20c2f5" }}>2020-2021</span>
            </p>
          </div>
          <div className="events">
            <div className="display_flex" id="slidep1">
              <div className=" event_para">
                <p>
                  THINK INDIA MNIT Jaipur Team, under World Youth Skills Day
                  presents you with {`" CODE QUIZ 2021"`}. This Quiz will test your
                  knowledge about Data structures and algorithms, OOPS and CS
                  fundamentals.
                  <br />
                  Time for some interesting learning!
                  <br />
                  Date: 20th July <br />
                  _Time: 5:00 pm_
                </p>
              </div>
              <div className=" cultural_box">
                <div className="cultural_img">
                  <img
                    src="/images/Event/DIY/event2.png"
                    className="card-img-top"
                    alt="..."
                  />
                  {/* <div
                    className="card-body"
                    style={{
                      backgroundColor: "#20c2f5",
                      color: "#FFFFFF",
                      textAlign: "center",
                    }}
                  >
                    <h5 className="card-title">Code Quiz</h5>
                  </div> */}
                </div>
              </div>
            </div>
            {/* 2nd image content */}
            <div
              className="display_flex"
              id="slidep2"
              style={{ display: "none" }}
            >
              <div className="event_para">
                <p>
                  Wondering how to start your coding journey? Well, #MentoMeet
                  brings you a solution!
                  <br />
                  MentoMeet in collaboration with Think India MNIT Jaipur is
                  organising {`"Coding Road-Map"`}, a coding webinar for both
                  beginners and intermediate programmers, to help them with
                  their coding journey.
                  <br />
                  The webinar covered various skills and difficulties one face
                  during his Coding Journey <br />
                  1. How to start coding journey from scratch to master <br />
                  2. Resume building for interviews <br />
                  3. Choosing the demanding career path in data science,
                  Development or Research. <br />
                  The webinar will be held on 26th March 2021 from 5:15 PM
                  onwards through the (google-meet/webx) platform. The webinar
                  will be led by our mentors from IITs and NITs who are placed
                  in top-notch companies like Amazon, Flipkart, Dream11, JPMC,
                  and Goldman Sachs.
                  <br />
                  This webinar will provide the participants with ample
                  opportunities to learn and grow. So, be sure you attend it and
                  grasp the most out of it.
                  <br />
                  Time: 26th March 2021,5:15 PM
                  <br />
                  <a href=" https://www.mentomeet.com/webinar">
                    Registered yourself
                  </a>{" "}
                  <br />
                  MentoMeet is a one-to-one Mentorship platform. It aims to hone
                  your skills and help you throughout the placement/internship
                  season under the guidance of experts from IITs and NITs who
                  are placed in prestigious fortune companies like jp Morgan,
                  Goldman Sachs, Flipkart, Amazon, etc
                </p>
              </div>
              <div className="  cultural_box">
                <div className=" cultural_img">
                  <img
                    src="/images/Event/DIY/event1.png"
                    className="card-img-top"
                    alt="..."
                  />
                  {/* <div
                    className="card-body"
                    style={{
                      backgroundColor: "#20c2f5",
                      color: "#FFFFFF",
                      textAlign: "center",
                    }}
                  >
                    <h5 className="card-title">
                      Placement Mentorship Workshop
                    </h5>
                  </div> */}
                </div>
              </div>
            </div>
            {/* 3rd image content */}
            <div
              className="display_flex"
              id="slidep3"
              style={{ display: "none" }}
            >
              <div className=" event_para">
                <p>
                  {" "}
                  <span style={{ color: "#20c2f5" }}>
                    {" "}
                    <b>
                      {" "}
                      App Development Workshop in collaboration with{" "}
                      <a href="https://pcon.in/">
                        NIT Jamshedpur Coding Club
                      </a>{" "}
                    </b>
                  </span>
                  <br /> Do you know A PROJECT is mandatory for most of the
                  INTERNSHIP applications? Get ready for this INTERNSHIP SEASON
                  with hands on experience. Think India has brought you an
                  EXCLUSIVE Workshop On {`" ANDROID APP DEV "`} in association with
                  NIT JAMSHEDPUR. Hurry Now ,fill the google form RIGHT NOW if
                  you {`don't`} wanna jeopardize your internship opportunity.
                  <br />
                  <a href="https://forms.gle/J6HckLcd4P4hU4Zh6">
                    Registration Link Closed
                  </a>
                  <br />
                  Date-07/03/2021 (Sunday) <br />
                  Timings: 1:00pm onwards
                  <br />
                  💫INDIA THINKS when MNIT THINK 💫
                </p>
              </div>
              <div className="  cultural_box">
                <div className=" cultural_img">
                  <img
                    src="/images/Event/DIY/event3.png"
                    className="card-img-top"
                    alt="..."
                  />
                  {/* <div
                    className="card-body"
                    style={{
                      backgroundColor: "#20c2f5",
                      color: "#FFFFFF",
                      textAlign: "center",
                    }}
                  >
                    <h5 className="card-title">App Development Workshop</h5>
                  </div> */}
                </div>
              </div>
            </div>
            {/* 4th image content */}
            <div
              className="display_flex"
              id="slidep4"
              style={{ display: "none" }}
            >
              <div className=" event_para">
                <p>
                  {`"Workshops and Recruitment Sessions 2021"`} <br />
                  <span style={{ color: "#20c2f5" }}>
                    {`"DIY Sector- Coding, Robotics, Thinker"`}{" "}
                  </span>
                  presents the very first sessions of the week!
                  <br />
                  When? <br />
                  ~17 January 2021 <br />
                  ~Sunday <br />
                  This would be an amazing opportunity for you to learn and
                  enhance your skills. <br />
                  {`Here's what we've got for you~`} <br />
                  <br />
                  * Vscode
                  <br /> * HTML
                  <br /> * CSS
                  <br /> * Git and GitHub
                  <br /> * How to deploy your website
                  <br /> * Roadmap to learn web development
                  <br />
                  During the sessions, a task will be given within 48 hours and
                  Top 15 will be selected!!
                  <br />
                  Date:- 17 Jan 2021
                  <br /> Time:- 10:00am to 2:00pm with 20 min break.
                </p>
              </div>
              <div className="  cultural_box">
                <div className=" cultural_img">
                  <img
                    src="/images/Event/DIY/event4.png"
                    className="card-img-top"
                    alt="..."
                  />
                  {/* <div
                    className="card-body"
                    style={{
                      backgroundColor: "#20c2f5",
                      color: "#FFFFFF",
                      textAlign: "center",
                    }}
                  >
                    <h5 className="card-title">Web Development Workshop</h5>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="photo_event_more">
            <div className="events_img show_hide">
              <img
                className="events_img1"
                src="/images/Event/DIY/event2.png"
                onClick={myfan1}
                alt=""
              />
            </div>
            <div className="events_img show_hide">
              <img
                className="events_img1"
                src="/images/Event/DIY/event1.png"
                onClick={myfan2}
                alt=""
              />
            </div>
            <div className=" events_img show_hide">
              <img
                className="events_img1"
                src="/images/Event/DIY/event3.png"
                onClick={myfan3}
                alt=""
              />
            </div>
            <div className=" events_img show_hide">
              <img
                className="events_img1"
                src="/images/Event/DIY/event4.png"
                onClick={myfan4}
                alt=""
              />
            </div>
          </div>
          <div></div>
        </div>
      </section>
      <section className="team_part" style={{ marginTop: "100px" }}>
        <div className="section_correct">
          <div className="initiative_head">
            <p>
              Our<span style={{ color: "#20c2f5" }}> Team</span>
            </p>
          </div>
          <div style={{ paddingTop: "25px" }}>
            <div className="head_team_member">
              <p>InCharges</p>
            </div>
            <div
              className="container  incharge "
              style={{ paddingTop: "25px", paddingBottom: "25px", fontSize: "14px" }}
            >
              <div className="row center_horizontal incharge2">
                <div className=" col-md-3 col-6 men">
                  <div style={{ textAlign: "center" }}>
                    <img
                      className="team_image"
                      src="/images/Team/DIY/Inch Saksham Bindal.jpg"
                      alt=""
                    />
                  </div>
                  <div className="team_inf" style={{ textAlign: "center" }}>
                    <p className="team_info" style={{ marginBottom: 0 }}>Saksham Kumar</p>
                    <span className="team_info" style={{ color: "#C05800" }}>
                      2nd Year CSE Department
                    </span>
                  </div>
                </div>
                <div className=" col-md-3 col-6">
                  <div style={{ textAlign: "center" }}>
                    <img
                      className="team_image"
                      src="/images/Team/DIY/Inch. Himesh Maniyar.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="team_inf" style={{ textAlign: "center" }}>
                    <p className="team_info" style={{ marginBottom: 0 }}>Himesh Maniyar</p>
                    <span className="team_info" style={{ color: "#C05800" }}>
                      {" "}
                      2nd Year CSE Department{" "}
                    </span>
                  </div>
                </div>
                <div className=" col-md-3 col-6 men">
                  <div style={{ textAlign: "center" }}>
                    <img
                      className="team_image"
                      src="/images/Team/DIY/Inch Ojaswi Agarwal.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="team_inf" style={{ textAlign: "center" }}>
                    <p className="team_info" style={{ marginBottom: 0 }}>Ojaswi Agarwal</p>
                    <span className="team_info" style={{ color: "#C05800" }}>
                      2nd Year ECE Department
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: "25px" }}>
          <div className="head_team_member">
            <p>Members</p>
          </div>
          <div
            className="container  incharge "
            style={{ paddingTop: "25px", paddingBottom: "25px" }}
          >
            <div className="row incharge2">
              <div className=" col-md-3 col-6 men">
                <div style={{ textAlign: "center" }}>
                  <img className="team_image" src="/images/Team/DIY/lakshyaraj.jpg" alt="" />
                </div>
                <div className="team_inf" style={{ textAlign: "center" }}>
                  <p className="team_info" style={{ marginBottom: 0 }}>Lakshyaraj Singh Rao </p>
                  <span className="team_info" style={{ color: "#C05800" }}>2nd Year CSE Department </span>

                </div>
              </div>
              <div className=" col-md-3 col-6">
                <div style={{ textAlign: "center" }}>
                  <img className="team_image" src="/images/Team/DIY/neelesh.jpeg" alt="" />
                </div>
                <div className="team_inf" style={{ textAlign: "center" }}>
                  <p className="team_info" style={{ marginBottom: 0 }}>Nilesh Prajapati</p>
                  <span className="team_info" style={{ color: "#C05800" }}>2nd Year Chemical Department</span>

                </div>
              </div>
              <div className=" col-md-3 col-6 men">
                <div style={{ textAlign: "center" }}>
                  <img className="team_image" src="/images/Team/DIY/anuj jangid.jpg" alt="" />
                </div>
                <div className="team_inf" style={{ textAlign: "center" }}>
                  <p className="team_info" style={{ marginBottom: 0 }}>Anuj Jangid</p>
                  <span className="team_info" style={{ color: "#C05800" }}>3rd Year ECE Department</span>

                </div>
              </div>
              <div className=" col-md-3 col-6 men">
                <div style={{ textAlign: "center" }}>
                  <img className="team_image" src="/images/Team/DIY/vaibhav.jpg" alt="" />
                </div>
                <div className="team_inf" style={{ textAlign: "center" }}>
                  <p className="team_info" style={{ marginBottom: 0 }}>Vaibhav Bansal</p>
                  <span className="team_info" style={{ color: "#C05800" }}>2nd Year Metallurgy Department</span>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default diy;
