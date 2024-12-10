import React from "react";
import { useState } from "react";
import fetchAllPlayers from "../API";

const APIURL =
  "https://fsa-puppy-bowl.herokuapp.com/api/2410-FTB-ET-WEB-FT/players";

const addNewPlayer = async (playerObj) => {
  const response = await fetch(APIURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(playerObj)
  });
  console.log(response);
};

const NewPlayerForm = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const playerObj = {
      name,
      breed,
      imageUrl
    };
    addNewPlayer(playerObj);
  };

  return (
    <div className="form-container">
      <form id="new-player-form" onSubmit={handleSubmit}>
        <label htmlFor="playerName"> Name </label>
        <input
          type="text"
          name="playerName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="playerBreed"> Breed </label>
        <input
          type="text"
          name="playerBreed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />

        <label htmlFor="playerImage"> Image </label>
        <input
          type="text"
          name="playerImage"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <button type="submit" name="submit">
          Submit
        </button>
      </form>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
};

export default NewPlayerForm;
