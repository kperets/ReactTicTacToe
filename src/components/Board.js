/**
 * Created by kperets on 01/04/2017.
 */

import React, { Component } from 'react';
import Square from './Square'

class Board extends Component {

  handleClick(square) {
    this.props.onSquareClick(square);
  }


  render () {
    let board = this.props.board;
    let squares;
    squares = board.map(square => {
      return (
        <Square key={square.id} square={square} onSquareClick={this.handleClick.bind(this)}/>
      );
    });
    return (
      <div className="board">
        {squares};
      </div>
    );
  }
}

export default Board;