import { useContext, useState } from "react";
import AnnounceContext from "../../Context/Announcement/AnnounceContext";
import { styles, css } from "../Animations/Animations";

const CreateAnnounce = ({ closeModal }) => {
  const { createAnnounces } = useContext(AnnounceContext);
  const [announce, setAnnounce] = useState("");

  const submit = () => {
    createAnnounces(announce, closeModal);
  };

  return (
    <div id="createEvent" className={css(styles.slideInDown)}>
      <div className="background">
        <div className="container">
          <div className="screen">
            <div className="screen-body">
              <div className="screen-body-item">
                <div className="app-form">
                  <div className="app-form-group">
                    <textarea
                      className="app-form-control"
                      placeholder="ANNOUNCEMENT"
                      id="announcement"
                      style={{ width: "350px" }}
                      value={announce}
                      onChange={(e) => {
                        setAnnounce(e.target.value);
                      }}
                    />
                  </div>
                  <div className="app-form-group buttons">
                    <button className="app-form-button" onClick={submit}>
                      Announce
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAnnounce;
