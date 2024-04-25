import React from "react";
import { addFirebaseData } from "./util/addFirebaseData";

export const ClickedEvent = () => {
  addFirebaseData();
  React.useEffect(() => {}, []);

  return <></>;
};
