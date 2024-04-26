import { Database } from "firebase/database";
import { Firestore } from "firebase/firestore";
import React, { useContext } from "react";

import { createContext } from "react";
import { UserID } from "./addFirebaseData";

export const FirebaseContext = React.createContext<Database | undefined>(
  undefined
);

export const useFirebaseContext = () => {
  const currentFirebaseContext = useContext(FirebaseContext);
  if (!currentFirebaseContext) {
    throw new Error("No firebase context");
  }
  return currentFirebaseContext;
};

export const UserContext = React.createContext<UserID | undefined>(undefined);

export const useUserContextContext = () => {
  const currentUserContext = useContext(UserContext);
  if (!currentUserContext) {
    throw new Error("No user context");
  }
  return currentUserContext;
};
