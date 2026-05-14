import { useEffect, useState } from "react";
import "./Activity4.css";
import PokemonCard from "../../../components/Pokemon-card/PokemonCard";

const Activity4 = () => {
  const [pokemonDB, setPokemonDB] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pokemon API endpoint - Get list of Pokemon
  const fetchPokemon = async () => {
    try {
      setLoading(true);
      setError(null);

      // First, get list of Pokemon
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=24", {
        method: "GET"
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      
      // Then fetch details for each Pokemon
      const pokemonDetails = await Promise.all(
        result.results.map(async (pokemon) => {
          const detailResponse = await fetch(pokemon.url);
          const detailData = await detailResponse.json();
          return detailData;
        })
      );
      
      // Simulate minimum loading time for better UXs
      setTimeout(() => {
        setPokemonDB(pokemonDetails);
        setLoading(false);
      }, 1200);
      
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
        <h1 className="activity4-title">POKEMON</h1>
        <p className="activity4-subtitle"> Generation 1 Pokemon</p>
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