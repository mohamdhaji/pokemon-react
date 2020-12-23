import React from "react";
import ImgCard from "./imgCard";
import rightArrow from "../../../assets/images/arrowRight.png";
import leftArrow from "../../../assets/images/arrowLeft.png";

export default function Slider({ pokemons, setCard, paging,handlePaggingRight,handlePaggingLeft }) {
  const renderCards = () => {
    const cards = [];
    const { start, end } = paging;
    for (let i = start; i < end; i++) {
      const card = (
        <ImgCard
          setCard={() => setCard(pokemons[i])}
          key={pokemons[i].name}
          name={pokemons[i].name}
          img={pokemons[i].img}
        />
      );
      cards.push(card);
    }
    return cards;
  };

 
  return (
    <div className="slider">
      <img className="left-arrow" src={leftArrow} alt="" onClick={handlePaggingLeft} />
    <div className="legendary__slider">
     {renderCards()}
    </div>
      <img className="right-arrow" src={rightArrow} alt="" onClick={handlePaggingRight} />
    </div>
  );
}
