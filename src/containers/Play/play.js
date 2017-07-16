import React, { Component } from 'react';

import './play.scss';
import Table from '../../components/Table/table';

class Play extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Play</h1>
        <Table/>
      </div>
    );
  }
}

export default Play;
