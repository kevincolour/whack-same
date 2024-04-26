import React, { createContext, useState } from "react";
import { useRetrieveFirebase } from "./firebase/firebase";
import { Firestore } from "firebase/firestore";
import { FirebaseContext, UserContext } from "./util/context";
import { MainApp } from "./MainApp";
import { MouseTracker } from "./components/MouseTracker";

export default function Page() {
  // React.useEffect(()=> {
  //   const db = useRetrieveFirebase();
  // },[])
  console.log("home rendered");
  const db = useRetrieveFirebase();
  const user = crypto.randomUUID();

  return (
    <UserContext.Provider value={user}>
      <FirebaseContext.Provider value={db}>
        <main>
          <MainApp />
          <MouseTracker />
        </main>
        ;
      </FirebaseContext.Provider>
    </UserContext.Provider>
  );
}
