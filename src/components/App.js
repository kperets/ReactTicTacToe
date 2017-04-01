import React, { Component } from 'react';
import './App.css';
import Board from './Board'
import Winner from './Winner'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        {id:0, value:""}, {id:1, value:""}, {id:2, value:""},
        {id:3, value:""}, {id:4, value:""}, {id:5, value:""},
        {id:6, value:""}, {id:7, value:""}, {id:8, value:""}
      ],
      currentPlayer: 'X',
      player1: 'X',
      player2: 'O',
      winner: false
    }
  }

  checkWinner(square){
    let winCombos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
    let relevantCombos = [];
    winCombos.forEach(combo => {
      if(combo.findIndex(i => i === square.id) >= 0){
        relevantCombos.push(combo);
      }
    });

    if(relevantCombos.find(combo => {
      let board = this.state.board;
      console.log('checking combo ', combo);
      console.log('for value and id ', square.value, square.id);

      if((board[combo[0]].value === square.value) &&
        (board[combo[1]].value === square.value) &&
        (board[combo[2]].value === square.value)) {
        return true;
      }
      return false;

    })){
      return square.value;
    }
    return false;

  }

  handleClick(square) {
    if (!this.state.winner && square.value === "") {
      let state = this.state;
      let nextPlayer = (state.currentPlayer === state.player1) ? state.player2 : state.player1;
      state.board[square.id].value = state.currentPlayer;
      this.setState({currentPlayer:nextPlayer, board:state.board, winner: this.checkWinner(square)})
    }
  }

  render() {
    return (
      <div className="App">
        <Winner winner={this.state.winner} />
        <Board board={this.state.board} onSquareClick={this.handleClick.bind(this)}/>
      </div>
    );
  }
}

export default App;
