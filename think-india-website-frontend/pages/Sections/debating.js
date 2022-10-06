import Head from "next/head";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const debating = () => {
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
        <style>{`/* *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    overflow-x: hidden;
} */
body,html{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    overflow-x: hidden;
}
.section_correct{
    align-items: center;
    margin: auto;
}
.initiative_head{
    padding: 20px;
    margin-left:7vw ;
    margin-top: 20px;
    font-size: 2rem;
}
.container{
    padding: 20px;
}

.myDIV{
    background-image: url("/images/headingBG/debate.svg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    height: 60vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-origin: 0px;
  

}
.webCodeLive{
   margin-top: 30px;
}

.webCodeLive_link{
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 5px 15px;
    margin: 20px !important;
    font-size: 1.1rem;
    background-color: #02aca6;
    color: #fff;
    transition: .1s linear;
    box-shadow: 0 0 4px 2px #02aca6;
    background-color: transparent;
    color: #02aca6;
    cursor: pointer;
}

.webCodeLive_link:hover{
    color: #fff;
    background-color: #02aca6;
}
.webCodeLive_link_week{
    color: #fff !important;
    background-color: #02aca6 !important;
}
.webCodeLive_link_week:hover{
    color: #02aca6 !important;
    background-color: #fff !important;
}

.debate_head{
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    text-align: center;
    padding: 10px;
    color: #F58220;
}
.debate_subhead{
    font-weight: 600;
    font-size: 21px;
    text-align: center;
    color: #20C2F5;
     
}
.debate_back{
    background: #FFFFFF;
    opacity: .92;
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
.debate_parent{
    display: flex;
    justify-content: center;
    align-items: center;

}
.debate_back:hover{
    box-shadow: 0px 0px 20px #F58220;
    transition: transform .1s ease-out;
}
@media screen and (max-width: 1024px) {
    
.myDIV{
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    height: 300px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

}

    .debate_head{
        font-size: 18px;
    }
    .debate_subhead{
        font-size: 10px;
    }
}

.first_row_ini{
    display: flex;
    justify-content: center;
}


.project_box{
    width: 300px;
    height: 250px;
    border: dotted 1px rgb(255, 255, 255);
    background: #FFFFFF;
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
.project_box:hover{
    box-shadow: 0px 0px 10px rgba(229, 233, 246, 0.4);
}

.initiHead{
    font-size: 20px;
    font-weight: bold;
    color: #00aeedb7;
    padding: 2px 4px;
}
.project_text a:hover{
    text-decoration: none;
    
}
.project_img{
    border-radius: 50%;
    margin: 10px;
}

/* mobile suitable */

@media (max-width:780px)
{
  
    .project_box{
        margin: 15px;
    }
    .first_row_ini
  {
    flex-direction: column;
    align-items: center;
    margin: 20px;
    
  }
  .achivements_debate{
    display: flex;
    flex-direction: column !important;
    justify-content: center;
    
    }
    .achivement_cards{
        margin:20px auto !important;
        width: 310px !important;
        display: flex;
        flex-direction: column !important;
    }
    .achivement_images img{
        height: 228px;
        padding: 3px !important;
        width: 70vw !important;
        
    }

}

/* Achivements  */
.achivements_debate{
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.achivement_cards{
    width: 41vh;
    display: flex;
    flex-direction: row;
    margin: 10px;
    border-radius: 5px;
    padding: 5px;
    background-color: #00aeedb7;
    color: #fff;
    transition: .1s linear;
    box-shadow: 0 0 4px 2px #00aeedb7;
    background-color: transparent;
    color: #414141;
}

.achivement_cards:hover{
    color: #fff;
    background-color: #00ccff;
}

.achivement_images img{
    height: 228px;
    padding: 10px !important;
    width:20vw ;
}
.achivement_details{
    padding: 5px;
}
.achivement_details p{
   font-size: 1.01rem;
}
.achivement_position{
    color: rgb(0, 118, 173);
}
.achivement_heading{
    font-size: 1.5rem;
}

@media (max-width:780px)
{

  body{
    margin: 0px;
    padding: 0px;}
  }

  }
  @media (max-width:400px)
{

  body{
    margin: 0px;
    padding: 0px;}
  }
/* Purpose  */
.purpose_debate{
    border: 3px solid red;
    border-radius: 5px !important;
    border-image: Linear-gradient(90deg, #7a99ff 14.285%,#3998ff 28.57%,#4ecaff 42.855%,#ff7979 57.14%,#ffad4e 71.425%,#ffad4e 85.71%,#ff7979) 5 !important;
}
.purpose_debate:hover{
    box-shadow: 0px 0px 10px #bdbdbd !important;
    backdrop-filter: blur(60px) !important;
    /* color: #F58220; */
 }`}</style>
      </Head>
      <Navbar />
      <section className="myDIV">
        <div className="container-fluid debate ">
          <div className="container debate_back ">
            <h1 className="debate_head">DEBATING SECTION</h1>
            <p className="debate_subhead">
              It is better to debate a question without settling it than to
              settle a question without debating it
            </p>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="container col purpose_debate">
          <div
            className="initiative_head"
            style={{ textAlign: "center", margin: "0px" }}
          >
            <p>
              Our <span style={{ color: "#20c2f5" }}>Purpose</span>
            </p>
          </div>
          <div style={{ textAlign: "center", fontSize: "1rem" }}>
            <p>
              {" "}
              Opportunities to nourish public speaking skills. Enhance knowledge
              base through initiatives like OR v/s AND.
              <br /> Improving quick analytical skills about various topics.
            </p>
          </div>
        </div>
      </section>
      <section className="debate_projects">
        <div className="section_correct">
          <div className="initiative_head">
            <p>
              Working <span style={{ color: "#20c2f5" }}>Strategy</span>
            </p>
          </div>
          <div className="first_row_ini deb_ws">
            <div>
              <div className="project_box">
                <div className="project_text project_text_flex">
                  <h2 className="initiHead">Quiz Competetion</h2>
                  <p>
                    We provide a hard platform to young enthusiasts to hone their
                    public speaking skills to perfection.
                  </p>
                  <div className="webCodeLive">
                    <p
                      className="webCodeLive_link webCodeLive_link_week"
                      href="#"
                    >
                      WEEK ONE{" "}
                    </p>
                    <a className="webCodeLive_link" href="#">
                      Register
                    </a>
                  </div>
                </div>
              </div>
              <div className="project_box">
                <div className="project_text project_text_flex">
                  <h2 className="initiHead">Debate Competetion</h2>
                  <p>1st Week of Every Month Our Team Organise a Quiz Event</p>
                  <div className="webCodeLive">
                    <p
                      className="webCodeLive_link webCodeLive_link_week"
                      href="#"
                    >
                      WEEK TWO{" "}
                    </p>
                    <a className="webCodeLive_link" href="#">
                      Register
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="project_box">
                <div className="project_text project_text_flex">
                  <h2 className="initiHead">Vivechana</h2>
                  <p>
                    Intent on spreading awareness on pertinent issues that concern
                    us.{" "}
                  </p>
                  <div className="webCodeLive">
                    <p
                      className="webCodeLive_link webCodeLive_link_week"
                      href="#"
                    >
                      WEEK THREE{" "}
                    </p>
                    <a className="webCodeLive_link" href="#">
                      Watch
                    </a>
                  </div>
                </div>
              </div>
              <div className="project_box">
                <div className="project_text project_text_flex">
                  <h2 className="initiHead">{`Let's Talks`}</h2>
                  <p>
                    Meetup and discussion week for team and deciding thi coming
                    week schdule.
                  </p>
                  <div className="webCodeLive">
                    <p
                      className="webCodeLive_link webCodeLive_link_week"
                      href="#"
                    >
                      WEEK FOUR{" "}
                    </p>
                    <a className="webCodeLive_link" href="#">
                      watch
                    </a>
                  </div>
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
          <div className="achivements_debate">
            <div className="achivements_debate">
              <div className="achivement_cards">
                <div className="achivement_images">
                  <img
                    src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/banner/602669f81d2d6_listing_web.jpg?d=1920x557"
                    alt=""
                  />
                </div>
                <div className="achivement_details">
                  <h3 className="achivement_heading">HackOn with Amazon</h3>
                  <p className="achivement_position"> Semi-Finalist</p>
                  <p className="achivement_para">
                    Out of more than 2300 teams. Worked in the team on the theme
                    shopping experience and created a Serverless web
                    application. <br />
                    <span style={{ color: "#C05800" }}>
                      Direct Interview call for internship.{" "}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="debate_enebts">
        <div className="section_correct">
          <div className="initiative_head">
            <p>
              Event<span style={{ color: "#20c2f5" }}>s</span>
            </p>
          </div>
          <div className="events">
            <div className="display_flex" id="slidep1">
              <div className=" event_para">
                <p>
                  {" "}
                  <span>
                    <b>Think India Institute Lecture Series (TIILES)</b>
                  </span>{" "}
                  <br />
                  <span>
                    <b>Organised Once in a Month</b>
                  </span>{" "}
                  <br />
                  During the lockdown previous year, under Think India Institute
                  Lecture Series(TIILES), eminent expert speakers like Dr.
                  Tanuja Nesari Ma’am and Parinishtha Yadav Ma’am were invited
                  to share their valuable insights. Vivechana and placement
                  talks are some other events we organize.{" "}
                </p>
              </div>
              <div className=" cultural_box">
                <div className="cultural_img">
                  <img
                    src="/images/Event/debate/tiles.PNG"
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
                    <h5 className="card-title">TIILES</h5>
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
                  <span>
                    <b>And V/S Or Initiative</b>
                  </span>{" "}
                  <br />
                  This initiative of ours brings out the stark contrast between
                  words that are commonly misinterpreted and conceived similar
                  to each other. Objective of this initiative is to highlight
                  the very fine line of difference between such words, thus
                  encouraging us to pay heed to the tit-bits. <br />
                  For example: Yogurt vs Curd, Author vs Writer, Film vs Movie,
                  etc.
                </p>
              </div>
              <div className="  cultural_box">
                <div className=" cultural_img">
                  <img
                    src="/images/Event/debate/and vs or.PNG"
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
                    <h5 className="card-title">And V/S Or Initiative</h5>
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
                  <span>
                    <b>Our Debate Competetion</b>
                  </span>{" "}
                  <br />
                  We conducted several debates, both offline as well as online,
                  with emphasis on contemporary topics. Take for instance:{" "}
                  <br />
                  <br /> • Is farmer agitation justified?
                  <br /> • NEP 2020
                  <br /> • Should our country implement lockdown again in the
                  wake of new Omicron variant?
                  <br /> • Social justice
                  <br /> • Should government exercise control over social media?
                </p>
              </div>
              <div className="  cultural_box">
                <div className=" cultural_img">
                  <img
                    src="/images/Event/debate/debate.PNG"
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
                    <h5 className="card-title">Debate Competetion</h5>
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
                  <span>
                    <b>Quiz Competetion</b>
                  </span>{" "}
                  <br />
                  Quizzes are conducted on a regular basis; like Quiz-o-mania
                  and Quizohilic, to name a few.
                </p>
              </div>
              <div className="  cultural_box">
                <div className=" cultural_img">
                  <img
                    src="/images/Event/debate/quiz.PNG"
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
                    <h5 className="card-title">Quiz Competetion</h5>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="photo_event_more">
            <div className="events_img show_hide">
              <img
                className="events_img1"
                src="/images/Event/debate/tiles.PNG"
                onClick={myfan1}
                alt=""
              />
            </div>
            <div className="events_img show_hide">
              <img
                className="events_img1"
                src="/images/Event/debate/and vs or.PNG"
                onClick={myfan2}
                alt=""
              />
            </div>
            <div className=" events_img show_hide">
              <img
                className="events_img1"
                src="/images/Event/debate/debate.PNG"
                onClick={myfan3}
                alt=""
              />
            </div>
            <div className=" events_img show_hide">
              <img
                className="events_img1"
                src="/images/Event/debate/quiz.PNG"
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
              className="container  incharge incharge2"
              style={{ paddingTop: "25px", paddingBottom: "25px", fontSize: "14px" }}
            >
              <div className="row center_horizontal">
                <div className=" col-md-3 col-6 men">
                  <div style={{ textAlign: "center" }}>
                    <img
                      className="team_image"
                      src="/images/Team/debate/Inch harshvardhan singh rathore.jpg"
                      alt=""
                    />
                  </div>
                  <div className="team_inf" style={{ textAlign: "center" }}>
                    <p className="team_info" style={{ marginBottom: 0 }}>Harshvardhan Singh Rathore</p>
                    <span className="team_info" style={{ color: "#C05800" }}>
                      2nd Year Metallurgy Department
                    </span>
                  </div>
                </div>
                <div className=" col-md-3 col-6">
                  <div style={{ textAlign: "center" }}>
                    <img
                      className="team_image"
                      src="/images/Team/debate/Inch. prerit jain.jpg"
                      alt=""
                    />
                  </div>
                  <div className="team_inf" style={{ textAlign: "center" }}>
                    <p className="team_info" style={{ marginBottom: 0 }}>Prerit Jain</p>
                    <span className="team_info" style={{ color: "#C05800" }}>
                      {" "}
                      2nd Year Electrical Department{" "}
                    </span>
                  </div>
                </div>
                <div className=" col-md-3 col-6 men">
                  <div style={{ textAlign: "center" }}>
                    <img
                      className="team_image"
                      src="/images/Team/debate/Inch Kumari Nancy.jpg"
                      alt=""
                    />
                  </div>
                  <div className="team_inf" style={{ textAlign: "center" }}>
                    <p className="team_info" style={{ marginBottom: 0 }}>Kumari Nancy</p>
                    <span className="team_info" style={{ color: "#C05800" }}>
                      2nd Year Civil Department
                    </span>
                  </div>
                </div>
                <div className=" col-md-3 col-6 men">
                  <div style={{ textAlign: "center" }}>
                    <img
                      className="team_image"
                      src="/images/Team/debate/Inch AayushiJoshi.jpg"
                      alt=""
                    />
                  </div>
                  <div className="team_inf" style={{ textAlign: "center" }}>
                    <p className="team_info" style={{ marginBottom: 0 }}>Aayushi Joshi</p>
                    <span className="team_info" style={{ color: "#C05800" }}>
                      3rd Year Chemical Department
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
            style={{ paddingTop: "25px", paddingBottom: "25px", fontSize: "14px" }}
          >
            <div className="row incharge2">
              <div className=" col-md-3 col-6 men">
                <div style={{ textAlign: "center" }}>
                  <img className="team_image" src="/images/Team/debate/Anupam sharma.jpg" alt="" />
                </div>
                <div className="team_inf" style={{ textAlign: "center" }}>
                  <p className="team_info" style={{ marginBottom: 0 }}>Anupam Sharma</p>
                  <span className="team_info" style={{ color: "#C05800" }}>3rd Year Chemical Department </span>

                </div>
              </div>
              <div className=" col-md-3 col-6">
                <div style={{ textAlign: "center" }}>
                  <img className="team_image" src="/images/Team/debate/Medha Jain.jpg" alt="" />
                </div>
                <div style={{ textAlign: "center" }}>
                  <p className="team_info" style={{ marginBottom: 0 }}>Medha Jain</p>
                  <span className="team_info" style={{ color: "#C05800" }}>2nd Year CSE Department </span>

                </div>
              </div>
              <div className=" col-md-3 col-6 men">
                <div style={{ textAlign: "center" }}>
                  <img className="team_image" src="/images/Team/debate/PARASTAR.jpg" alt="" />
                </div>
                <div className="team_inf" style={{ textAlign: "center" }}>
                  <p className="team_info" style={{ marginBottom: 0 }}>Parastar Pahadiya</p>
                  <span className="team_info" style={{ color: "#C05800" }}>3rd Year Metallurgy Department</span>

                </div>
              </div>
              <div className=" col-md-3 col-6 men">
                <div style={{ textAlign: "center" }}>
                  <img className="team_image" src="/images/Team/debate/vidushi.png" alt="" />
                </div>
                <div className="team_inf" style={{ textAlign: "center" }}>
                  <p className="team_info" style={{ marginBottom: 0 }}>Vidushi Jangid</p>
                  <span className="team_info" style={{ color: "#C05800" }}>Metallurgy Department</span>

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

export default debating;
