import React, { useEffect, useState } from "react";
import useRequest from "../../Hooks/Request";
import AnnounceContext from "./AnnounceContext";

const HOST = process.env.NEXT_PUBLIC_BACKEND_LINK;

const AnnounceState = (props) => {
  const checkRequest = useRequest();
  const [announces, setAnnounces] = useState([]);

  useEffect(() => {
    fetchAnnounces();
  }, []);

  // Fetching
  const fetchAnnounces = async () => {
    const response = await fetch(HOST + "/announce", {
      method: "GET",
    });
    const json = await response.json();
    checkRequest(response.status, json.error, null, () => {
      setAnnounces(json.announce);
    });
  };

  // Creating
  const createAnnounces = async (announcement, closeModal) => {
    const response = await fetch(HOST + "/announce", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ announcement }),
    });
    const json = await response.json();
    checkRequest(response.status, json.error, "Announcement Created", () => {
      closeModal();
      fetchAnnounces();
    });
  };

  return (
    <AnnounceContext.Provider
      value={{
        announces,
        fetchAnnounces,
        createAnnounces,
      }}
    >
      {props.children}
    </AnnounceContext.Provider>
  );
};

export default AnnounceState;
