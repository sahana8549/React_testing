import React, { useContext } from "react";
import { RootContext } from "../RootContext";
import "./Card.css";

const Card = () => {
  const { image, gender1 } = useContext(RootContext);

  console.log(gender1);
  return (
    <>
      {image?.map((details, index) => {
        const { email, name, picture, nat, gender } = details;
        console.log(gender);

        if (gender.toLowerCase() == gender1.toLowerCase() || gender1 == "All") {
          return (
            <div className="cardCon" key={index}>
              <img src={picture?.thumbnail} alt="image" className="image" />
              <div className="name">
                <p>{`${name?.title} ${name?.first} ${name?.last} (${nat}) `}</p>
                <p>{email}</p>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};
export default Card;
