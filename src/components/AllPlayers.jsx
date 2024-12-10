import { fetchAllPlayers } from "../API";
import { useEffect } from "react";

const AllPlayers = () => {
  useEffect(() => {
    async function getAllPlayers() {
      const response = await fetchAllPlayers();
      console.log(response.data);
    }
    getAllPlayers();
  }, []);

  return <div>AllPlayers</div>;
};

export default AllPlayers;
