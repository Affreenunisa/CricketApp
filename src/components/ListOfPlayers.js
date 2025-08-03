    import React from "react";

const playersData = [
  { name: "Virat Kohli", score: 85 },
  { name: "Rohit Sharma", score: 65 },
  { name: "Jasprit Bumrah", score: 55 },
  { name: "Shubman Gill", score: 75 },
  { name: "Rishabh Pant", score: 45 },
  { name: "KL Rahul", score: 90 },
  { name: "Hardik Pandya", score: 60 },
  { name: "Cheteshwar Pujara", score: 80 },
  { name: "Ravindra Jadeja", score: 50 },
  { name: "Ishant Sharma", score: 30 },
  { name: "Kedar Jadhav", score: 70 },
];

const ListOfPlayers = () => {
  // Render full players list
  const fullPlayerList = playersData.map(({ name, score }, idx) => (
    <li key={idx}>
      {name} - Score: {score}
    </li>
  ));

  // Filter players with score below 70 using arrow function
  const filteredPlayers = playersData.filter(({ score }) => score < 70);

  const filteredPlayerList = filteredPlayers.map(({ name, score }, idx) => (
    <li key={idx}>{`${name} - Score: ${score}`}</li>
  ));

  return (
    <section>
      <h2>All Players</h2>
      <ul>{fullPlayerList}</ul>

      <h2>Players with Scores Below 70</h2>
      <ul>{filteredPlayerList}</ul>
    </section>
  );
};

export default ListOfPlayers;
