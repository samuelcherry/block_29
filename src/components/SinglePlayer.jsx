import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchAllPlayers from "../API/index";

export default function singlePlayer() {
  const { playerId } = useParams();
  const [player, setPlayer] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPlayerData() {
      try {
        const response = await fetchAllPlayers();
        const selectedPlayer = response.find(
          (player) => String(player.id) === String(playerId)
        );
        setPlayer(selectedPlayer);
        console.log(selectedPlayer);
      } catch (error) {
        setError(error.message); // Handle error
      }
    }

    loadPlayerData();
  }, [playerId]);

  if (error) {
    return <div>Error: {error}</div>; // Render error message
  }
  if (!player) {
    return <div>Loading...</div>;
  }

  return (
    <div key={player.id} className="playerCardAll">
      <p className="title">{player.name}</p>
      <p className="breed">{player.breed}</p>
      <h5>{player.status}</h5>
      <img src={`${player.imageUrl}`} alt={`${player.name}`}></img>
    </div>
  );
}
