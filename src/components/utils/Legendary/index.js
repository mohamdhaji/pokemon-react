import React,{useState} from "react";
import CardInfo from "./cardInfo";
import Slider from "./slider";


export default function Legendary({ type, pokemons }) {
  const [selectedCard,setCard]=useState({name:pokemons[0].name,img:pokemons[0].img})
  const [paging,setPaging]=useState({start:0,end:6});

  const handlePaggingRight =()=>{
    const {start,end}=paging
    const length=pokemons.length;
    const s= start+6 >= length ? 0 : start+6;
    const e=end === length ? 6 : end+6 > length ? length : end+6;
    setPaging({start:s,end:e})
  }
  const handlePaggingLeft =()=>{
    const {start}=paging
    const length=pokemons.length;
    let s;
    let e;
    if(start === 0){
      s=length%6 !== 0 ? length-(length%6) : length-6;
      e=length
    }
    else {
      e=start
      s=start-6;
    }
    setPaging({start:s,end:e})

  }

  return (
    <div className="legendary-card">
      <div className="legendary-card__title">{type}</div>
      <CardInfo selectedCard={selectedCard} />
      <Slider handlePaggingLeft={handlePaggingLeft} handlePaggingRight={handlePaggingRight} paging={paging} setCard={setCard} pokemons={pokemons} />
    </div>
  );
}
