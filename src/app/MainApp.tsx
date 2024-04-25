import React from "react";
import { ClickedEvent } from "./ClickedEvent";

export const MainApp = () => {
  const [clicked, setClicked] = React.useState<boolean>(false);
  const onClickHandler = () => {
    setClicked(true);
    test();
  };

  return (
    <>
      <button onClick={onClickHandler}>click me</button>
      {clicked && <ClickedEvent />}
    </>
  );
};

const test = async () => {
  return null;
};
