'use strict';

import React from 'react';

class Row extends React.Component {

  render() {
    const { children, className } = this.props;
    return (
      <div className={`row ${className}`}>
        { children }
      </div>
    );
  }

}

export default Row;
