'use strict';

import React from 'react';

class Figlet extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { figlet } = this.props;
    return (
      <div>
        <pre>
        { figlet }
        </pre>
      </div>
    );
  }

}

export default Figlet;
