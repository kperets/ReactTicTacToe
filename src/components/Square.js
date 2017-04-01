/**
 * Created by kperets on 01/04/2017.
 */

import React, { Component } from 'react';

class Square extends Component {

  handleClick(square){
    this.props.onSquareClick(square);
  }

  render () {
    let currentSquare = this.props.square.value;
    return (
      <div className="square" onClick={this.handleClick.bind(this, this.props.square)}>
        {currentSquare}
      </div>
    );
  }
}

export default Square;