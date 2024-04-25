"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React, { createContext, useState } from "react";
import { useRetrieveFirebase } from "./firebase/firebase";
import { Firestore } from "firebase/firestore";
import { FirebaseContext } from "./util/context";
import { MainApp } from "./MainApp";

export default function Home() {
  // React.useEffect(()=> {
  //   const db = useRetrieveFirebase();
  // },[])
  console.log("home rendered");
  const db = useRetrieveFirebase();

  return (
    <FirebaseContext.Provider value={db}>
      <main className={styles.main}>
        <MainApp />
      </main>
      ;
    </FirebaseContext.Provider>
  );
}
