'use strict';

import React from 'React';

class Button extends React.Component {

  render() {
    const { onClick, children } = this.props;

    let { className, modifier, isBlock } = this.props;
    let blockClass = isBlock ? 'btn-block' : '';
    className = className || '';
    modifier = modifier ? `btn-${modifier}` : '';


    return (
      <button className={`btn ${className} ${modifier} ${blockClass}`}>
        { children }
      </button>
    );
  }

}

Button.defaultProps = {
  onClick: () => {}
};

export default Button;
