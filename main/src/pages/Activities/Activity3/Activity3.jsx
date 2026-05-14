import { useState, useEffect } from "react";
import "./Activity3.css";
import AnimeCard from "../../../components/anime-card/AnimeCard";

function Activity3() {
    const [animeList, setAnimeList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchAnime = async () => {
            const startTime = Date.now();
            
            try {
                const response = await fetch("/anime.json");
                if (!response.ok) {
                    throw new Error('Failed to fetch anime data');
                }
                const data = await response.json();
                
                const elapsedTime = Date.now() - startTime;
                const minLoadTime = 1000;
                
                if (elapsedTime < minLoadTime) {
                    await new Promise(resolve => setTimeout(resolve, minLoadTime - elapsedTime));
                }
                
                setAnimeList(data.animeList || []);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching anime:", err);
                setLoading(false);
            }
        };

        fetchAnime();
    }, []);

    const handleLike = (id) => {
        console.log(`Liked anime with id: ${id}`);
    };

    const filteredAnime = animeList.filter((anime) =>
        anime.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className="loader-container">
                <div className="loader"></div>
                <p className="loading-text">Loading anime...</p>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="header">
                <div className="logo">
                    <div className="logo-text">ANIME<span>LIST</span></div>
                </div>
                <input
                    type="text"
                    placeholder="Search anime..."
                    className="searchInput"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="resultsCount">
                Found {filteredAnime.length} titles
            </div>

            <div className="animeList">
                {filteredAnime.length > 0 ? (
                    filteredAnime.map((anime) => (
                        <AnimeCard
                            key={anime.id}
                            anime={anime}
                            onLike={handleLike}
                        />
                    ))
                ) : (
                    <div className="empty-state">
                        😅 No anime found matching "{searchTerm}"
                    </div>
                )}
            </div>
        </div>
    );
}

export default Activity3;