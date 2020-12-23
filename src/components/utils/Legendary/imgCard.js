import React from "react";
import ball from "../../../assets/images/ball.png";
export default function ImgCard({ name, img ,setCard}) {
  return (
    <div onClick={setCard} className="pokemon-img__card">
      <div className="pokemon-img__container">
        <img src={img} alt="" />
      </div>
      <div className="pokemon-img__card-footer">
       <div>{name}</div> 
        <img src={ball} alt="" />
      </div>
    </div>
  );
}
