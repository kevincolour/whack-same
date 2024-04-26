import { useContext } from "react";
import { collection, addDoc, Firestore, doc, setDoc } from "firebase/firestore";
import { useFirebaseContext } from "../util/context";
import {
  Database,
  DatabaseReference,
  onValue,
  ref,
  set,
} from "firebase/database";

export type Position = {
  x: number;
  y: number;
};

export type UserPositionData = {
  position: Position;
};

export type UserID = string;

export type UserData = {
  clicked: UserID;
  timer: string;
};

export type TargetData = {
  target1: UserData;
};

export const addFirebaseDataClicked = async (
  ref: DatabaseReference,
  user: string
) => {
  // try {
  //   const docRef = await addDoc(collection(db, "users"), {
  //     first: "Ada",
  //     last: "Lovelace",
  //     born: 1815,
  //   });
  //   console.log("Document written with ID: ", docRef.id);
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  // }
  const targetData = {
    clicked: user,
    timer: Date.now(),
  };

  set(ref, {
    target1: targetData,
  });
};

export const listenFirebase = (
  ref: DatabaseReference,
  setUpdate: (targetData: TargetData) => void
) => {
  onValue(ref, (snapshot) => {
    const data = snapshot.val();
    setUpdate(data);
    console.log(data);
  });
};

export const listenFirebaseMouse = (
  ref: DatabaseReference,
  setUpdate: (targetData: UserPositionData) => void
) => {
  onValue(ref, (snapshot) => {
    const data = snapshot.val();
    setUpdate(data);
  });
};

export const addFirebaseMouseData = (
  ref: DatabaseReference,
  position: Position
) => {
  set(ref, position);
};
