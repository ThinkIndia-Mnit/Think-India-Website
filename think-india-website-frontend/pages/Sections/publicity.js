import Head from "next/head";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

const Publicity = () => {
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
            {/* margin: auto; */}
          }
          .initiative_head {
            padding: 20px;
            margin-left: 7vw;
            margin-top: 20px;
            font-size: 2rem;
          }
          .container {
            padding: 20px;
          }

          .myDIV {
            background-image: url("/images/headingBG/publicity.svg");
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
          .first_row_ini img{
              flex-direction: column;
              align-items: center;
             width: 70%;
            
            }
          /* mobile suitable */

          @media (max-width: 780px) {
            .project_box {
              margin: 15px;
            }
            .first_row_ini img{
              flex-direction: column;
              align-items: center;
             width: 70%;
            
            }
            .achivements_diy {
              display: flex;
              flex-direction: column !important;
              justify-content: center;
            }
            .achivement_cards {
              margin: 20px auto !important;
              width: 90vw !important;
              display: flex;
              flex-direction: column !important;
            }
            .achivement_images img {
              height: 228px;
              padding: 3px !important;
              width: 80vw !important;
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
            width:100%;
          }

          /* events  */
        `}</style>
      </Head>
      <Navbar />
      <section className="myDIV">
        <div className="container-fluid diy ">
          <div className="container diy_back ">
            <h1 className="diy_head">Publicity & Management</h1>
            <p className="diy_subhead">
              {`EVERY TEAM HAVE BACKBONE OF THEIR CLUB, IT'S PUBLICITY &
              MANAGEMENT`}
            </p>
          </div>
        </div>
      </section>
      <section className="DIY_projects">
        <div className="section_correct">
          <div className="first_row_ini">
            <img
              src="/images/Team/Publicity/what.svg"
              alt=""
              draggable={false}
            />
          </div>
          <div className="first_row_ini">
            <img
              src="/images/Team/Publicity/main.svg"
              alt=""
              draggable={false}
            />
          </div>
        </div>
      </section>
      <section className="team_part" style={{ marginTop: "70px" }}>
        <div className="section_correct">
          <div className="initiative_head">
            <p>
              Our<span style={{ color: "#20c2f5" }}> Team</span>
            </p>
          </div>
          <div style={{ paddingTop: "15px" }}>
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
                      src="/images/Team/publicity/Inch jaswant singh.jpg"
                      alt=""
                    />
                  </div>
                  <div className="team_inf" style={{ textAlign: "center" }}>
                    <p className="team_info" style={{ marginBottom: 0 }}>Jaswant Singh</p>
                    <span className="team_info" style={{ color: "#C05800" }}>
                      2nd Year Chemical Department
                    </span>
                  </div>
                </div>
                <div className=" col-md-3 col-6">
                  <div style={{ textAlign: "center" }}>
                    <img
                      className="team_image"
                      src="/images/Team/publicity/Inch amol kumar urkude.jpg"
                      alt=""
                    />
                  </div>
                  <div className="team_inf" style={{ textAlign: "center" }}>
                    <p className="team_info" style={{ marginBottom: 0 }}>Amol Kumar Urkude</p>
                    <span className="team_info" style={{ color: "#C05800" }}>
                      {" "}
                      2nd Year Metallurgy Department{" "}
                    </span>
                  </div>
                </div>
                <div className=" col-md-3 col-6 men">
                  <div style={{ textAlign: "center" }}>
                    <img
                      className="team_image"
                      src="/images/Team/publicity/Inch_Ritik Raj.jpg"
                      alt=""
                    />
                  </div>
                  <div className="team_inf" style={{ textAlign: "center" }}>
                    <p className="team_info" style={{ marginBottom: 0 }}>Ritik Raj</p>
                    <span className="team_info" style={{ color: "#C05800" }}>
                      2nd Year Metallurgy Department
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
            className="container  incharge"
            style={{ paddingTop: "25px", paddingBottom: "25px", fontSize: "14px" }}
          >
            <div className="row">
              <div className=" col-md-3 col-6 men">
                <div style={{ textAlign: "center" }}>
                  <img className="team_image" src="/images/Team/publicity/Aditya Raj.jpg" alt="" />
                </div>
                <div className="team_inf" style={{ textAlign: "center" }}>
                  <p className="team_info" style={{ marginBottom: 0 }}>Aditya Raj</p>
                  <span className="team_info" style={{ color: "#C05800" }}>2nd Year ECE Department </span>

                </div>
              </div>
              <div className=" col-md-3 col-6">
                <div style={{ textAlign: "center" }}>
                  <img className="team_image" src="/images/Team/publicity/Dev Kumar Vedi.jpg" alt="" />
                </div>
                <div className="team_inf" style={{ textAlign: "center" }}>
                  <p className="team_info" style={{ marginBottom: 0 }}>Dev Kumar Vedi</p>
                  <span className="team_info" style={{ color: "#C05800" }}>3rd Year Chemical Department </span>

                </div>
              </div>
              <div className=" col-md-3 col-6 men">
                <div style={{ textAlign: "center" }}>
                  <img className="team_image" src="/images/Team/publicity/Pratik Dubey.jpeg" alt="" />
                </div>
                <div className="team_inf" style={{ textAlign: "center" }}>
                  <p className="team_info" style={{ marginBottom: 0 }}>Pratik Dubey</p>
                  <span className="team_info" style={{ color: "#C05800" }}>2nd Year Chemical Department</span>

                </div>
              </div>
              <div className=" col-md-3 col-6 men">
                <div style={{ textAlign: "center" }}>
                  <img className="team_image" src="/images/Team/publicity/SWAPNIL SINGH.jpg" alt="" />
                </div>
                <div className="team_inf" style={{ textAlign: "center" }}>
                  <p className="team_info" style={{ marginBottom: 0 }}>Swapnil Singh</p>
                  <span className="team_info" style={{ color: "#C05800" }}>2nd Year Metallurgy Department</span>

                </div>
              </div>
            </div>
            <div
              className="row"
              style={{ paddingTop: "25px", paddingBottom: "25px", fontSize: "14px" }}
            >
              <div className=" col-md-3 col-6 men">
                <div style={{ textAlign: "center" }}>
                  <img className="team_image" src="/images/Team/publicity/Yogesh Kumar.jpg" alt="" />
                </div>
                <div className="team_inf" style={{ textAlign: "center" }}>
                  <p className="team_info" style={{ marginBottom: 0 }}>Yogesh Kumar</p>
                  <span className="team_info" style={{ color: "#C05800" }}>3rd Year Chemical Department </span>

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

export default Publicity;
