(() => {
  const Gameboard = (() => {
    let board = [
      ['', 'X', ''],
      ['', 'O', ''],
      ['', '', ''],
    ];

    const getBoard = () => {
      return board;
    };

    const resetBoard = () => {
      board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ];
    };

    const getCell = (m, n) => {
      let result = 0;
      result += m * 3;
      result += n;
      return result;
    };

    const placeToken = (token, index) => {
      let m = Math.floor(index / 3);
      let n = index % 3;
      console.log(m + '.' + n);
      if (board[m][n] == '') {
        board[m][n] = token;
      }
    };

    const checkWinner = (token) => {
      if (
        board[0][0].match(token) &&
        board[0][1].match(token) &&
        board[0][2].match(token)
      ) {
        return true;
      } else if (
        board[1][0].match(token) &&
        board[1][1].match(token) &&
        board[1][2].match(token)
      ) {
        return true;
      } else if (
        board[2][0].match(token) &&
        board[2][1].match(token) &&
        board[2][2].match(token)
      ) {
        return true;
      } else if (
        board[0][0].match(token) &&
        board[1][0].match(token) &&
        board[2][0].match(token)
      ) {
        return true;
      } else if (
        board[0][1].match(token) &&
        board[1][1].match(token) &&
        board[2][1].match(token)
      ) {
        return true;
      } else if (
        board[0][2].match(token) &&
        board[1][2].match(token) &&
        board[2][2].match(token)
      ) {
        return true;
      } else if (
        board[0][0].match(token) &&
        board[1][1].match(token) &&
        board[2][2].match(token)
      ) {
        return true;
      } else if (
        board[0][2].match(token) &&
        board[1][1].match(token) &&
        board[2][0].match(token)
      ) {
        return true;
      } else {
        return false;
      }
    };

    const checkTie = () => {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] == '') {
            return false;
          }
        }
      }
      return true;
    };

    return { getBoard, resetBoard, placeToken, checkWinner };
  })();

  const Player = (symbol) => {
    let score = 0;
    let token = symbol;

    const increaseScore = () => score++;

    return { score, token, increaseScore };
  };

  const cells = document.querySelectorAll('.cell');
  console.log(cells);
  cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
      if (cell.innerHTML == '') {
        // cell.innerHTML = currPlayer.token;
        Gameboard.placeToken(currPlayer.token, index);
        if (Gameboard.checkWinner(currPlayer.token)) {
          document.querySelector(
            '.winner'
          ).innerHTML = `The winner is ${currPlayer.token}`;
          console.log('winner');
          document.querySelector('.game-grid').innerHTML = '';
        }

        if (currPlayer == player1) {
          currPlayer = player2;
        } else {
          currPlayer = player1;
        }
        console.log(Gameboard.getBoard());
        Game.renderBoard();
      }
    });
  });

  const Game = (() => {
    const renderBoard = () => {
      const board = Gameboard.getBoard();
      for (let i = 0; i < cells.length; i++) {
        let m = Math.floor(i / 3);
        let n = i % 3;
        if (board[m][n] == 'X') {
          cells[i].innerHTML = 'X';
        } else if (board[m][n] == 'O') {
          cells[i].innerHTML = 'O';
        }
      }
    };

    return { renderBoard };
  })();

  const player1 = Player('X');
  const player2 = Player('O');
  let currPlayer = player1;

  Game.renderBoard();
  console.log(Gameboard.getBoard());
  Gameboard.placeToken(player1.token, 1, 2);
  console.log(Gameboard.getBoard());
})();
