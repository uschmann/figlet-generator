'use strict';

import React from 'react';
import axios from 'axios';
import random from 'random-name';
import Figlet from './Figlet';
import TextInput from './TextInput';
import { Container, Row, Col } from './bootstrap';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { figlet: '' };
    this.onText = this.onText.bind(this);
  }

  componentDidMount() {
    this.onText(random.place());
  }

  onText(text) {
    axios.get(`/figlet?text=${text}`)
    .then(response => {
      const figlet  = response.data;
      this.setState({ figlet });
    });
  }

  render() {
    const { figlet, text } = this.state;
    return (
      <Container>
        <Row>
          <Col size={{md:12}}>
            <h1>Figlet generator</h1>
          </Col>
        </Row>
        <Row>
          <Col size={{md:6}}>
            <label>Result</label>
            <Figlet figlet={figlet} />
          </Col>
          <Col size={{md:6}}>
            <TextInput onText={this.onText} />
          </Col>
        </Row>
      </Container>
    );
  }

};
