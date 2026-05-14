import "./PokemonCard.css";

const PokemonCard = ({ pokemonData = [], loading = true, error = null, onRetry }) => {
  
  // Show SKELETON LOADER while fetching
  if (loading) {
    return (
      <div className="pokemon-container">
        <div className="pokemon-grid">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="pokemon-card skeleton-card">
              {/* Skeleton Image */}
              <div className="pokemon-image-wrapper skeleton-wrapper">
                <div className="pokemon-image skeleton shimmer"></div>
              </div>
              <div className="pokemon-info">
                {/* Skeleton Title */}
                <div className="skeleton-text shimmer"></div>
                {/* Skeleton Types */}
                <div className="skeleton-types">
                  <div className="skeleton-type shimmer"></div>
                  <div className="skeleton-type shimmer"></div>
                </div>
                {/* Skeleton Stats */}
                <div className="skeleton-stats">
                  <div className="skeleton-stat shimmer"></div>
                  <div className="skeleton-stat shimmer"></div>
                  <div className="skeleton-stat shimmer"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pokemon-container">
        <div className="error-container">
          <div className="error-icon">!</div>
          <h2>Failed to Load Pokemon</h2>
          <p>{error}</p>
          <button onClick={onRetry} className="retry-btn">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pokemon-container">
      <div className="pokemon-grid">
        {pokemonData.map((pokemon, index) => (
          <div 
            key={pokemon.id} 
            className="pokemon-card"
          >
            <div className="pokemon-image-wrapper">
              <img
                src={pokemon.sprites?.other?.["official-artwork"]?.front_default || pokemon.sprites?.front_default}
                alt={pokemon.name}
                className="pokemon-image"
                loading="lazy"
              />
            </div>
            <div className="pokemon-info">
              <h3 className="pokemon-name">{pokemon.name.toUpperCase()}</h3>
              <div className="pokemon-types">
                {pokemon.types.map((type, idx) => (
                  <span key={idx} className={`type-badge type-${type.type.name}`}>
                    {type.type.name}
                  </span>
                ))}
              </div>
              <div className="pokemon-stats">
                <div className="stat-item">
                  <span className="stat-label">HP</span>
                  <span className="stat-value">{pokemon.stats[0].base_stat}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">ATK</span>
                  <span className="stat-value">{pokemon.stats[1].base_stat}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">DEF</span>
                  <span className="stat-value">{pokemon.stats[2].base_stat}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;