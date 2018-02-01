import React, { Component } from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input className="input"
            type="text"
            autoFocus={this.props.autoFocus}
            onChange={this.props.onChange}
            placeholder={this.props.placeholder}
            value={this.props.value}></input>
    );
  }
}

export default Input;