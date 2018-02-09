import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TagLine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="resume">
        <h2>enter a username at the bottom and invite other to the room by sharing the link!</h2>
      </section>
    );
  }
}

export default TagLine;