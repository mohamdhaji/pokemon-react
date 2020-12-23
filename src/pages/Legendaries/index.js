import React, { useState, useEffect } from "react";
import axios from "axios";
import Legendary from "../../components/utils/Legendary";
export default function Legendaries() {
  const [types, settypes] = useState([]);

  useEffect(() => {
    const types = [];
    const promises = [];
    for (let i = 5; i < 8; i++) {
      const promise = axios
        .get(`https://pokeapi.co/api/v2/type/${i}`)
        .then((res) => {
          const type = res.data;
          const typename = type.name;
          const pokemons = [];
          const length = type.pokemon.length > 16 ? 16 : type.pokemon.length;
          for (let i = 1; i < length; i++) {
            const pokename = type.pokemon[i].pokemon.name;
            const url = type.pokemon[i].pokemon.url;
            const id = +url.charAt(url.length - 2);
            if(id === 0)
            continue;
            const img = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
            pokemons.push({ name: pokename, img: img });
          }
          types.push({ type: typename, pokemons: pokemons });
        });

      promises.push(promise);
    }
    Promise.all([...promises]).then((_) => {
      settypes(types);
    });
  }, []);

  return (
    <div className="Legendaries">
      {types.length > 0
        ? types.map((t) => (
            <Legendary key={t.type} type={t.type} pokemons={t.pokemons} />
          ))
        : null}
    </div>
  );
}
