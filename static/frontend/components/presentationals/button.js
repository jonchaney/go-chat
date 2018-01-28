import React, { Component } from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input type="submit"
        onClick={this.props.onClick}
        value={this.props.value}></input>
    );
  }
}

export default Button;