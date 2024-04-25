import { useContext } from "react";
import { collection, addDoc } from "firebase/firestore";
import { useFirebaseContext } from "../util/context";

export const addFirebaseData = async () => {
  const db = useFirebaseContext();

  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
