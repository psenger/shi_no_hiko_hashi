import React, { Component } from 'react';
import Card from './components/card/Card';
import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(){

  }
  render() {

    return (
      <div>
        <Card value={1} onClickHandler={this.onClickHandler}/>
        <Card value={1} onClickHandler={this.onClickHandler}/>
        <Card value={1} onClickHandler={this.onClickHandler}/>
        <Card value={1} onClickHandler={this.onClickHandler}/>
        <Card value={1} onClickHandler={this.onClickHandler}/>
        <Card value={1} onClickHandler={this.onClickHandler}/>
        <Card value={1} onClickHandler={this.onClickHandler}/>
      </div>
    );
  }
}

export default App;
