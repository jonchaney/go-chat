import React, { Component } from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input type="text"
             onChange={this.props.onChange}
             placeholder={this.props.placeholder}></input>
    );
  }
}

export default Input;