import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import EventHome from "../Components/Event/eventHome-section1";
import Announcement from "../Components/Event/Announcement";

const event = () => {
  var status = 0;
  function handleClick() {
    if (document.getElementById("announce")) console.log("btn clicked");

    if (status === 1) {
      document.getElementById("announcements").style.right = "-150%";
      document.getElementById("announcements").style.border = "none";
      // document.getElementById("announce").style.right = "35px";
      document.getElementById("arrowImage").src = "images/Event/bell.png";
      status = 0;
    } else if (status === 0) {
      document.getElementById("announcements").style.right = "0";
      document.getElementById("announcements").style.border = "none";

      // document.getElementById("announce").style.right = "65%";
      document.getElementById("arrowImage").src =
        "images/Event/bell.png";
      status = 1;
    }
  }

  return (
    <div>
      <Navbar />
      <div id="eventHome">
        <div id="eventHome-section1">
          <button onClick={handleClick} id="announce" style={{ zIndex: 100 }}>
            {" "}
            <img id="arrowImage" src="images/Event/bell.png" alt="" />
          </button>

          <Announcement />
          <img id="eventImage"
            src="/images/Event/EVENTS.svg"
            style={{ marginBottom: "15px" }}
            alt=""
          />

          <h3 className="event_tagline">
            {"I hope you're enjoying our Events and Competitions"}
          </h3>
          <img
            className="event_mouse"
            src="images/Event/clarity_mouse-line.svg"
            draggable={false}
            style={{ cursor: "pointer" }}
            onClick={() => {
              console.log("Scroll");
              window.scrollTo(0, 700);
            }}
          />
        </div>
      </div>
      <div id="eventHome-section2">
        <EventHome />
      </div>
      <Footer />
    </div>
  );
};

export default event;
