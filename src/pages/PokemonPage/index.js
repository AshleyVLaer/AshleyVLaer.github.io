// import styles from "./PokemonPage.module.scss";
import React, { useState, useEffect } from "react";
import { useQuery, useManualQuery } from "graphql-hooks";

import { ALL_POKEMONS_QUERY, POKEMON_BY_NAME_QUERY } from "../../services/graphql/getData";

import SearchList from "../../components/_pokemon_page/SearchList";
import CardContainer from "../../components/_pokemon_page/CardContainer";
import DetailView from "../../components/_default/DetailView";
import DetailContent from "../../components/_pokemon_page/DetailContent";
import Spinner from "../../components/_default/Spinner";

export default function PokemonPage(props) {
  const [value, setValue] = useState("");
  const [pokemons, setPokemons] = useState(false);
  const [savePokemon, setSavePokemon] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(false);
  const [showPokemonPopup, setShowPokemonPopup] = useState(false);
  const [cards, setCards] = useState(new Array(6).fill(false));
  const [abilities, setAbilities] = useState(new Array(4).fill(false));

  const { loading, error, data } = useQuery(ALL_POKEMONS_QUERY, {
    variables: {
      limit: 10
    }
  });

  const [fetchPokemon] = useManualQuery(POKEMON_BY_NAME_QUERY);

  useEffect(() => {
    if (data?.Pokemons) setPokemons(data.Pokemons);
  }, [data]);

  useEffect(async () => {
    if (showPokemonPopup) {
      setSelectedPokemon(false);
      const poke = await fetchPokemon({
        variables: { name: showPokemonPopup }
      });
      setSelectedPokemon(poke);
    }
  }, [showPokemonPopup]);

  useEffect(() => {
    if(savePokemon && selectedPokemon?.data?.Pokemon){
      const _index = cards.findIndex((e) => e === false);
      if (_index !== -1) {
        setCards((prevState) => {
          const newState = [...prevState];
          newState[_index] = {...selectedPokemon.data.Pokemon, abilities}
          return newState;
        });

      }
    }
    closeDetailView()
  }, [savePokemon]);

  function handleSearch(e) {
    let _filter = data.Pokemons.filter(({ name }) => {
      let searchResult = name.toLowerCase();
      return searchResult.indexOf(e.target.value.toLowerCase()) !== -1;
    });
    setPokemons(_filter);
    setValue(e.target.value);
  }

  function closeDetailView() {
    setShowPokemonPopup(false);
    setSavePokemon(false);
    setSelectedPokemon(false);
  }

  function handleCardClick(item, idx) {
    if(item){
      setCards((prevState) => {
        const newState = [...prevState];
        newState[idx] = false;
        return newState;
      });
    }
  }

  return (
    <>
      <SearchList onClick={(e) => setShowPokemonPopup(e)} loading={loading} error={error} list={pokemons} value={value} placeholder="Search a Pokémon" onChange={handleSearch} />
      <CardContainer cards={cards} handleCardClick={handleCardClick}/>
      <DetailView button_text="Save" title={"Add " + showPokemonPopup} subtitle="to squad" handleClose={() => closeDetailView()} handleAction={() => setSavePokemon(true)} open={showPokemonPopup}>
        {selectedPokemon?.data ? <DetailContent name={showPokemonPopup} data={selectedPokemon?.data.Pokemon} abilities={abilities} setAbilities={setAbilities} /> : <Spinner />}
      </DetailView>
    </>
  );
}
