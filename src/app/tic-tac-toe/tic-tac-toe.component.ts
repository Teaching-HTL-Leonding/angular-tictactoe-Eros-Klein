import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  standalone: true,
  imports: [],
  templateUrl: './tic-tac-toe.component.html',
  styleUrl: './tic-tac-toe.component.css'
})
export class TicTacToeComponent {
  board: string[] = ['', '', '', '', '', '', '', '', ''];
  player: string = 'X';
  winner: string = "";

  makeMove(position: number) {
    if (!this.board[position] && !this.winner) {
      this.board[position] = this.player;
      this.player = this.player === 'X' ? 'O' : 'X';
      this.checkWinner();
    }

    if(!this.board.includes('') && this.winner === "") {
      this.winner = "Nobody";
    }
  }

  checkWinner() {
    let winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (let combo of winningCombos) {
      let [a, b, c] = combo;
      if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        this.winner = this.board[a];
        break;
      }
    }
  }

  reset() {
    this.board = ['', '', '', '', '', '', '', '', ''];
    this.player = 'X';
    this.winner = "";
  }
}
