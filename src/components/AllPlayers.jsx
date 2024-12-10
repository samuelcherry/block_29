import { useState, useEffect } from "react";
import fetchAllPlayers from "../API/index";
import { Link } from "react-router-dom";

const APIURL =
  "https://fsa-puppy-bowl.herokuapp.com/api/2410-FTB-ET-WEB-FT/players";

export default function PlayerList() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPlayers() {
      try {
        const data = await fetchAllPlayers();
        setPlayers(data); // Use the data returned from fetchAllPlayers
      } catch (error) {
        setError(error.message); // Handle error
      }
    }

    loadPlayers();
  }, []);

  if (error) {
    return <div>Error: {error}</div>; // Render error message
  }

  const handleDetailsClick = (playerId) => {
    console.log(`Play Id: ${playerId} clicked for details.`);
  };

  const handleDeleteClick = async (playerId) => {
    try {
      const response = await fetch(`${APIURL}/${playerId}`, {
        method: "DELETE"
      });

      if (response.ok) {
        const json = await response.json().catch(() => null);

        if (json && json.error) {
          throw new Error(json.error.message);
        }
      }
      const newPlayers = players.filter((e) => e.id !== playerId);
      setPlayers(newPlayers);
    } catch (err) {
      console.error(
        `Whoops, trouble removing player #${playerId} from the roster!`,
        err
      );
    }
  };

  const [search, setSearch] = useState("");
  console.log(search);

  const filteredPlayers = players.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <label htmlFor="search">Search Bar </label>
      <input
        type="search"
        name="searchtext"
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <div className="playerCardContainer">
        {filteredPlayers.length ? (
          filteredPlayers.map((player) => (
            <div key={player.id} className="playerCardAll">
              <p className="title">{player.name}</p>
              <p className="breed">{player.breed}</p>
              <h5>{player.status}</h5>
              <img src={`${player.imageUrl}`} alt={`${player.name}`}></img>
              <Link to={`/${player.id}`}>
                <button onClick={() => handleDetailsClick(player.id)}>
                  Details
                </button>
              </Link>
              <button onClick={() => handleDeleteClick(player.id)}>
                remove player
              </button>
            </div>
          ))
        ) : (
          <p>no players found</p>
        )}
      </div>
    </>
  );
}
