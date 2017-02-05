'use strict';

import React from 'react';

class Container extends React.Component {

  render() {
    const { isFluid, children }  = this.props;
    return (
      <div className={`container${isFluid ? '-fluid' : ''}`}>
        { children }
      </div>
    );
  }

}

export default Container;
