import React, { useState, useContext, useEffect } from "react";
import useRequest from "../../Hooks/Request";
import TopLoadingContext from "../TopLoading/TopLoadingContext";
import AuthContext from "./AuthContext";
import { useSession } from "next-auth/react";

const HOST = process.env.NEXT_PUBLIC_BACKEND_LINK;

const AuthState = (props) => {
  const checkRequest = useRequest();
  const [user, setUser] = useState(null);
  const { startLoader, doneLoader } = useContext(TopLoadingContext);
  const { data: session } = useSession();

  useEffect(() => {
    if (session && !user) loginUser(session.user);
  }, [session]);

  // Logging In
  const loginUser = async (user) => {
    startLoader();
    const response = await fetch(HOST + "/auth/google-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const json = await response.json();
    checkRequest(response.status, json.error, null, () => {
      setUser(json.user);
    });
    doneLoader();
  };

  return (
    <AuthContext.Provider
      value={{
        loginUser,
        session,
        user,
        setUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
