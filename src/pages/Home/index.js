import React from "react";
import beka from "../../assets/images/beka.png"
import StyledLink from "../../components/utils/styledLink"
export default function Home() {
  return (
    <div className="Home-page">
      <div className="Home-content">
        <div className="Home-content__left">
        <div>

          <div className="Home-content__title"><span>Find</span> all your</div>
          <div className="Home-content__title">favorite</div>
          <div className="Home-content__title">Pokemon</div>
        </div>
          <div className="Home-content__text">
            You can know the type of Pokemon, its strengths, disadvantages and
            abilities
          </div>
          <button className="Home-button">
          <StyledLink to="/pokemon">See pokemons</StyledLink>
          
          </button>
        </div>
        <img className="Home-image"src={beka} alt="beka" />
      </div>
    </div>
  );
}
