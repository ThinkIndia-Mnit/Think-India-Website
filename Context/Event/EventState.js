import React, { useContext, useState } from "react";
import useRequest from "../../Hooks/Request";
import AuthContext from "../Auth/AuthContext";
import TopLoadingContext from "../TopLoading/TopLoadingContext";
import EventContext from "./EventContext";

const HOST = process.env.NEXT_PUBLIC_BACKEND_LINK;

const EventState = (props) => {
  const [allEvents, setAllEvents] = useState([]);
  const [myEvents, setMyEvents] = useState([]);
  const [eventRegistrations, setEventRegistrations] = useState([]);
  const { startLoader, doneLoader } = useContext(TopLoadingContext);
  const { session, user, loginUser, setUser } = useContext(AuthContext);
  const checkRequest = useRequest();

  const fetchAllEvents = async () => {
    startLoader();
    const response = await fetch(HOST + "/events/all", {
      method: "GET",
    });
    const json = await response.json();
    setAllEvents(json);
    doneLoader();
  };

  const fetchMyEvents = async () => {
    console.log("hi");
    if (session && user) {
      const response = await fetch(HOST + "/events", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userEmail: session.user.email }),
      });
      const json = await response.json();
      console.log(json);
      checkRequest(response.status, null, null, () => {
        setMyEvents(json);
      });
    } else {
      setMyEvents([]);
    }
  };

  const fetchRegistrations = async (_id) => {
    if (session && user) {
      startLoader();
      const response = await fetch(HOST + "/events/registrations", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ eventId: _id, userEmail: session.user.email }),
      });
      const json = await response.json();
      checkRequest(response.status, json.error, null, () => {
        setEventRegistrations(json);
      });
      doneLoader();
    } else {
      checkRequest(404, "Login First", null, () => {
        setEventRegistrations([]);
      });
    }
  };

  const registerInEvent = async (_id) => {
    if (session && user) {
      startLoader();
      const response = await fetch(HOST + "/events/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ eventId: _id, userEmail: session.user.email }),
      });
      const json = await response.json();
      checkRequest(
        response.status,
        json.error,
        "Registered successfully",
        () => {
          loginUser;
        }
      );
      doneLoader();
    } else {
      checkRequest(404, "Login First", null, () => {
        setMyEvents([]);
      });
    }
  };

  const unregisterInEvent = async (_id) => {
    if (session && user) {
      startLoader();
      const response = await fetch(HOST + "/events/unregister", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ eventId: _id, userEmail: session.user.email }),
      });
      const json = await response.json();
      checkRequest(
        response.status,
        json.error,
        "UnRegistered successfully",
        () => {
          setUser(json.user);
        }
      );
      doneLoader();
    } else {
      checkRequest(404, "Login First", null, () => {
        setMyEvents([]);
      });
    }
  };

  const closeRegistration = async (_id) => {
    if (localStorage.getItem("token")) {
      startLoader();
      const response = await fetch(HOST + "/events/closeRegistrations/" + _id, {
        method: "POST",
        headers: {
          "auth-token": JSON.parse(localStorage.getItem("token")),
        },
      });
      const json = await response.json();
      checkRequest(response.status, json.error, "Event Closed", () => {
        fetchAllEvents();
      });
      doneLoader();
    } else {
      checkRequest(404, "Login First", null, () => {
        setMyEvents([]);
      });
    }
  };

  const createEvent = async (eventDetail, tags, img, closeModal) => {
    if (session && user) {
      if (img) {
        startLoader();
        const response = await fetch(HOST + "/events", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: eventDetail.title,
            description: eventDetail.description,
            tags: tags,
            date: eventDetail.date,
            time: eventDetail.time,
            venue: eventDetail.venue,
            link: eventDetail.link,
            img: img,
            userEmail: session.user.email,
          }),
        });
        const json = await response.json();
        checkRequest(response.status, json.error, "Created new event", () => {
          closeModal();
          fetchAllEvents();
          fetchMyEvents();
        });
        doneLoader();
      } else {
        checkRequest(404, "Upload an image", null, () => {});
      }
    } else {
      checkRequest(404, "Login First", null, () => {});
    }
  };

  const editEvent = async (eventDetail, tags, img, closeModal) => {
    if (session && user) {
      if (img) {
        startLoader();
        const response = await fetch(HOST + "/events", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: eventDetail.title,
            description: eventDetail.description,
            tags: tags,
            date: eventDetail.date,
            time: eventDetail.time,
            venue: eventDetail.venue,
            link: eventDetail.link,
            img: img,
            userEmail: session.user.email,
            eventId: eventDetail.eId,
          }),
        });
        const json = await response.json();
        checkRequest(response.status, json.error, "Event Updated", () => {
          closeModal();
          fetchAllEvents();
          fetchMyEvents();
        });
        doneLoader();
      } else {
        checkRequest(404, "Upload an image", null, () => {});
      }
    } else {
      checkRequest(404, "Login First", null, () => {});
    }
  };

  return (
    <EventContext.Provider
      value={{
        allEvents,
        myEvents,
        eventRegistrations,
        setEventRegistrations,
        fetchAllEvents,
        fetchMyEvents,
        fetchRegistrations,
        registerInEvent,
        unregisterInEvent,
        closeRegistration,
        createEvent,
        editEvent,
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};

export default EventState;
