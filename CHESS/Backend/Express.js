const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

let gameState = {
  board: [...Array(8)].map(() => Array(8).fill(null)), // Empty chessboard
  winner: null
};

app.post('/api/move', (req, res) => {
  const { from, to } = req.body;
  // Update board logic (validate move, update positions, check winner)
  res.json({ success: true, state: gameState });
});

app.get('/api/winner', (req, res) => {
  res.json({ winner: gameState.winner });
});

app.listen(3000, () => {
  console.log('Chess game server running on http://localhost:3000');
});
