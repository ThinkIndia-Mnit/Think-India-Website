import React from 'react'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Head from "next/head";

function students_timj() {
  return (
    <div>
        <Head>
        <style>{`/* *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    overflow-x: hidden;
    background-color:#fff;
} */
body,html{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    overflow-x: hidden;
    background-color:#fff;
}
.section_correct{
    align-items: center;
    margin: auto;
}
.initiative_head{
    padding: 20px;
    margin-top: 20px;
    font-size: 2rem;
}

.myDIV{
    background-image: url("/images/Students Timj.svg");
    background-repeat: no-repeat;
    // background-attachment: fixed;
    background-position: center;
    height: 44vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-origin: 0px;
}
.container{
    
}
.students_head{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 131.5%;
    text-align: center;
    color: #FFFFFF;
}

.teams{
    display:flex;
    justify-content:space-evenly;
    margin-bottom:3.5em;
    flex-wrap:wrap;
}

.team_type{
    margin-top:1.5em;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 56px;
    text-align: center;

    color: #000000;
}
.person{
    text-align:center;
    margin:40px;
}

@media only screen and (max-width:500px){
  .person{
    margin:0px;
  }
}
  @media screen and (max-width: 420px){
  .container .students_head {
  font-size:35px;
}
.myDIV{
  background-size:cover;
}
}
 }`}</style>
        </Head>
        <Navbar />
        <section className="myDIV">
        <div className="container">
            <h1 className="students_head">Students of TIMJ</h1>
        </div>
        </section> 
        <section className="container">
         <div className="initiative_head">
            <p>
              Year <span style={{ color: "#20c2f5" }}>2020-2021</span>
            </p>
         </div>
        <p className="team_type">Executive Team</p>
        <div className="teams"  style={{
                background: "#FFFFFF",
                boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.1)",
                marginTop: "30px",
                paddingBottom: "20px",
                
                }}> 
            <div className="person">
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
            <div className="person">
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
            <div className="person">
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
        </div>
        <p className="team_type">Members</p>
        <div className="teams"  style={{
                background: "#FFFFFF",
                boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.1)",
                marginTop: "30px",
                paddingBottom: "20px",
            
                }}> 
            <div className="person">
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
            <div className="person">
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
            <div className="person">
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
            <div className="person">
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
            <div className="person">
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
            <div className="person">
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
        </div>
        <p className="team_type">Mentors</p>
        <div className="teams"  style={{
                background: "#FFFFFF",
                boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.1)",
                marginTop: "30px",
                paddingBottom: "20px",
                
                }}> 
            <div className="person">
                <img
                  className="team_image"
                  src="/images/Team/Mentors/shubhham_rai.jpg"
                  alt=""
                />
                <div className="team_inf">
                  <p className="team_info" style={{ marginBottom: 0 }}>
                    Shubham Rai
                  </p>
                  <span className="team_info" style={{ color: "#C05800" }}>
                    State Covener{" "}
                  </span>
                  <span className="team_info">Jaipur Prant</span>
                </div>
            </div>
            <div className="person">
                <img
                  className="team_image"
                  src="/images/Team/Mentors/Vineet Sharma .webp"
                  alt=""
                />
                <div className="team_inf">
                  <p className="team_info" style={{ marginBottom: 0 }}>
                    Vineet Sharma
                  </p>
                  <span className="team_info" style={{ color: "#C05800" }}>
                    State Covener{" "}
                  </span>
                  <span className="team_info">Jaipur Prant</span>
                </div>
            </div>
            <div className="person">
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
        </div>
        </section>

        <section className="container">
         <div className="initiative_head">
            <p>
              Year <span style={{ color: "#20c2f5" }}>2021-2022</span>
            </p>
         </div>
        <p className="team_type">Executive Team</p>
        <div className="teams"  style={{
                background: "#FFFFFF",
                boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.1)",
                marginTop: "30px",
                paddingBottom: "20px",
            
                }}> 
            <div className="person">
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
            <div className="person">
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
            <div className="person">
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
        </div>
        <p className="team_type">Members</p>
        <div className="teams"  style={{
                background: "#FFFFFF",
                boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.1)",
                marginTop: "30px",
                paddingBottom: "20px",
                }}> 
            <div className="person">
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
            <div className="person">
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
            <div className="person">
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
        </div>
        <p className="team_type">Mentors</p>
        <div className="teams"  style={{
                background: "#FFFFFF",
                boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.1)",
                marginTop: "30px",
                paddingBottom: "20px",
                }}> 
            <div className="person">
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
            <div className="person">
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
            <div className="person">
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
        </div>
        </section>
        <Footer />
    </div>
  )
}

export default students_timj