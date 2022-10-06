import Head from "next/head";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const heritage = () => {
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
        <style>{`.first_row_ini{
    display: flex;
    justify-content: center;
}
body,html{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    overflow-x: hidden;
}
.second_row_ini{
    display: flex;
    justify-content: center;
}

.initiative_box{
    width: 280px;
    height: 120px;
    border: dotted 1px rgb(255, 255, 255);
    background: #FFFFFF;
    box-shadow: 0px 0px 10px 1px rgba(153, 176, 250, 0.4);
    border-radius: 10px;
    padding: 20px;
    background: rgb(247, 247, 255);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 20px 15px;
}
.initiative_box:hover{
    box-shadow: 0px 0px 10px rgba(229, 233, 246, 0.4);
}

.initiHead{
    font-size: 20px;
    font-weight: bold;
    color: #00aeedb7;
    padding: 2px 4px;
}
.initiative_text a{
    color: blueviolet;
}
.initiative_text a:hover{
    text-decoration: none;
}

/* mobile suitable */
@media (max-width:1150px)
{
  .first_row_ini
  {
    flex-direction: column;
    align-items: center;
    margin: 20px;
  }
}
@media (max-width:767px)
{
    .second_row_ini{
        flex-direction: column;
        align-items: center;
    }
    .initiative_box{
        margin: 15px;
    }
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
.myDIV{
    background-image: url("/images/heritage.png");
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
  

}`}</style>
      </Head>
      <Navbar />
      <div className="myDIV">
        <div className="container-fluid heritage ">
          <div className="heritage_parent">
            <div className="container heritage_back ">
              <h1 className="heritage_head">
                Heritage &amp; Enviornment Section
              </h1>
              <p className="heritage_subhead">
                {
                  "Let's know about heritage of india and share knowledge with others."
                }
              </p>
            </div>
            {/* <div class="container-fluid">
          <img class="heritage_img" src="/images/heritage.png" alt="">
        </div> */}
          </div>
        </div>
      </div>
      {/* <div  style="background-image: url(/images/initiative_back.png);" > */}
      <section>
        <div className="section_correct">
          <div className="initiative_head">
            <p>
              Our <span style={{ color: "#20c2f5" }}>Initiative</span>
            </p>
          </div>
          <div className="first_row_ini">
            <div className="second_row_ini">
              <div className="initiative_box">
                <div className="initiative_text initiative_text_flex">
                  <h2 className="initiHead">Kargil: The Saga War</h2>
                  <a href="#">More...</a>
                </div>
                <div className="initiative_img_all initiative_text_flex">
                  <img
                    className="initiative_img1"
                    src="/images/init/kargil war.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="initiative_box">
                <div className="initiative_text initiative_text_flex">
                  <h2 className="initiHead">
                    VeeraBhoomi: <br />
                    <span style={{ fontSize: "12px" }}>
                      The Unsung Heroes
                    </span>{" "}
                  </h2>
                  <a href="#">More...</a>
                </div>
                <div className="initiative_img_all initiative_text_flex">
                  <img
                    className="initiative_img1"
                    src="/images/init/VEERABHOOMI.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="second_row_ini">
              <div className="initiative_box">
                <div className="initiative_text initiative_text_flex">
                  <h2 className="initiHead">Food Factor</h2>
                  <a href="#">More...</a>
                </div>
                <div className="initiative_img_all initiative_text_flex">
                  <img
                    className="initiative_img1"
                    src="/images/init/Street Food 1.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="initiative_box">
                <div className="initiative_text initiative_text_flex">
                  <h2 className="initiHead">
                    Dhanvant:
                    <br />
                    <span style={{ fontSize: "12px" }}>
                      The Medicinal Pants
                    </span>
                  </h2>
                  <a href="#">More...</a>
                </div>
                <div className="initiative_img_all initiative_text_flex">
                  <img
                    className="initiative_img1"
                    src="/images/init/medicinal plants 1.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="first_row_ini">
            <div className="second_row_ini">
              <div className="initiative_box">
                <div className="initiative_text initiative_text_flex">
                  <h2 className="initiHead">Shooting Places</h2>
                  <a href="#">More...</a>
                </div>
                <div className="initiative_img_all initiative_text_flex">
                  <img
                    className="initiative_img1"
                    src="/images/init/shooting places 1.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="initiative_box">
                <div className="initiative_text initiative_text_flex">
                  <h2 className="initiHead">Monthly Warmup</h2>
                  <a href="#">More...</a>
                </div>
                <div className="initiative_img_all initiative_text_flex">
                  <img
                    className="initiative_img1"
                    src="/images/init/warmup 1.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="second_row_ini">
              <div className="initiative_box">
                <div className="initiative_text initiative_text_flex">
                  <h2 className="initiHead">The Great Indian Universities</h2>
                  <a href="#">More...</a>
                </div>
                <div className="initiative_img_all initiative_text_flex">
                  <img
                    className="initiative_img1"
                    src="/images/init/Education_(255) 2.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="initiative_box">
                <div className="initiative_text initiative_text_flex">
                  <h2 className="initiHead">Current Issues</h2>
                  <a href="#">More...</a>
                </div>
                <div className="initiative_img_all initiative_text_flex">
                  <img
                    className="initiative_img1"
                    src="/images/init/icon0-vector-543-01 1.svg"
                    alt=""
                  />
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
              Saanidhya<span style={{ color: "#20c2f5" }}> Magazine</span>
            </p>
          </div>
          <div className="events">
            <div className="display_flex" id="slidep1">
              <div className=" event_para">
                <p>
                  Welcome to the <b>3rd edition</b> of Think India’s newest
                  initiative *SAANIDHYA*, where we aim to bind the readers with
                  a nationalistic string to bring them closer towards their
                  Dharovar. To take this staggering purpose to new heights,
                  SAANIDHYA attempts to bring to you the artworks, the
                  astounding opinion pieces, and other numerous creations of
                  brilliant young minds at Think India, that show the hidden
                  nationalistic sentiments flowing deep in their veins. *This
                  edition explores the hidden beauty of Alwar, the walk in sky
                  with Pelling Skywalk, significance of Swastika and much more*.
                  SAANIDYA salutes people who sacrificed themselves for the
                  nation without any desires, by celebrating *Azadi Ka Amrit
                  Mahotsav* whose glimpses can be seen in this edition. For
                  those who want to perceive the deep connection to their
                  cultural roots, SAANIDHYA is the way to go. Our country has
                  gone through a lot of changes but we have preserved our
                  culture and this edition will tell you that India can create
                  architectural wonders even now just like the past. Most of all
                  it will give the readers the thrill of seeing the Bharat
                  through a new lens like never before. We hope you will adore
                  it as much as we do.
                </p>
              </div>
              <div className=" cultural_box">
                <div className="cultural_img">
                  <iframe
                    style={{
                      width: "auto",
                      height: "55vh",
                      borderRadius: "10px",
                    }}
                    src="https://online.fliphtml5.com/umqwi/nbec/"
                    seamless="seamless"
                    scrolling="no"
                    frameBorder={0}
                    allowTransparency="true"
                    allowFullScreen="true"
                  />
                  <div className="card-body" style={{ textAlign: "center" }}>
                    <h5 className="card-title">
                      {" "}
                      <a href="https://online.fliphtml5.com/umqwi/nbec/">
                        {" "}
                        Current Edition (3rd Edition)
                      </a>
                    </h5>
                  </div>
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
                  Welcome to the <b> 2nd edition</b>{" "}
                  {`of Think India's newest initiative SAANIDHYA, where we aim to bind the readers with a nationalistic string to bring them closer towards their Dharovar. Think India aims to inculcate the knowledge, contrivance, and innovation to bridge the roots of our ancient culture to the modernity of 21st century. For those who want to perceive the deep connection to their cultural roots, why not give SAANIDHYA a try. In the coming editions, we would tap the yet unexplored segments while going down the heritage lane, the scrumptious food, the trade and commerce, and much more. Most of all it will give the readers the thrill of seeing the Bharat through a new lens like never before. We hope you will adore it as much as we do. So, get on and let's begin the journey. Heritage and Environment Section of *Think India MNIT Jaipur presents* 2nd Edition of *"SAANIDHYA: A Heritage Magazine".* Have a pinch of ancient architectures, learn about the story of our national emblem, an exciting travelogue and much more.`}
                </p>
              </div>
              <div className=" cultural_box">
                <div className="cultural_img">
                  <iframe
                    style={{
                      width: "auto",
                      height: "55vh",
                      borderRadius: "10px",
                    }}
                    src="https://online.fliphtml5.com/umqwi/yjjq/"
                    seamless="seamless"
                    scrolling="no"
                    frameBorder={0}
                    allowTransparency="true"
                    allowFullScreen="true"
                  />
                  <div className="card-body" style={{ textAlign: "center" }}>
                    <h5 className="card-title">
                      {" "}
                      <a href="https://online.fliphtml5.com/umqwi/yjjq/">
                        2nd Edition
                      </a>
                    </h5>
                  </div>
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
                  Welcome to the <b> 1st edition</b> of Think India’s newest
                  initiative SAANIDHYA, where we aim to bind the readers with a
                  nationalistic string to bring them closer towards their
                  Dharovar. Think India aims to inculcate the knowledge,
                  contrivance, and innovation to bridge the roots of our ancient
                  culture to the modernity of 21st century. For those who want
                  to perceive the deep connection to their cultural roots, why
                  not give SAANIDHYA a try. In the coming editions, we would tap
                  the yet unexplored segments while going down the heritage
                  lane, the scrumptious food, the trade and commerce, and much
                  more. Most of all it will give the readers the thrill of
                  seeing the Bharat through a new lens like never before. We
                  hope you will adore it as much as we do. So, get on and let’s
                  begin the journey.
                </p>
              </div>
              <div className=" cultural_box">
                <div className="cultural_img">
                  <iframe
                    style={{
                      width: "auto",
                      height: "55vh",
                      borderRadius: "10px",
                    }}
                    src="https://online.fliphtml5.com/umqwi/tdru/ "
                    seamless="seamless"
                    scrolling="no"
                    frameBorder={0}
                    allowTransparency="true"
                    allowFullScreen="true"
                  />
                  <div className="card-body" style={{ textAlign: "center" }}>
                    <h5 className="card-title">
                      {" "}
                      <a href="https://online.fliphtml5.com/umqwi/tdru/">
                        1st Edition
                      </a>
                    </h5>
                  </div>
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
                <p>Latest Edition Coming Soon</p>
              </div>
              <div className=" cultural_box">
                <div className="cultural_img">
                  <img
                    src="/images/edition.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body" style={{ textAlign: "center" }}>
                    <h5 className="card-title">Coming Edition</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="photo_event_more">
              <div className="events_img show_hide">
                <img
                  className="events_img1"
                  src="/images/magazine/3rd.jpeg"
                  onClick={myfan1}
                  alt=""
                />
              </div>
              <div className="events_img show_hide">
                <img
                  className="events_img1"
                  src="/images/magazine/2nd.jpeg"
                  onClick={myfan2}
                  alt=""
                />
              </div>
              <div className=" events_img show_hide">
                <img
                  className="events_img1"
                  src="/images/magazine/1st.PNG"
                  onClick={myfan3}
                  alt=""
                />
              </div>
              <div className=" events_img show_hide">
                <img
                  className="events_img1"
                  src="/images/edition.png"
                  onClick={myfan4}
                  alt=""
                />
              </div>
            </div>
            <div></div>
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
                  {" "}
                  <span>
                    {" "}
                    <b>
                      {" "}
                      {`"Our Culture Our Pride" (Cultural Dress Competetion) Conducted Once in a Year`}
                    </b>
                  </span>{" "}
                  <br />
                  We are all different, which is great because we are all
                  unique. Without diversity, life would be very boring.
                  ~Catherine Pulsifer Clothes have long ago ceased to be just a
                  protection from the cold and the sun and have evolved as fast
                  as the human race. Traditional dresses are usually graceful
                  and say a lot about the history and culture of the people. In
                  order, to celebrate our culture and diversity, Think India and
                  VSS organised a Cultural Dress competition, from 1st April to
                  10th April. The event was held online and entries were
                  accepted through google forms. The results after the mass
                  participation of students ranging from different colleges were
                  declared on 15th April. Winners were selected based on their
                  idea of fusion as well as the cultural significance given by
                  the cultural dress they wore.
                </p>
              </div>
              <div className=" cultural_box">
                <div className="cultural_img">
                  <img
                    src="/images//Event/heri/cul.jpg"
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
                      Cultural Dress Competetion 2.0
                    </h5>
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
                  {" "}
                  <span>
                    <b>VeeraBhoomi: The Unsung Heroes</b>
                  </span>{" "}
                  <br />
                  This was a ground-level seven day internship program by Think
                  India and VSS which was organized by SHODH. It was an
                  internship program held from 21-26 November 2021. The main
                  motive of the event was to know about the unsung heroes of
                  India. People who contributed their lives, property etc. to
                  the independence of India but were not get any recognition or
                  reward for their doing. Students of different colleges went to
                  11 different districts of Rajasthan and met with those
                  personalities and got to know about their current situation,
                  interconnected emotionally with their lives. The registration
                  fee for this event was 100 rupees. Around 40 students were
                  selected from MNIT, which were then divided into groups of 4
                  and sent to different places including Sawai Madhopur, sikar,
                  Alwar, etc. This was a very nice experience for MNIT students.
                </p>
              </div>
              <div className="  cultural_box">
                <div className=" cultural_img">
                  <img
                    src="/images//Event/heri/veer.jpg"
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
                      VeeraBhoomi: The Unsung Heroes
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
                  <span>
                    <b>
                      Essay writing and video making competition on National
                      Productivity Da
                    </b>
                  </span>{" "}
                  <br />
                  On the occasion of the National Productivity Day, Think India
                  and VSS organized an essay writing and video making
                  competition to know how students make their day productive.
                  Students were asked to submit an essay in 200 words max or a
                  video of them of about 15-30 seconds telling us “What do you
                  do to make your day productive?”. Entries were collected on
                  the email id of Think India and VSS, and after heavy
                  participation of students, a winner was elected on grounds of
                  creativity, idea and how well he was able to present his/her
                  idea of making the day productive.
                </p>
              </div>
              <div className="  cultural_box">
                <div className=" cultural_img">
                  <img
                    src="/images//Event/heri/prod.jpg"
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
                    <h5 className="card-title">National Productivity Day</h5>
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
                  {" "}
                  <span>
                    <b>
                      Mile Sur Hamara Tumhara (Cultural Dance Competetion) in
                      collaboration with MDS sociaty
                    </b>
                  </span>{" "}
                  <br />
                  To showcase our cultural heritage ,Think India as a media
                  partner, along with the Music, Dance and Spic Macay Society,
                  MNIT organized the event MILE SUR MERA TUMHARA. Students
                  participation in form of classical dance, music, or any art
                  form where asked. The time limit for the submission was 5 min
                  and entries were accepted till 24th July 2021. Heavy
                  participation by the student to showcase their talents were
                  received. The theme of the event was cultural/patriotic.
                </p>
              </div>
              <div className="  cultural_box">
                <div className=" cultural_img">
                  <img
                    src="/images//Event/heri/mile.jpg"
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
                    <h5 className="card-title">Mile Sur Hamara Tumhara</h5>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="photo_event_more">
            <div className="events_img show_hide">
              <img
                className="events_img1"
                src="/images//Event/heri/cul.jpg"
                onClick={myfan1}
                alt=""
              />
            </div>
            <div className="events_img show_hide">
              <img
                className="events_img1"
                src="/images//Event/heri/veer.jpg"
                onClick={myfan2}
                alt=""
              />
            </div>
            <div className=" events_img show_hide">
              <img
                className="events_img1"
                src="/images//Event/heri/prod.jpg"
                onClick={myfan3}
                alt=""
              />
            </div>
            <div className=" events_img show_hide">
              <img
                className="events_img1"
                src="/images//Event/heri/mile.jpg"
                onClick={myfan4}
                alt=""
              />
            </div>
          </div>
          <div></div>
        </div>
      </section>
      <section className="DIY_enebts">
        <div className="section_correct">
          <div className="initiative_head">
            <p>
              Kargil:<span style={{ color: "#20c2f5" }}> The Saga War</span>
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px",
            }}
          >
            <iframe
              style={{
                borderRadius: "10px",
                boxShadow: "3px 3px 0px 3px #20c2f5",
                width: "60vw",
                height: "300px",
              }}
              src="https://www.youtube-nocookie.com/embed/0eRQapvA90k?controls=0"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
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
                      src="/images/Team/Heritage/inch prerna.jpg"
                      alt=""
                    />
                  </div>
                  <div className="team_inf" style={{ textAlign: "center" }}>
                    <p className="team_info"
                      style={{
                        margin: "0px",
                        padding: "2px",
                        fontSize: "20px",
                      }}
                    >
                      Prerna Jain
                    </p>
                    <span className="team_info" style={{ color: "#C05800" }}>
                      2nd Year Civil Department
                    </span>
                  </div>
                </div>
                <div className=" col-md-3 col-6">
                  <div style={{ textAlign: "center" }}>
                    <img
                      className="team_image"
                      src="/images/Team/Heritage/inch garima.jpg"
                      alt=""
                    />
                  </div>
                  <div className="team_inf" style={{ textAlign: "center" }}>
                    <p className="team_info"
                      style={{
                        margin: "0px",
                        padding: "2px",
                        fontSize: "20px",
                      }}
                    >
                      Garima Pooniya
                    </p>
                    <span className="team_info" style={{ color: "#C05800" }}>
                      {" "}
                      2nd Year Civil Department{" "}
                    </span>
                  </div>
                </div>
                <div className=" col-md-3 col-6 men">
                  <div style={{ textAlign: "center" }}>
                    <img
                      className="team_image"
                      src="/images/Team/Heritage/inch priyansh.jpg"
                      alt=""
                    />
                  </div>
                  <div className="team_inf" style={{ textAlign: "center" }}>
                    <p className="team_info"
                      style={{
                        margin: "0px",
                        padding: "2px",
                        fontSize: "20px",
                      }}
                    >
                      Priyansh pandey
                    </p>
                    <span className="team_info" style={{ color: "#C05800" }}>
                      2nd Year Electrical Department
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
            <div className="row incharge2">
              <div className=" col-md-3 col-6 men">
                <div style={{ textAlign: "center" }}>
                  <img className="team_image" src="/images/Team/Heritage/prakhar.jpg" alt="" />
                </div>
                <div className="team_inf" style={{ textAlign: "center" }}>
                  <p className="team_info"
                    style={{ margin: "0px", padding: "2px", fontSize: "20px" }}
                  >
                    Prakhar Agrawal
                  </p>
                  <span className="team_info" style={{ color: "#C05800" }}>2nd Year ECE Department</span>

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

export default heritage;
