import React, { Component } from 'react';

import './App.css';
import BigContainer from "./containers/BigContainer";
import PersonContainer from "./containers/PersonContainer"


class App extends Component {

  state = {
    current_user_arr: [],
    squad: [],
    current_user: 0,
    selected_color: 'red'
  }

  displayCurrent = () => {
    return this.state.current_user_arr.slice(
      this.state.current_user,
      this.state.current_user + 1
   )}

  displayNext = () => {
   this.setState({
     current_user: this.state.current_user + 1
   });
  };

  displayLast = () => {
    this.setState({
      current_user: this.state.current_user - 1
    });
  }

  addToSquad = () => {
    this.setState({
      squad: [...this.state.squad, this.state.current_user_arr[this.state.current_user]]})
  }

  componentDidMount(){
    fetch(`https://uifaces.co/api?limit=55`,{
      headers: {
        'X-API-KEY': '7f3df9a0d7dcbf383d1f67363c33eb'},})
        .then(r => r.json())
        .then(data => this.setState({ current_user_arr: data })
        );
      };

  render() {
    return (
      <div className="App">
          <h1 className="App-title">Squad Up</h1>
          <BigContainer
          current_user_arr={this.displayCurrent()}
          squad={this.state.squad}
          current_user={this.state.current_user}
          next={this.displayNext}
          last={this.displayLast}
          add={this.addToSquad}
          selected_color={this.state.selected_color}
          />
      </div>
    );
  }
}

export default App;
