import { CSSProperties } from "react";
import { TargetData, UserData } from "../util/addFirebaseData";

export type TargetProps = {
  onClickHandler: () => void;
  data: TargetData | undefined;
};

export const Target = ({ onClickHandler, data }: TargetProps) => {
  return (
    <div onClick={onClickHandler} style={styles}>
      {data?.target1.clicked}
    </div>
  );
};

const styles: CSSProperties = {
  width: 200,
  height: 200,
  background: "red",
};
