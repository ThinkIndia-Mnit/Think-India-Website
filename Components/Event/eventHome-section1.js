import { useContext, useEffect } from "react";
import AuthContext from "../../Context/Auth/AuthContext.js";
import EventContext from "../../Context/Event/EventContext.js";
import Card from "./card.js";

const EventHome = () => {
  const { fetchAllEvents, allEvents } = useContext(EventContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchAllEvents();
  }, [user]);

  return (
    <div className="EVTcontainer">



      <div className="EVTleft">
        <div className="EYheading">
          <h2>Yearly Event</h2>
        </div>
        <div className="EYlist">
          <ul>
            <li>
              <label>
                <p>Current year</p>
              </label>
            </li>
            
            <li>
              <label>
                <p>2020-2021</p>
              </label>
            </li>
            <li>
              <label>
                <p>2019-2020</p>
              </label>
            </li>
            <li>
              <label>
                <p>2018-2019</p>
              </label>
            </li>
            <li>
              <label>
                <p>2017-2018</p>
              </label>
            </li>
          </ul>
        </div>
      </div>




      <div className="EVTright">
        <div className="EVTeventheading">Upcoming Events</div>

        <div className="EVTcardpack">
          {allEvents &&
            Array.from(allEvents).map((el) => (
              <Card
                key={el._id}
                event={el}
                registered={
                  user
                    ? user.myEvents
                      ? Array.from(user.myEvents).indexOf(el._id) !== -1
                      : false
                    : false
                }
              />
            ))}
        </div>

        <div className="EVTeventheading">Ongoing Events</div>

        <div className="EVTcardpack">
          <Card
            eventname={"Event Name"}
            categoryofevent={"Category"}
            awardamount={"5K"}
            abouttheevent={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque autem magni expedita."
            }
          />
          <Card
            eventname={"Event Name"}
            categoryofevent={"Category"}
            awardamount={"5K"}
            abouttheevent={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque autem magni expedita."
            }
          />
          <Card
            eventname={"Event Name"}
            categoryofevent={"Category"}
            awardamount={"5K"}
            abouttheevent={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque autem magni expedita."
            }
          />
        </div>
      </div>



    </div>
  );
};

export default EventHome;
