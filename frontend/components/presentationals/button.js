import React, { Component } from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input className="button" 
             type="submit"
             value={this.props.value}></input>
    );
  }
}

export default Button;