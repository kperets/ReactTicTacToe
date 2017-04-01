/**
 * Created by kperets on 01/04/2017.
 */

import React, { Component } from 'react';

class Winner extends Component {

  render () {
    if(this.props.winner){
      return <h1>The winner is '{this.props.winner}'</h1>
    }
    return null;
  }
}

export default Winner;