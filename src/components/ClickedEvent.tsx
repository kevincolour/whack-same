import React from "react";
import { Position } from "../../../whacka-same/src/app/util/addFirebaseData";
import { useFirebaseContext } from "../../../whacka-same/src/app/util/context";

export const ClickedEvent = () => {
  const db = useFirebaseContext();

  React.useEffect(() => {
    const handleMouseMove = (ev: MouseEvent) => {
      const userPosition: Position = {
        x: ev.pageX,
        y: ev.pageY,
      };

      // addFirebaseData(db, userPosition);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <></>;
};
