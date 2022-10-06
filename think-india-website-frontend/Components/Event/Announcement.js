import { useContext } from "react";
import AnnounceContext from "../../Context/Announcement/AnnounceContext";

const Announcement = () => {
  const { announces } = useContext(AnnounceContext);

  return (
    <div id="announcements">
      <div className="announceList" id="upperList">
        <h3>RECENT</h3>
        <ul className="">
          {announces &&
            Array.from(announces).map(
              (an) =>
                an.isNew && (
                  <li key={an._id}>
                    <img src="images/Event/Group 427318157.svg" />
                    <span> {an.announce}</span>
                  </li>
                )
            )}
        </ul>
      </div>
      <div className="announceList" id="lowerList">
        <h3>DATE HERE</h3>
        <ul className="">
          {announces &&
            Array.from(announces).map(
              (an) =>
                !an.isNew && (
                  <li key={an._id}>
                    <img src="images/Event/Group 427318157.svg" />
                    <span> {an.announce}</span>
                  </li>
                )
            )}
        </ul>
      </div>
    </div>
  );
};

export default Announcement;
