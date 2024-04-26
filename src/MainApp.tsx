import React from "react";
import { ClickedEvent } from "./components/ClickedEvent";
import { onValue, ref } from "firebase/database";
import { useFirebaseContext, useUserContextContext } from "./util/context";
import {
  Position,
  TargetData,
  UserData,
  addFirebaseDataClicked,
  listenFirebase,
} from "./util/addFirebaseData";
import { Target } from "./components/Target";
import { getuid } from "process";

export const MainAppInner = () => {
  const [update, setUpdate] = React.useState<TargetData | undefined>(undefined);
  const db = useFirebaseContext();
  const user = useUserContextContext();
  const room = "roomTest";

  const databaseRef = ref(db, "rooms/" + room + "/targets");

  const databaseRefMouse = ref(db, "rooms/" + room + "/mouse");

  const targetClickedHandler = () => {
    addFirebaseDataClicked(databaseRef, user);
  };
  console.log("render");
  React.useEffect(() => {
    console.log("use effect");
    //listen for changes
    listenFirebase(databaseRef, setUpdate);
    //listen for changes in mouse
  }, []);

  const isHost = true;

  return <>{<Target onClickHandler={targetClickedHandler} data={update} />}</>;
};

export const MainApp = React.memo(MainAppInner);
