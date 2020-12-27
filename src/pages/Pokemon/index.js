import React, { useState, useEffect } from "react";
import SeachInput from "../../components/utils/searchInput";
import PokemonFilter from "../../components/utils/Pokemon/pokemonFilter";
import Slider from "react-slick";
import CircularProgress from "@material-ui/core/CircularProgress";

import PekaCard from "../../components/utils/Pokemon/pekaCard";
import axios from "axios";
import PokemonModel from "../../components/utils/Modals/pokemonModel";

const initModal = {
  img: "",
  name: "",
  weight: "",
  experience: "",
  abilities: "",
  order: "",
};
const config = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  rows: 2,
};

export default function Pokemon() {
  const [filters, showHideFilter] = useState({
    type: { items: ["Fire", "Normal", "Bug", "Water", "Grass"], show: false },
    weight: { items: ["< 50", " < 150", "< 300", "< 450"], show: false },
    experience: {
      items: ["< 100", "< 200", "< 300", "< 400"],
      show: false,
    },
  });

  const [loading, setLoading] = useState(true);
  const [showModel, setShowModal] = useState(false);
  const [selectedFilters, setFilters] = useState({});
  const [search, setSearch] = useState("");
  const colors = {
    fire: ["#B23327", "#D93E30"],
    water: ["#5BC7FA", "#35BAFF"],
    bug: ["#F2CB07", "#F2B807"],
    grass: ["#64D368", "#64D368"],
    normal: ["#F89EAE", "#F4B5C1"],
  };

  const [pokemons, setPokemons] = useState([]);
  const [selectedCard, setSelectedCard] = useState(initModal);

  const toggleList = (filter) => () => {
    const newFilters = { ...filters };
    newFilters[filter].show = !newFilters[filter].show;
    showHideFilter(newFilters);
  };

  const [settings, setSettings] = useState(config);

  useEffect(() => {
    const pokemons = [];
    const promises = [];
    for (let i = 1; i <= 18; i++) {
      const promise = axios
        .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((res) => {
          const pokemon = res.data;
          const abilities = pokemon.abilities[0].ability.name;
          const name = pokemon.name;
          const experience = pokemon.base_experience;
          const weight = pokemon.weight;
          const order = pokemon.order;
          const img = `https://pokeres.bastionbot.org/images/pokemon/${i}.png`;
          const type = pokemon.types[0].type.name;
          pokemons.push({
            name: name,
            experience: experience,
            weight: weight,
            img: img,
            type: type,
            order: order,
            abilities: abilities,
          });
        });
      promises.push(promise);
    }
    Promise.all([...promises]).then((values) => {
      setPokemons(pokemons);
      setLoading(false);
    });

    // need fixing
    const handleHightChange = () => {
      if (window.innerHeight >= 1000) {
        setSettings((oldSettings) => {
          return { ...oldSettings, rows: 3 };
        });
      } else if (window.innerHeight < 1000) {
        setSettings((oldSettings) => {
          return { ...oldSettings, rows: 2 };
        });
      }
    };

    handleHightChange();

    window.addEventListener("resize", handleHightChange);
    return () => {
      // cleanup
      window.removeEventListener("resize", handleHightChange);
    };
  }, []);
  const handleFilter = (key) => (filter) => {
    filter = filter.toLowerCase();
    const newSelectedFilters = { ...selectedFilters };

    if (key !== "type") {
      filter = filter.split("<")[1].trim();
    }
    if (
      newSelectedFilters[key] &&
      newSelectedFilters[key].indexOf(filter) !== -1
    ) {
      newSelectedFilters[key].splice(
        newSelectedFilters[key].indexOf(filter),
        1
      );
      if (newSelectedFilters[key].length === 0) {
        delete newSelectedFilters[key];
      }
    } else if (newSelectedFilters[key]) {
      newSelectedFilters[key].push(filter.toLowerCase());
    } else {
      newSelectedFilters[key] = [filter.toLowerCase()];
    }

    setFilters(newSelectedFilters);
  };

  const setPokemon = (pokemon) => {
    const selectedPokemon = {
      name: pokemon.name,
      img: pokemon.img,
      order: pokemon.order,
      weight: pokemon.weight,
      experience: pokemon.experience,
      abilities: pokemon.abilities,
      colors: colors[pokemon.type],
    };
    setSelectedCard(selectedPokemon);

    setShowModal(true);
  };

  const filterCards = (
    type = ["fire", "normal", "bug", "water", "grass"],
    weight = Number.MAX_VALUE,
    experience = Number.MAX_VALUE
  ) => {
    let width = "100%";
    const data = pokemons.reduce((result, p) => {
      if (
        p["name"].startsWith(search) &&
        type.indexOf(p["type"]) !== -1 &&
        p["weight"] < weight &&
        p["experience"] < experience
      ) {
        result.push(p);
      }
      return result;
    }, []);
    if (
      (data.length <= 6 && settings.rows === 2) ||
      (data.length <= 9 && settings.rows === 3)
    ) {
      width = "30%";
    }

    return data.map((p) => (
      <PekaCard
        setPokemon={() => setPokemon(p)}
        width={width}
        key={p.name}
        name={p.name}
        experience={p.experience}
        weight={p.weight}
        img={p.img}
        color={colors[p.type][1]}
      />
    ));
  };

  let filteredPokemons = [];

  const renderCards = () => {
    if (Object.keys(selectedFilters).length > 0) {
      const weight = selectedFilters["weight"]
        ? Math.max(...selectedFilters["weight"])
        : Number.MAX_VALUE;
      const experience = selectedFilters["experience"]
        ? Math.max(...selectedFilters["experience"])
        : Number.MAX_VALUE;
      const types = selectedFilters["type"] || [
        "fire",
        "normal",
        "bug",
        "water",
        "grass",
      ];
      filteredPokemons = filterCards(types, weight, experience);
    } else {
      filteredPokemons = filterCards();
    }

    return filteredPokemons;
  };
  const handleShowSlider = (pokeCards) => {
    if (settings.rows === 2 && pokeCards.length > 6) return true;
    else if (settings.rows === 3 && pokeCards.length > 9) return true;
    else return false;
  };
  const closeModal = () => {
    setShowModal(false);
    setSelectedCard(initModal);
  };
  const checkHandle = (filter) => (filterName) => {
    if (filter !== "type") filterName = filterName.split("<")[1].trim();
    else if (filter === "type") filterName = filterName.toLowerCase();

    if (
      selectedFilters[filter] &&
      selectedFilters[filter].indexOf(filterName) !== -1
    )
      return true;
    else return false;
  };
  const pokeCards = pokemons.length > 0 ? renderCards() : [];
  const showSlider = handleShowSlider(pokeCards);
  return (
    <div>
      {showModel ? (
        <>
          {" "}
          <div onClick={closeModal} className="backdrop"></div>{" "}
          <PokemonModel closeModal={closeModal} pokemon={selectedCard} />{" "}
        </>
      ) : null}

      <div className="pokemon-page">
        <div className="pokemon-page__title">
          800 <span>Pokemons</span> for you to choose your favorite
        </div>
        <SeachInput
          search={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <div className="pokemon-page__filters">
          {Object.keys(filters).map((filter) => (
            <PokemonFilter
              checked={checkHandle(filter)}
              toggleList={toggleList(filter)}
              key={filter}
              filter={filter}
              filters={filters[filter]}
              handleFilter={handleFilter(filter)}
            />
          ))}
        </div>
      </div>
      <div className="slider-container">
      {
        loading ? <CircularProgress size="80px" style={{ color: "#00bcd4",position:"absolute",top:0,right:0,left:0,bottom:0,margin:"auto" }} thickness={5} /> 
        :pokeCards && showSlider ? (
          <Slider className="slick-slider" {...settings}>
            {pokeCards}
          </Slider>
        ) : (
          <div className="pokemon-cards">{pokeCards}</div>
        )
      }
    </div>
    </div>
  );
}
