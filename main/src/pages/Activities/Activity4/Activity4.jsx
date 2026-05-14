import { useEffect, useState } from "react";
import "./Activity4.css";
import PokemonCard from "../../../components/pokemon-card/PokemonCard";  // ← lowercase 'p'

const Activity4 = () => {
  const [pokemonDB, setPokemonDB] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=24", {
        method: "GET"
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      
      const pokemonDetails = await Promise.all(
        result.results.map(async (pokemon) => {
          const detailResponse = await fetch(pokemon.url);
          const detailData = await detailResponse.json();
          return detailData;
        })
      );
      
      setTimeout(() => {
        setPokemonDB(pokemonDetails);
        setLoading(false);
      }, 1500);
      
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className="activity4-container">
      <header className="activity4-header">
        <h1 className="activity4-title">Pokemon API</h1>
        <p className="activity4-subtitle">Fetching data from PokeAPI</p>
      </header>

      <PokemonCard 
        pokemonData={pokemonDB}
        loading={loading}
        error={error}
        onRetry={fetchPokemon}
      />
    </div>
  );
};

export default Activity4;