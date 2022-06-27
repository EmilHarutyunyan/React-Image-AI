import React from "react";
import {positions, Provider } from "react-alert";
import AlertTemplate from "./AlertTemplate";
import  Button  from "./Button";

const options = {
  timeout: 50000,
  position: positions.BOTTOM_RIGHT,
  type: "error",
};

const Alerts = ({errorBox, setError}) => {

  return (<Provider template={AlertTemplate} {...options}>
          <Button errorBox={errorBox} setError={setError}/>
  </Provider>)
};
export default Alerts;