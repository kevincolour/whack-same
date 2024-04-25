import { Firestore } from "firebase/firestore";
import React, { useContext } from "react";

import { createContext } from "react";

export const FirebaseContext = React.createContext<Firestore | undefined>(
  undefined
);

export const useFirebaseContext = () => {
  const currentFirebaseContext = useContext(FirebaseContext);
  if (!currentFirebaseContext) {
    throw new Error("No user context");
  }
  return currentFirebaseContext;
};
