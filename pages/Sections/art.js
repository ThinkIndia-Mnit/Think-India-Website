import Head from "next/head";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const art = () => {
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
    var d = document.getElementById("slidep4");
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
    background-image: url("/images/headingBG/debate.svg");
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
.achivements_debate{
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
      <div className="myDIV">
        <div className="container-fluid heritage ">
          <div className="heritage_parent">
            <div className="container heritage_back ">
              <h1 className="heritage_head">ART AND DESIGN SECTION</h1>
              <p className="heritage_subhead">
                Design creates culture. Culture shapes values. Values determine
                the future.
              </p>
            </div>
            {/* <div class="container-fluid">
  <img class="heritage_img" src="image_art/artE.svg" alt="">
</div> */}
          </div>
        </div>
      </div>
      <section className="DIY_enebts">
        <div className="section_correct">
          <div className="slogan">
            <div id="photos">
              <div id="image1">
                <img src="../image_art/art1.jpg" width="100%" height="100%" />
              </div>
              <div id="photo-and-card">
                <div id="image2">
                  <img src="../image_art/art2.jpg" width="100%" height="100%" />
                </div>
                <div id="quote-card">
                  <div id="quote">
                    <div id="vertical-line" style={{ width: "10px", backgroundColor: "black", marginRight: "10px" }}>
                    </div>
                    <div id="quote-content">
                      Art is unquestionably one of the purest and highest elements in human happiness. It trains the mind through the eye, and the eye through the mind.
                    </div>
                  </div>
                  <div id="quoteWriter">
                    - John Lubbock
                  </div>
                </div>
              </div>

            </div>
            <div id="openingStat">
              <div id="openingStat-heading">
                Why Art & Design is Important in life?
              </div>
              <div id="openingStat-subHead">
                Art is a language that is known and understood by every person on this globe.
              </div>
              <div id="openingStat-content">
                <p>
                  This section is the backbone of all the work going on in the club. for any initiative or event, to be a success, we make the idea look into a presentable form to grab the attention of people from making posters to design magazines and editing amazing video content to making people skilled in designing, is our work profile it promotes all form of art in college and provides students with equal opportunity to enhance as well as showcase their talent by the means of workshop and exhibition it frequently organises many events like painting sketching digital designing rangoli competition workshops etc.</p>

              </div>
            </div>
          </div>
          <div className="initiative_head">
            <p>
              Event<span style={{ color: "#20c2f5" }}>s</span>
            </p>
          </div>
          <div className="events">
            <div className="display_flex" id="slidep1">
              <div className=" event_para">


                <p>
                  <div id="openingStat-subHead">
                    <h5>Night photography and video editing competition</h5>
                  </div>
                  This event was organised on world photography day (19th August) to check the editing and night photography skills of students where we got outstanding response from students of not only our college but from colleges all over India.
                </p>
              </div>
              <div className=" cultural_box">
                <div className="cultural_img">
                  <img
                    src="/images/photography.png"
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
                  <div id="openingStat-subHead">
                    <h5>Mask Design Contest</h5>
                  </div>
                  {`The purpose of the activity, "Mask designing" was to nurture the imagination of the students, complete self expression and supports their creativity and innovative ideas expressed through art.
                  The masterpiece made by the participants will be donated to the needy. This was our first event in offline mode. Students actively participated to make this event a success.`}

                </p>
              </div>
              <div className="  cultural_box">
                <div className=" cultural_img">
                  <img
                    src="/images/maskd.png"
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

                  <div id="openingStat-subHead">
                    <h5>Workshops</h5>
                  </div>
                  We have successfully organised multiple workshops to train students with new form of designing using many Advanced software like Adobe Photoshop, Adobe illustrator, Figma , etc.
                  Skilled Instructors guide students through various applications and new style in trend.

                </p>
              </div>
              <div className="  cultural_box">
                <div className=" cultural_img">
                  <img
                    src="/images/photoshop.png"
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


            <div className="photo_event_more">
              <div className="events_img show_hide">
                <img
                  className="events_img1"
                  src="/images/photography.png"
                  onClick={myfan1}
                  alt=""
                />
              </div>
              <div className="events_img show_hide">
                <img
                  className="events_img1"
                  src="/images/maskd.png"
                  onClick={myfan2}
                  alt=""
                />
              </div>
              <div className=" events_img show_hide">
                <img
                  className="events_img1"
                  src="/images/photoshop.png"
                  onClick={myfan3}
                  alt=""
                />
              </div>

            </div>
            <div></div>
          </div>
        </div>
      </section>

      <div className="initiative_head" style={{ marginTop: "100px" }}>
        <p>
          Our<span style={{ color: "#20c2f5" }}> Team</span>
        </p>
      </div>
      <div className="container" >
        <div className="section_correct">

          <div style={{ paddingTop: "25px" }}>
            <div className="head_team_member">
              <p>InCharges</p>
            </div>
            <div
              className="container row incharge incharge2"
              style={{ paddingTop: "25px", paddingBottom: "25px", fontSize: "14px" }}
            >
              <div className="col-md-3 col-6 men ">
                <div style={{ textAlign: "center" }}>
                  <img className="team_image" src="/images/team/art/InchYash.jpg" alt="" />
                </div>
                <div className="team_inf" style={{ textAlign: "center" }}>
                  <p className="team_info" style={{ marginBottom: 0 }}>Yash Gupta</p>
                  <span className="team_info" style={{ color: "#C05800" }}>
                    2nd Year Chemical Department{" "}
                  </span>
                  <span />
                </div>
              </div>
              <div className=" col-md-3 col-6">
                <div style={{ textAlign: "center" }}>
                  <img className="team_image" src="/images/team/art/InchSakshi.jpg" alt="" />
                </div>
                <div className="team_inf" style={{ textAlign: "center" }}>
                  <p className="team_info" style={{ marginBottom: 0 }}>Sakshi Arora</p>
                  <span className="team_info" style={{ color: "#C05800" }}>
                    2nd Year ECE Department{" "}
                  </span>
                  <span />
                </div>
              </div>
              <div className=" col-md-3 col-6">
                <div style={{ textAlign: "center" }}>
                  <img className="team_image" src="/images/team/art/InchJayankGupta.jpg" alt="" />
                </div>
                <div className="team_inf" style={{ textAlign: "center" }}>
                  <p className="team_info" style={{ marginBottom: 0 }}>Jayank Gupta</p>
                  <span className="team_info" style={{ color: "#C05800" }}>
                    2nd Year Chemical Department{" "}
                  </span>
                  <span />
                </div>
              </div>
              <div className=" col-md-3 col-6">
                <div style={{ textAlign: "center" }}>
                  <img className="team_image" src="/images/team/art/InchHarshitaGoyal.jpg" alt="" />
                </div>
                <div className="team_inf" style={{ textAlign: "center" }}>
                  <p className="team_info" style={{ marginBottom: 0 }}>Harshita Goyal</p>
                  <span className="team_info" style={{ color: "#C05800" }}>
                    2nd Year ECE Department{" "}
                  </span>
                  <span />
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
              <div className="row">
                <div className=" col-md-3 col-6 men">
                  <div style={{ textAlign: "center" }}>
                    <img className="team_image" src="/images/team/art/AbhinavJain.jpg" alt="" />
                  </div>
                  <div className="team_inf" style={{ textAlign: "center" }}>
                    <p className="team_info" style={{ marginBottom: 0 }}>Abhinav Jain</p>
                    <span className="team_info" style={{ color: "#C05800" }}>2nd Year Metallurgy Department</span>

                  </div>
                </div>
                <div className=" col-md-3 col-6">
                  <div style={{ textAlign: "center" }}>
                    <img className="team_image" src="/images/team/art/BhupeshGaur.png" alt="" />
                  </div>
                  <div className="team_inf" style={{ textAlign: "center" }}>
                    <p className="team_info" style={{ marginBottom: 0 }}>Bhupesh Gaur</p>
                    <span className="team_info" style={{ color: "#C05800" }}>2nd Year Metallurgy Department </span>

                  </div>
                </div>
                <div className=" col-md-3 col-6 men">
                  <div style={{ textAlign: "center" }}>
                    <img className="team_image" src="/images/team/art/DikshaSingh.jpg" alt="" />
                  </div>
                  <div className="team_inf" style={{ textAlign: "center" }}>
                    <p className="team_info" style={{ marginBottom: 0 }}>Diksha Singh</p>
                    <span className="team_info" style={{ color: "#C05800" }}>2nd Year Civil Department</span>

                  </div>
                </div>
                <div className=" col-md-3 col-6 men">
                  <div style={{ textAlign: "center" }}>
                    <img className="team_image" src="/images/team/art/Lalita Gadhwal.jpg" alt="" />
                  </div>
                  <div className="team_inf" style={{ textAlign: "center" }}>
                    <p className="team_info" style={{ marginBottom: 0 }}>Lalita Gadhwal</p>
                    <span className="team_info" style={{ color: "#C05800" }}>2nd Year Chemical Department</span>

                  </div>
                </div>
              </div>
              <div
                className="row"
                style={{ paddingTop: "25px", paddingBottom: "25px", fontSize: "14px" }}
              >
                <div className=" col-md-3 col-6 men">
                  <div style={{ textAlign: "center" }}>
                    <img className="team_image" src="/images/team/art/Sahil Jagwani.jpg" alt="" />
                  </div>
                  <div className="team_inf" style={{ textAlign: "center" }}>
                    <p className="team_info" style={{ marginBottom: 0 }}>Sahil jagwani</p>
                    <span className="team_info" style={{ color: "#C05800" }}>2nd Year Chemical Department </span>

                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default art;
