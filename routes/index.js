var express = require("express");
var router = express.Router();

router.post("/game", function(req, res) {
  res.send(game.data);
});

router.post("/game/:id/movement", function(req, res) {
  if (checkGame(req.params.id, gameId) == false) {
    res.send(game.gameNotFound);
  } else if (notYourTurn(req.body.player, lastPlayer) == true) {
    res.send(game.turn);
  } else {
    makePlay(req.body.position.x, req.body.position.y);
    if (winnerColumn() == "X" || winnerColumn() == "O") {
      res.send(resp);
    } else if (winnerLine() == "X" || winnerLine() == "O") {
      res.send(resp);
    } else if (winnerDiagonal() == "X" || winnerDiagonal() == "O") {
      res.send(resp);
    } else if (playTotal >= 6) {
      res.send(game.oldMessage);
    } else {
      res.send(resp);
    }
  }
});

var checkGame = (requestedGame, realGame) => {
  if (requestedGame != realGame) return false;
};

var notYourTurn = (thisPlayer, playerBefore) => {
  if (thisPlayer != playerBefore) return true;
};

var makePlay = (positionX, positionY) => {
  if (lastPlayer == "X") {
    if (game.board[positionX][positionY] == 0) {
      game.board[positionX][positionY] = -1;
      lastPlayer = "O";
      playTotal++;
      resp = game.validPlay;
    } else {
      resp = game.invalidPlay;
    }
  } else if (lastPlayer == "O") {
    if (game.board[positionX][positionY] == 0) {
      game.board[positionX][positionY] = 1;
      lastPlayer = "X";
      playTotal++;
      resp = game.validPlay;
    } else {
      resp = game.invalidPlay;
    }
  }
};

var winnerDiagonal = () => {
  if (game.board[0][0] + game.board[1][1] + game.board[2][2] == -3) {
    resp = game.xWinnerMessage;
    return "X";
  }
  if (game.board[0][0] + game.board[1][1] + game.board[2][2] == 3) {
    resp = game.oWinnerMessage;
    return "O";
  }
  if (game.board[0][2] + game.board[1][1] + game.board[2][0] == -3) {
    resp = game.xWinnerMessage;
    return "X";
  }
  if (game.board[0][2] + game.board[1][1] + game.board[2][0] == 3) {
    resp = game.oWinnerMessage;
    return "O";
  }
  return false;
};

var winnerLine = () => {
  for (line = 0; line < 3; line++) {
    var count = game.board[line][0] + game.board[line][1] + game.board[line][2];
    if (count == 3) {
      resp = game.oWinnerMessage;
      return "O";
    } else if (count == -3) {
      resp = game.xWinnerMessage;
      return "X";
    }
  }
  return false;
};

var winnerColumn = () => {
  for (column = 0; column < 3; column++) {
    var count =
      game.board[0][column] + game.board[1][column] + game.board[2][column];
    if (count == 3) {
      resp = game.oWinnerMessage;
      return "O";
    } else if (count == -3) {
      resp = game.xWinnerMessage;
      return "X";
    }
  }
  return false;
};

var gameId = "";

var lastPlayer = "";

var resp = "";

var playTotal = 0;

const game = {
  data: {
    id: "",
    firstPlayer: ""
  },

  options: ["X", "O"],

  board: [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ],

  turn: {
    msg: "Não é o turno do jogador"
  },

  gameNotFound: {
    msg: "Partida não encontrada"
  },

  invalidPlay: {
    msg: "Jogada invalida"
  },

  validPlay: {
    msg: "Jogada realizada"
  },

  xWinnerMessage: {
    msg: "Partida finalizada",
    winner: "X"
  },

  oWinnerMessage: {
    msg: "Partida finalizada",
    winner: "O"
  },

  oldMessage: {
    msg: "Partida finalizada",
    winner: "Draw"
  },

  // Functions

  start() {
    game.data.id =
      Math.floor(new Date().getTime() / 1000) +
      Math.floor(Math.random() * 100 + 1);
    gameId = game.data.id;

    lastPlayer = game.options[Math.random() < 0.5 ? 0 : 1];
    game.data.firstPlayer = lastPlayer;
  }
};

game.start();

module.exports = router;
