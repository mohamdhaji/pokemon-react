import React from "react";
import close from "../../../assets/images/close.png";
export default function PokemonModel(props) {
  const {
    name,
    img,
    weight,
    experience,
    abilities,
    colors,
    order,
    
  } = props.pokemon;
  return (
    <div className="pokemon-model">
      <div onClick={props.closeModal} className="model__close">
        <img src={close} alt="" />
      </div>
      <div
        style={{ backgroundColor: colors[0] }}
        className="pokemon-model__left"
      >
        <img src={img} alt="" />
        <div
          style={{ position: "absolute", bottom: "4px", right: "15px" }}
          className="peka-actions"
        >
          <button
            style={{
              width: "70px",
              borderRadius: "20px",
              padding: 0,
              border: 0,
              fontSize: "16px",
            }}
            className="peka-actions__grass"
          >
            {" "}
            grass
          </button>
          <button
            style={{
              width: "70px",
              borderRadius: "20px",
              padding: 0,
              border: 0,
              fontSize: "16px",
            }}
            className="peka-actions__poison"
          >
            {" "}
            poison
          </button>
        </div>
      </div>
      <div
        style={{ backgroundColor: colors[1] }}
        className="pokemon-model__right"
      >
        <div className="pokemon-model__title">
          <div className="pokemon-model__title-name">{name}</div>
          <div className="pokemon-model__title-generation">Generation 1</div>
          <div className="pokemon-model__title-order">{order}</div>
        </div>
        <div className="pokemon-model__abilities">
          <div>Abilities</div>
          <div>{abilities}</div>
        </div>
        <div className="pokemon-model__body">
          <div className="pokemon-model__health">
            <div>Healthy Points</div>
            <div>1 000 000</div>
          </div>
          <div className="pokemon-model__experience">
            <div>Experience</div>
            <div>1 000 000</div>
          </div>
        </div>
        <div className="pokemon-model__footer">
          <div className="pokemon-model__footer-card">
            <div className="pokemon-model__circle">{experience}</div>
            <div className="pokemon-model__circle-info">Experience</div>
          </div>
          <div className="pokemon-model__footer-card">
            <div className="pokemon-model__circle">{weight}</div>
            <div className="pokemon-model__circle-info">Weight</div>
          </div>
          <div className="pokemon-model__footer-card">
            <div className="pokemon-model__circle">{experience}</div>
            <div className="pokemon-model__circle-info">Experience</div>
          </div>
          <div className="pokemon-model__footer-card">
            <div className="pokemon-model__circle">{weight}</div>
            <div className="pokemon-model__circle-info">Weight</div>
          </div>
        </div>
      </div>
    </div>
  );
}
