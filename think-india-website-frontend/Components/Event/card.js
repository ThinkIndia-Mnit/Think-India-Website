import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/Auth/AuthContext";
import EventContext from "../../Context/Event/EventContext";

const Card = ({ event, registered }) => {
  console.log(event, registered);
  const { registerInEvent, unregisterInEvent } = useContext(EventContext);
  const { user } = useContext(AuthContext);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    if (event) {
      setIsRegistered(
        user
          ? user.myEvents
            ? Array.from(user.myEvents).indexOf(event._id) !== -1
            : false
          : false
      );
    }
  }, [user, event]);

  return (
    <>
      {event && (
        <>
          <Head>
            <style>{`
        #${String(event._id)}::before{
          background: url(${event.img}) !important;
          background-size: cover;
          width:10px;
        }
        `}</style>
          </Head>
          <div className="EVTcard" id={event._id ? String(event._id) : ""}>
            <img
              className="EVTImg"
              src={event.img || "/images/about_image.png"}
            ></img>
            <div className="EspaceFromTop"> </div>
            <div className="EVTevent-info">
              <p className="EVTcategory">{event.tags[0]}</p>
              <div className="EVTmiddle">
                <div className="EVTleftmiddle">
                  <p className="EVTtitle">{event.title}</p>
                  <p className="EVTinfo"> Award INR {event.awardamount || 0}</p>
                </div>
                <div className="EVTrightmiddle">
                  <img src="images/Event/trophy.svg" />
                </div>
              </div>
              <p className="EVTabout">{event.description}</p>
            </div>
            <div className="EVTbuttons">
              <button
                className="EVTaction EVTactionBorder1"
                onClick={() => {
                  isRegistered
                    ? unregisterInEvent(event._id)
                    : registerInEvent(event._id);
                }}
              >
                {isRegistered ? "Registered" : "Register"}
              </button>
              <button className="EVTaction EVTactionBorder2">Explore</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Card;
