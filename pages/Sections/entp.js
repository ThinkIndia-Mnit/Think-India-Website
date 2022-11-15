import Head from "next/head";
import React from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

const entp = () => {
  function myfan2() {
    var a = document.getElementById("slidep1");
    var c = document.getElementById("slidep3");
    var d = document.getElementById("slidep4");
    var y = document.getElementById("slidep2");
    if (
      a.style.display === "" ||
      c.style.display === ""
    ) {
      a.style.display = "none";
      c.style.display = "none";

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

    var y = document.getElementById("slidep3");
    if (
      a.style.display === "" ||
      b.style.display === ""
    ) {
      a.style.display = "none";
      b.style.display = "none";

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

    var b = document.getElementById("slidep2");
    var c = document.getElementById("slidep3");
    var y = document.getElementById("slidep1");
    if (

      b.style.display === "" ||
      c.style.display === ""
    ) {

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
    background-image: url("/images/headingBG/entre.svg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    height: 70vh;
    width: 100vw;
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

.entre_head{
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    text-align: center;
    padding: 10px;
    color: #F58220;
}
.entre_subhead{
    font-weight: 600;
    font-size: 21px;
    text-align: center;
    color: #20C2F5;
     
}
.entre_back{
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
.entre_parent{
    display: flex;
    justify-content: center;
    align-items: center;

}
.entre_back:hover{
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

    .entre_head{
        font-size: 18px;
    }
    .entre_subhead{
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
  .achivements_entre{
    display: flex;
    flex-direction: column !important;
    justify-content: center;
    
    }
    .achivement_cards{
        margin:20px auto !important;
        width: 90vw !important;
        display: flex;
        flex-direction: column !important;
    }
    .achivement_images img{
        height: 228px;
        padding: 3px !important;
        width: 80vw !important;
        
    }

}

/* Achivements  */
.achivements_entre{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.achivement_cards{
    width: 41vw;
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


/* Purpose  */
.purpose_entre{
    border: 3px solid red;
    margin: 4vh 1vw;
    border-radius: 5px !important;
    border-image: Linear-gradient(90deg, #7a99ff 14.285%,#3998ff 28.57%,#4ecaff 42.855%,#ff7979 57.14%,#ffad4e 71.425%,#ffad4e 85.71%,#ff7979) 5 !important;
}
.purpose_entre:hover{
    box-shadow: 0px 0px 10px #bdbdbd !important;
    backdrop-filter: blur(60px) !important;
    /* color: #F58220; */
 }`}</style>
      </Head>
      <Navbar />
      <section className="myDIV">
        <div className="container-fluid entre ">
          <div className="container entre_back ">
            <h1 className="entre_head">ENTREPRENEURSHIP SECTION</h1>
            <p className="entre_subhead">
              Leading Competetive Coding &amp; Development
            </p>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="display_flex" />
        <div className="container col purpose_entre">
          <div
            className="initiative_head"
            style={{ textAlign: "center", margin: "0px" }}
          >
            <p>
              Intro<span style={{ color: "#20c2f5" }}>Duction</span>
            </p>
          </div>
          <div style={{ textAlign: "center", fontSize: "1rem" }}>
            <p>
              {" "}
              Think India Entrepreneurship section is a student organization that motivates students to bring out their latent spirit of enterprise. It is a place to grow, learn and experience new things, pitch your ideas and solve real-life problems and enhance your personality. It works throughout the year, showing students the opportunities that lie within their grasp and the path they can take to make a difference. We here aspire, inspire and help the young aspiring students open the door of the promising & exciting world of entrepreneurship.
            </p>
          </div>
        </div>
        <div className="container col purpose_entre">
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
              The vision of Entrepreneur Section is to guide the students to take entrepreneurship as a career, as a path to victory, as a journey of intelligence, and also to inspire and nurture the human spirit.
            </p>
          </div>
        </div>
      </section>
      <section className="entre_enebts">
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
                  <h5>STARTUP SNACK</h5>
                  The vision is to guide the students to take entrepreneurship as a career, as a path to victory, as a journey of intelligence, and also to inspire and nurture the human spirit.
                </p>
              </div>
              <div className=" cultural_box">
                <div className="cultural_img">
                  <img
                    src="/images/Team/entre/startup.jpg"
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
                    <h5 className="card-title">OUR CULTURE OUR PRIDE</h5>
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
                  <h5>TALKS</h5>
                  We use to conduct several sessions with various personalities to inspire, motivate and train students in order to create good startup culture among them.
                </p>
              </div>
              <div className="  cultural_box">
                <div className=" cultural_img">
                  <img
                    src="/images/Team/entre/talk.png"
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
                    <h5 className="card-title">OUR CULTURE OUR PRIDE</h5>
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
                  <h5>E-SRIJAN</h5>
                  We have given some problem statements and expected to come up with innovative ideas and draft a solution to these given issues. The participants actively contested and come up with extraordinary remedies to the problems out there in society to make a significant change in the lives of people. Top entries were rewarded. successful
                </p>
              </div>
              <div className="  cultural_box">
                <div className=" cultural_img">
                  <img
                    src="/images/Team/entre/esrijan.jpeg"
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
                    <h5 className="card-title">OUR CULTURE OUR PRIDE</h5>
                  </div> */}
                </div>
              </div>
            </div>
            {/* 4th image content */}

          </div>
          <div className="photo_event_more">
            <div className="events_img show_hide">
              <img
                className="events_img1"
                src="/images/Team/entre/startup.jpg"
                onClick={myfan1}
                alt=""
              />
            </div>
            <div className="events_img show_hide">
              <img
                className="events_img1"
                src="/images/Team/entre/talk.png"
                onClick={myfan2}
                alt=""
              />
            </div>
            <div className=" events_img show_hide">
              <img
                className="events_img1"
                src="/images/Team/entre/esrijan.jpeg"
                onClick={myfan3}
                alt=""
              />
            </div>

          </div>
          <div></div>
        </div>
      </section>
      <div className="initiative_head" style={{ marginTop: "100px" }}>
        <p>
          Our<span style={{ color: "#20c2f5" }}> Team</span>
        </p>
      </div>
      <section className="container" >
        <div className="section_correct">

          <div>


            <div style={{ paddingTop: "25px" }}>
              <div className="head_team_member">
                <p>InCharges</p>
              </div>
              <div
                className="container row incharge "
                style={{ paddingTop: "25px", paddingBottom: "25px", fontSize: "14px" }}
              >
                <div className="offset-md-3 col-md-3 col-6 men">
                  <div style={{ textAlign: "center" }}>
                    <img className="team_image" src="/images/Team/entre/Inch Himangi Singh Asawat.jpeg" alt="" />
                  </div>
                  <div className="team_inf" style={{ textAlign: "center" }}>
                    <p className="team_info" style={{ marginBottom: 0 }}>Himangi Singh Asawat</p>
                    <span className="team_info" style={{ color: "#C05800" }}>2nd Year Electrical Department </span>

                  </div>
                </div>
                <div className=" col-md-3 col-6">
                  <div style={{ textAlign: "center" }}>
                    <img className="team_image" src="/images/Team/entre/Inch Sudhanshu.jpg" alt="" />
                  </div>
                  <div className="team_inf" style={{ textAlign: "center" }}>
                    <p className="team_info" style={{ marginBottom: 0 }}>Sudhanshu Baranwal</p>
                    <span className="team_info" style={{ color: "#C05800" }}>2nd Year Chemical Department </span>
                  </div>
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

export default entp;
