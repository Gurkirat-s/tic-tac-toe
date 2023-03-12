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

    const placeToken = (token, i, j) => {
      if (board[i][j] == '') {
        board[i][j] = token;
      }
    };

    return { getBoard, resetBoard, placeToken };
  })();

  const Player = (symbol) => {
    let score = 0;
    let token = symbol;

    const getScore = () => score;
    const getToken = () => token;
    const increaseScore = () => score++;

    return { getScore, getToken, increaseScore };
  };

  const renderBoard = (board) => {
    let cells = document.querySelectorAll('.cell');
    console.log(board);
    for (let i = 0; i < cells.length; i++) {
      let m = Math.floor(i / 3);
      let n = i % 3;
      console.log(m + ', ' + n);
      console.log(board[m][n]);
      if (board[m][n] == 'X') {
        cells[i].innerHTML = 'X';
      } else if (board[m][n] == 'O') {
        cells[i].innerHTML = 'O';
      }
    }
  };

  renderBoard(Gameboard.getBoard());

  const player1 = Player('X');
  console.log(Gameboard.getBoard());
  Gameboard.placeToken(player1.getToken(), 1, 2);
  console.log(Gameboard.getBoard());
})();
