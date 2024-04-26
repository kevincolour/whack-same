import { ref } from "firebase/database";
import { useFirebaseContext, useUserContextContext } from "../util/context";
import React from "react";
import {
  Position,
  UserPositionData,
  addFirebaseMouseData,
  listenFirebaseMouse,
} from "../util/addFirebaseData";

export const MouseTracker = () => {
  const [update, setUpdate] = React.useState<UserPositionData | undefined>(
    undefined
  );

  const db = useFirebaseContext();
  const user = useUserContextContext();

  const room = "roomTest";
  const databaseRefMouse = ref(db, "rooms/" + room + "/mouse/" + user);

  React.useEffect(() => {
    listenFirebaseMouse(databaseRefMouse, setUpdate);

    const handleMouseMove = (ev: MouseEvent) => {
      const userPosition: Position = {
        x: ev.pageX,
        y: ev.pageY,
      };

      addFirebaseMouseData(databaseRefMouse, userPosition, user);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          left: update?.position.x,
          top: update?.position.y,
          width: 200,
          height: 200,
          backgroundColor: "red",
        }}
      >
        test
      </div>
    </>
  );
};
