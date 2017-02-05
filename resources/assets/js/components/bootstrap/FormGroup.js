'use strict';

import React from 'react';

class FormGroup extends React.Component {

  render() {
    const { className, children } = this.props;
    return (
      <div className={`form-group ${className ? className : ''}`}>
        { children }
      </div>
    );
  }

}

export default FormGroup;
