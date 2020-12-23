import React from "react";
import line from "../../../assets/images/Line.png"
export default function CardInfo(props) {
  const {name,img}=props.selectedCard;
  return (
    <div className="legendary__card-info">
        <div className="img-container">
      <img src={img} alt="" />

        </div>
      <div className="card-info__right">
        <div className="name">{name}</div>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.{" "}
        </p>
        <div className="properties">
            <div className="properties-card">
                <div>Healthy Points</div>
                <div >1000,000</div>
                <img src={line} alt=""/>
            </div>
            <div className="properties-card">
                <div>Experience</div>
                <div >1000,000</div>
                <img src={line} alt=""/>
            </div>
            <div className="properties-card">
                <div>Attack</div>
                <div >1000,000</div>
                <img src={line} alt=""/>
            </div>
            <div className="properties-card">
                <div>Defense</div>
                <div >1000,000</div>
                <img src={line} alt=""/>
            </div>
            <div className="properties-card">
                <div>Special Attack</div>
                <div >1000,000</div>
                <img src={line} alt=""/>
            </div>
            <div className="properties-card">
                <div>Special Defense</div>
                <div >1000,000</div>
                <img src={line} alt=""/>
            </div>
        </div>
      </div>
    </div>
  );
}
