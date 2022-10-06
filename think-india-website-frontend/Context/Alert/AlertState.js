import React from "react";
import { useAlert } from "react-alert";
import AlertContext from "./AlertContext";

const AlertState = (props) => {
  const alert = useAlert();

  const showAlert = (type, msg) => {
    if (msg !== null) {
      if (type === "success") alert.success(msg);
      else if (type === "danger") alert.error(msg);
      else alert.show(msg);
    }
  };

  return (
    <AlertContext.Provider value={{ alert, showAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
