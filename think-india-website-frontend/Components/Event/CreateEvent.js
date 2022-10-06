import React, { useState, useContext, useEffect } from "react";
import { styles, css } from "../Animations/Animations";
import EventContext from "../../Context/Event/EventContext";
import UploadImage from "../../Functions/UploadImage";
import TagInput from "../TagInput/TagInput";

const CreateEvent = ({ closeModal, initData }) => {
  const [tags, setTags] = useState(initData ? [...initData.tags] : []);

  const [detail, setDetail] = useState(
    initData === undefined || initData === null
      ? {
          title: "",
          description: "",
          price: "",
          date: "",
          time: "",
          venue: "",
          image: null,
          link: "",
        }
      : {
          eId: initData.eId,
          title: initData.heading,
          description: initData.description,
          price: String(initData.price),
          date: initData.date,
          time: initData.time,
          venue: initData.venue,
          image: initData.imgSrc,
          link: initData.link,
        }
  );

  useEffect(() => {
    if (initData) {
      var image = document.getElementById("output-image");
      image.src = initData.imgSrc;
      image.style.display = "block";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = () => {
    setDetail({
      eId: initData && initData.eId,
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
      price: document.getElementById("price").value,
      date: document.getElementById("date").value,
      time: document.getElementById("time").value,
      venue: document.getElementById("venue").value,
      image: detail.image,
      link: document.getElementById("link").value,
    });
  };

  const imageLoad = (event) => {
    var image = document.getElementById("output-image");
    if (event.target.files.length !== 0) {
      image.src = URL.createObjectURL(event.target.files[0]);
      image.style.display = "block";
      let newDetail = { ...detail };
      newDetail.image = image.src;
      setDetail({ ...newDetail });
    }
  };

  const { createEvent, editEvent } = useContext(EventContext);

  const handleCreate = () => {
    var image = document.getElementById("output-image");
    UploadImage(image, (imgData) => {
      createEvent(detail, tags, imgData, closeModal);
    });
  };

  const handleEdit = () => {
    var image = document.getElementById("output-image");
    UploadImage(image, (imgData) => {
      editEvent(detail, tags, imgData, closeModal);
    });
  };

  return (
    <div id="createEvent" className={css(styles.slideInDown)}>
      <div className="background">
        <div className="container">
          <div className="screen">
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>{initData ? "EDIT" : "CREATE"}</span>
                </div>
                <div className="app-image">
                  <div
                    style={{
                      color: "black",
                      height: "100%",
                      width: "100%",
                      lineHeight: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <label htmlFor="file">
                      <input
                        type="file"
                        accept="image/gif, image/jpeg, image/png"
                        name="image"
                        id="file"
                        style={{
                          display: "none",
                        }}
                        onChange={imageLoad}
                      />
                      {detail.image === null ? (
                        <>
                          <p>
                            <label
                              id="image-label"
                              htmlFor="file"
                              style={{
                                cursor: "pointer",
                                border: "1px solid black",
                                padding: "10px",
                                borderRadius: "5px",
                              }}
                            >
                              Upload Image
                            </label>
                          </p>
                        </>
                      ) : (
                        ""
                      )}
                      <img
                        id="output-image"
                        style={{
                          display: "none",
                          width: "100%",
                          height: "100%",
                        }}
                        alt=""
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="screen-body-item">
                <div className="app-form">
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="TITLE"
                      id="title"
                      value={detail.title}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="app-form-group message">
                    <textarea
                      className="app-form-control"
                      placeholder="DESCRIPTION"
                      id="description"
                      value={detail.description}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="app-form-group message">
                    <input
                      type="number"
                      className="app-form-control"
                      placeholder="AMOUNT"
                      id="price"
                      value={detail.price}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      type="date"
                      id="date"
                      value={detail.date}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      type="time"
                      id="time"
                      value={detail.time}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="VENUE"
                      id="venue"
                      value={detail.venue}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="app-form-group">
                    <TagInput tags={tags} setTags={setTags} />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="EVENT LINK (for online)"
                      id="link"
                      value={detail.link}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="app-form-group buttons">
                    <button
                      className="app-form-button"
                      onClick={initData ? handleEdit : handleCreate}
                    >
                      {initData ? "SAVE" : "CREATE"}
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

export default CreateEvent;
