async function fetchAllPlayers() {
  try {
    const response = await fetch(
      "https://fsa-puppy-bowl.herokuapp.com/api/2410-FTB-ET-WEB-FT/players"
    );
    const result = await response.json();
    return result.data.players; // Return the player data
  } catch (error) {
    throw new Error(error.message); // Throw error for caller to handle
  }
}
export default fetchAllPlayers;
