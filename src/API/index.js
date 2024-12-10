export default function PlayerList() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAllPlayers() {
      try {
        const response = await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/2410-FTB-ET-WEB-FT/players"
        );
        const result = await response.json();
        console.log(result.data.players);
        setPlayers(result.data.players);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchAllPlayers();
  }, []);

  return (
    <div>
      <ul>
        {players.map((player) => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
}
