'use strict';

import React from 'react';
import { FormGroup, InputText, Button } from './bootstrap';

class TextInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { text } = this.state;
    this.props.onText(text);
  }

  onChange(text) {
    this.setState({ text });
  }

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <FormGroup>
          <label>Insert text</label>
          <InputText value={text} onChange={this.onChange}/>
        </FormGroup>
        <FormGroup>
          <Button modifier='primary' isBlock={true}>
            Generate!
          </Button>
        </FormGroup>
      </form>
    );
  }

}

export default TextInput;
