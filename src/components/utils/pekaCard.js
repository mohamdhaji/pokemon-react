import React from "react";

export default function PekaCard({ name, weight, experience, img,color,width ,setPokemon}) {
  return (
    <div onClick={setPokemon} style={{width:width}} className="peka-card">
      <div className="peka-card__left">
        <h3 className="peka-name">{name}</h3>
        <div className="peka-power">
          <div className="peka-power__shape">{weight}</div>
          <div className="peka-power__shape">{experience}</div>
        </div>
        <div className="peka-power">
          <div>Weight</div>
          <div>Experience</div>
        </div>
        <div className="peka-actions">
          <button className="peka-actions__grass"> grass</button>
          <button className="peka-actions__poison"> poison</button>
        </div>
      </div>
      <div className="peka-card__img-container" style={{backgroundColor:color}}>
        <img className="peka-card__img" src={img} alt="" />
      </div>
    </div>
  );
}
