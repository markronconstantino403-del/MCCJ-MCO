import { useState } from "react";

function AnimeCard({ anime, onLike }) {
    const [isLiked, setIsLiked] = useState(false);
    const [imageError, setImageError] = useState(false);

    const handleLikeClick = (e) => {
        e.stopPropagation();
        setIsLiked(!isLiked);
        if (onLike) onLike(anime.id);
    };

    // Get age rating
    const getAgeRating = (title) => {
        if (title.includes("Attack on Titan")) return "18+";
        if (title.includes("Demon Slayer")) return "16+";
        if (title.includes("Jujutsu Kaisen")) return "16+";
        if (title.includes("Berserk")) return "18+";
        return "Free";
    };

    // Get adaptation type
    const getAdaptation = (title) => {
        if (title.includes("One Punch Man")) return "Comic adaptation";
        if (title.includes("Attack on Titan")) return "Manga adaptation";
        if (title.includes("Demon Slayer")) return "Comic adaptation";
        if (title.includes("My Hero Academia")) return "Comic adaptation";
        if (title.includes("Jujutsu Kaisen")) return "Manga adaptation";
        return "Novel adaptation";
    };

    return (
        <div className="anime-card">
            {/* Default View - Simple with Image */}
            <div className="anime-default">
                <div className="age-rating">{getAgeRating(anime.title)}</div>
                {anime.image && !imageError ? (
                    <img 
                        src={anime.image} 
                        alt={anime.title}
                        className="anime-image"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="anime-icon">🎬</div>
                )}
                <div className="anime-title">{anime.title}</div>
            </div>

            {/* Hover View - Detailed Popup Inside */}
            <div className="anime-hover">
                {anime.image && !imageError ? (
                    <img 
                        src={anime.image} 
                        alt={anime.title}
                        className="hover-image"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="hover-icon">🎬</div>
                )}
                <div className="hover-badge">{getAdaptation(anime.title)}</div>
                <div className="hover-title">{anime.title}</div>
                <div className="hover-meta">
                    <span className="hover-rating">⭐ {anime.rating}/10</span>
                    <span className="hover-episodes">📺 {anime.episodes} episodes</span>
                </div>
                <div className="hover-description">
                    {anime.description}
                </div>
                <div className="hover-adaptation">
                    📖 <span>{getAdaptation(anime.title)}</span>
                </div>
                <button 
                    onClick={handleLikeClick}
                    className={`hover-like-btn ${isLiked ? 'liked' : ''}`}
                >
                    {isLiked ? '❤️ Liked' : '🤍 Like'}
                </button>
            </div>
        </div>
    );
}

export default AnimeCard;