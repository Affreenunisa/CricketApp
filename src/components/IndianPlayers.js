import React from "react";

const IndianPlayers = () => {
  // Players array for destructuring example
  const players = [
    "Virat Kohli",
    "Rohit Sharma",
    "Jasprit Bumrah",
    "Shubman Gill",
    "Rishabh Pant",
    "KL Rahul",
  ];

  // Separate even and odd indexed players using destructuring & filter
  const evenIndexedPlayers = players.filter((_, index) => index % 2 === 0);
  const oddIndexedPlayers = players.filter((_, index) => index % 2 !== 0);

  // Two arrays - T20 and Ranji Trophy players
  const T20Players = ["Hardik Pandya", "Ravindra Jadeja"];
  const RanjiTrophyPlayers = ["Cheteshwar Pujara", "Mayank Agarwal"];

  // Merge them with spread operator
  const mergedPlayers = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <section>
      <h2>Odd Indexed Players</h2>
      <ul>
        {oddIndexedPlayers.map((player, idx) => (
          <li key={idx}>{player}</li>
        ))}
      </ul>

      <h2>Even Indexed Players</h2>
      <ul>
        {evenIndexedPlayers.map((player, idx) => (
          <li key={idx}>{player}</li>
        ))}
      </ul>

      <h2>Merged Players (T20 + Ranji Trophy)</h2>
      <ul>
        {mergedPlayers.map((player, idx) => (
          <li key={idx}>{player}</li>
        ))}
      </ul>
    </section>
  );
};

export default IndianPlayers;
