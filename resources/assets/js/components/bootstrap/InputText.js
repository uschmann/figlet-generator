'use strict';

import React from 'react';

class InputText extends React.Component {

  render() {
    const {
      className,
      children,
      onChange,
      value
    } = this.props;

    return (
      <input type='text'
             className={ `form-control ${className ? className : ''}` }
             value={ value }
             onChange={ e => onChange(e.currentTarget.value) } />
    );
  }

}

export default InputText;
