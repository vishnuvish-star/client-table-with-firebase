"use client";
import { createContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "./firebaseConfig";
export const TableContext = createContext();
export const TableContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  // Get all documents in a collection
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "clients"));
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      setData((prev) => [...prev, doc.data()]);
      // console.log(data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  // random key generator
  let randomKey = Math.round(Math.random() * 100);
  // console.log(randomKey);
  // sorting

  return (
    <TableContext.Provider value={{ data, randomKey }}>
      {children}
    </TableContext.Provider>
  );
};
