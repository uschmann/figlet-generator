'use strict';

import React from 'react';
import axios from 'axios';
import Figlet from './Figlet';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      figlet: '',
      text: ''
    };
    this.onTextChange = this.onTextChange.bind(this);
    this.loadFiglet = this.loadFiglet.bind(this);
  }

  onTextChange(e) {
    const text = e.currentTarget.value;
    this.setState({ text });
  }

  loadFiglet() {
    const { text } = this.state;
    axios.get(`/figlet?text=${text}`)
    .then(response => {
      const text  = response.data;
      this.setState({figlet: text});
    });
  }

  render() {
    const { figlet, text } = this.state;
    return (
      <div>
        <input type='text'
               value={text}
               onChange={this.onTextChange}/>
        <button onClick={this.loadFiglet}>
          Go
        </button>
        <Figlet figlet={figlet}/>
      </div>
    );
  }

};
