import React, { createContext, useState } from "react";
export const RootContext = createContext({});

export const Rootprovider = ({ children }) => {
  const [image, setImage] = useState([]);
  const [gender1, setGender] = useState("Male");
  const [place, setPlace] = useState("AU");

  return (
    <RootContext.Provider
      value={{ setImage, image, setGender, gender1, place, setPlace }}
    >
      {children}
    </RootContext.Provider>
  );
};
